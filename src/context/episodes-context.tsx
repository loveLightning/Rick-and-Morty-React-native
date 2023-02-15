import React, { createContext, useContext, useMemo, useState } from 'react'

import { EpisodeFiltersTypes } from 'src/types'
import { defaultEpisodeFiltersValues } from 'src/utils'

interface EpisodeFiltersContext {
  episodeFilters: EpisodeFiltersTypes
  setEpisodeFilters: React.Dispatch<React.SetStateAction<EpisodeFiltersTypes>>
}

interface Props {
  children: React.ReactNode
}

const initialValues: EpisodeFiltersContext = {
  episodeFilters: defaultEpisodeFiltersValues,
  setEpisodeFilters: () => undefined,
}

const EpsiodeFiltersContext =
  createContext<EpisodeFiltersContext>(initialValues)

export const EpisodeFiltersProvider = ({ children }: Props) => {
  const [episodeFilters, setEpisodeFilters] = useState<EpisodeFiltersTypes>(
    defaultEpisodeFiltersValues,
  )

  const values: EpisodeFiltersContext = useMemo(
    () => ({
      episodeFilters,
      setEpisodeFilters,
    }),
    [episodeFilters],
  )

  return (
    <EpsiodeFiltersContext.Provider value={values}>
      {children}
    </EpsiodeFiltersContext.Provider>
  )
}

export const useEpisodeFilters = () => useContext(EpsiodeFiltersContext)
