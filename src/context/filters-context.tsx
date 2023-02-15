import React, { createContext, useContext, useMemo, useReducer } from 'react'

import {
  QueryCharactersArgs,
  QueryEpisodesArgs,
  QueryLocationsArgs,
} from 'src/apollo'
import { FilterTypes } from 'src/types'
import {
  defaultCharacterFiltersValues,
  defaultEpisodeFiltersValues,
  defaultLocationFiltersValues,
} from 'src/utils'

enum FiltersActionTypes {
  UPDATE,
  CLEAR,
  APPLY,
}

interface ActionType {
  type: FiltersActionTypes
  payload?: {
    key?: string
    value?: string
    category?: FilterTypes
  }
}

interface Props {
  children: React.ReactNode
}

interface FilterArgsTypes {
  [FilterTypes.character]: QueryCharactersArgs
  [FilterTypes.location]: QueryLocationsArgs
  [FilterTypes.episode]: QueryEpisodesArgs
}

interface FiltersContext {
  filters: FilterArgsTypes
  appliedFilters: FilterArgsTypes
  updateFilters: (val: string, key: string, category: FilterTypes) => void
  clearFilters: (category: FilterTypes) => void
  applyFilters: () => void
}

interface ReducerFilters {
  filters: FilterArgsTypes
  appliedFilters: FilterArgsTypes
}

const initialValues: FiltersContext = {
  filters: {
    [FilterTypes.character]: defaultCharacterFiltersValues,
    [FilterTypes.location]: defaultLocationFiltersValues,
    [FilterTypes.episode]: defaultEpisodeFiltersValues,
  },
  appliedFilters: {
    [FilterTypes.character]: defaultCharacterFiltersValues,
    [FilterTypes.location]: defaultLocationFiltersValues,
    [FilterTypes.episode]: defaultEpisodeFiltersValues,
  },
  updateFilters: () => undefined,
  applyFilters: () => undefined,
  clearFilters: () => undefined,
}

export const filtersReducer = (
  state: ReducerFilters,
  action: ActionType,
): ReducerFilters => {
  switch (action.type) {
    case FiltersActionTypes.UPDATE: {
      if (!action.payload?.category || !action.payload?.key) {
        return state
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.category]: {
            ...state.filters[action.payload.category],
            filter: {
              ...state.filters[action.payload.category].filter,
              [action.payload?.key]: action.payload?.value,
            },
          },
        },
      }
    }

    case FiltersActionTypes.APPLY: {
      return {
        ...state,
        appliedFilters: {
          ...state.filters,
        },
      }
    }

    case FiltersActionTypes.CLEAR: {
      if (!action.payload?.category) {
        return state
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.category]:
            initialValues.filters[action.payload.category],
        },
        appliedFilters: {
          ...state.appliedFilters,
          [action.payload.category]:
            initialValues.filters[action.payload.category],
        },
      }
    }

    default: {
      return state
    }
  }
}

const FiltersContext = createContext<FiltersContext>(initialValues)

export const FiltersProvider = ({ children }: Props) => {
  const initialValuesReducer = {
    filters: {
      [FilterTypes.character]: defaultCharacterFiltersValues,
      [FilterTypes.location]: defaultLocationFiltersValues,
      [FilterTypes.episode]: defaultEpisodeFiltersValues,
    },
    appliedFilters: {
      [FilterTypes.character]: defaultCharacterFiltersValues,
      [FilterTypes.location]: defaultLocationFiltersValues,
      [FilterTypes.episode]: defaultEpisodeFiltersValues,
    },
  }

  const [state, dispatch] = useReducer(filtersReducer, initialValuesReducer)

  const updateFilters = (key: string, value: string, category: FilterTypes) => {
    dispatch({
      type: FiltersActionTypes.UPDATE,
      payload: { key, value, category },
    })
  }

  const clearFilters = (category: FilterTypes) => {
    dispatch({ type: FiltersActionTypes.CLEAR, payload: { category } })
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
    <FiltersContext.Provider value={values}>{children}</FiltersContext.Provider>
  )
}

export const useFiltersContext = () => useContext(FiltersContext)
