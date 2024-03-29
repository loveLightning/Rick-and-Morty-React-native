import React, { createContext, useContext, useMemo, useReducer } from 'react'

import { QueryLocationsArgs } from 'src/apollo'
import { FiltersActionTypes } from 'src/types'
import { defaultLocationFiltersValues } from 'src/utils'

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
  filters: QueryLocationsArgs
  appliedFilters: QueryLocationsArgs
  updateFilters: (val: string, key: string) => void
  clearFilters: () => void
  applyFilters: () => void
}

interface ReducerFilters {
  filters: QueryLocationsArgs
  appliedFilters: QueryLocationsArgs
}

const initialValues: FiltersContext = {
  filters: defaultLocationFiltersValues,
  appliedFilters: defaultLocationFiltersValues,

  updateFilters: () => undefined,
  applyFilters: () => undefined,
  clearFilters: () => undefined,
}

export const locationFiltersReducer = (
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

const LocationFiltersContext = createContext<FiltersContext>(initialValues)

export const LocationsProvider = ({ children }: Props) => {
  const initialValuesReducer = {
    filters: defaultLocationFiltersValues,
    appliedFilters: defaultLocationFiltersValues,
  }

  const [state, dispatch] = useReducer(
    locationFiltersReducer,
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
    <LocationFiltersContext.Provider value={values}>
      {children}
    </LocationFiltersContext.Provider>
  )
}

export const useLocationFiltersContext = () =>
  useContext(LocationFiltersContext)
