import React, { createContext, useContext, useMemo, useState } from 'react'

import { FiltersCharactersTypes } from 'src/types'
import { defaultFiltersValues } from 'src/utils'

interface FiltersCharactersContext {
  filtersValues: FiltersCharactersTypes
  setFiltersValues: React.Dispatch<React.SetStateAction<FiltersCharactersTypes>>
  isApply: boolean
  setIsApply: (val: boolean) => void
}

interface Props {
  children: React.ReactNode
}

const initialValues: FiltersCharactersContext = {
  filtersValues: defaultFiltersValues,
  isApply: false,
  setIsApply: () => undefined,
  setFiltersValues: () => undefined,
}

const FiltersCharactersContext =
  createContext<FiltersCharactersContext>(initialValues)

export const FiltersCharactersProvider = ({ children }: Props) => {
  const [filtersValues, setFiltersValues] =
    useState<FiltersCharactersTypes>(defaultFiltersValues)

  const [isApply, setIsApply] = useState(false)

  const values: FiltersCharactersContext = useMemo(
    () => ({
      filtersValues,
      setFiltersValues,
      isApply,
      setIsApply,
    }),
    [filtersValues, isApply],
  )

  return (
    <FiltersCharactersContext.Provider value={values}>
      {children}
    </FiltersCharactersContext.Provider>
  )
}

export const useFilteresCharacters = () => useContext(FiltersCharactersContext)
