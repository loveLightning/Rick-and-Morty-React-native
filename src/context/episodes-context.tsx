import React, { createContext, useContext, useMemo, useReducer } from 'react'

import { QueryEpisodesArgs } from 'src/apollo'
import { FiltersActionTypes } from 'src/types'
import { defaultEpisodeFiltersValues } from 'src/utils'

interface ActionType {
  type: FiltersActionTypes
  payload?: {
    key?: string
    value?: string
  }
}

interface Props {
  children: React.ReactNode
}

interface FiltersContext {
  filters: QueryEpisodesArgs
  appliedFilters: QueryEpisodesArgs
  updateFilters: (val: string, key: string) => void
  clearFilters: () => void
  applyFilters: () => void
}

interface ReducerFilters {
  filters: QueryEpisodesArgs
  appliedFilters: QueryEpisodesArgs
}

const initialValues: FiltersContext = {
  filters: defaultEpisodeFiltersValues,
  appliedFilters: defaultEpisodeFiltersValues,

  updateFilters: () => undefined,
  applyFilters: () => undefined,
  clearFilters: () => undefined,
}

export const episodeFiltersReducer = (
  state: ReducerFilters,
  action: ActionType,
): ReducerFilters => {
  switch (action.type) {
    case FiltersActionTypes.UPDATE: {
      if (!action.payload?.key) {
        return state
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          filter: {
            ...state.filters.filter,
            [action.payload.key]: action.payload.value,
          },
        },
      }
    }

    case FiltersActionTypes.APPLY: {
      return {
        ...state,
        appliedFilters: state.filters,
      }
    }

    case FiltersActionTypes.CLEAR: {
      return {
        appliedFilters: initialValues.appliedFilters,
        filters: initialValues.filters,
      }
    }

    default: {
      return state
    }
  }
}

const EpisodeFiltersContext = createContext<FiltersContext>(initialValues)

export const EpisodesProvider = ({ children }: Props) => {
  const initialValuesReducer = {
    filters: defaultEpisodeFiltersValues,
    appliedFilters: defaultEpisodeFiltersValues,
  }

  const [state, dispatch] = useReducer(
    episodeFiltersReducer,
    initialValuesReducer,
  )

  const updateFilters = (key: string, value: string) => {
    dispatch({
      type: FiltersActionTypes.UPDATE,
      payload: { key, value },
    })
  }

  const clearFilters = () => {
    dispatch({ type: FiltersActionTypes.CLEAR })
  }

  const applyFilters = () => {
    dispatch({ type: FiltersActionTypes.APPLY })
  }

  const filters = state.filters
  const appliedFilters = state.appliedFilters

  const values = useMemo(
    () => ({
      filters,
      appliedFilters,
      updateFilters,
      clearFilters,
      applyFilters,
    }),
    [appliedFilters, filters],
  )

  return (
    <EpisodeFiltersContext.Provider value={values}>
      {children}
    </EpisodeFiltersContext.Provider>
  )
}

export const useEpisodeFiltersContext = () => useContext(EpisodeFiltersContext)
