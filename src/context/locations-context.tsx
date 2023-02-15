import React, { createContext, useContext, useMemo, useState } from 'react'

import { LocationsFiltersTypes } from 'src/types'
import { defaultLocationFilterValues } from 'src/utils'

interface LocationFiltersContext {
  locationFilters: LocationsFiltersTypes
  setLocationFilters: React.Dispatch<
    React.SetStateAction<LocationsFiltersTypes>
  >
}

interface Props {
  children: React.ReactNode
}

const initialValues: LocationFiltersContext = {
  locationFilters: defaultLocationFilterValues,
  setLocationFilters: () => undefined,
}

const CharacterFiltersContext =
  createContext<LocationFiltersContext>(initialValues)

export const LocationFiltersProvider = ({ children }: Props) => {
  const [locationFilters, setLocationFilters] = useState<LocationsFiltersTypes>(
    defaultLocationFilterValues,
  )

  const values: LocationFiltersContext = useMemo(
    () => ({
      locationFilters,
      setLocationFilters,
    }),
    [locationFilters],
  )

  return (
    <CharacterFiltersContext.Provider value={values}>
      {children}
    </CharacterFiltersContext.Provider>
  )
}

export const useLocationFilters = () => useContext(CharacterFiltersContext)
