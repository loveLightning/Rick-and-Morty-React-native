import React, { createContext, useContext, useMemo, useReducer } from 'react'

import { QueryCharactersArgs } from 'src/apollo'
import { FiltersActionTypes } from 'src/types'
import { defaultCharacterFiltersValues } from 'src/utils'

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
  filters: QueryCharactersArgs
  appliedFilters: QueryCharactersArgs
  updateFilters: (val: string, key: string) => void
  clearFilters: () => void
  applyFilters: () => void
}

interface ReducerFilters {
  filters: QueryCharactersArgs
  appliedFilters: QueryCharactersArgs
}

const initialValues: FiltersContext = {
  filters: defaultCharacterFiltersValues,
  appliedFilters: defaultCharacterFiltersValues,

  updateFilters: () => undefined,
  applyFilters: () => undefined,
  clearFilters: () => undefined,
}

export const characterFiltersReducer = (
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

const CharacterFiltersContext = createContext<FiltersContext>(initialValues)

export const CharactersProvider = ({ children }: Props) => {
  const initialValuesReducer = {
    filters: defaultCharacterFiltersValues,
    appliedFilters: defaultCharacterFiltersValues,
  }

  const [state, dispatch] = useReducer(
    characterFiltersReducer,
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
    <CharacterFiltersContext.Provider value={values}>
      {children}
    </CharacterFiltersContext.Provider>
  )
}

export const useCharacterFiltersContext = () =>
  useContext(CharacterFiltersContext)
