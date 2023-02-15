import React, { useLayoutEffect } from 'react'

import { EpisodesList, HeaderScreen } from 'src/components'
import { useFiltersContext } from 'src/context'
import { Screens, useNavigation } from 'src/navigation'
import { FilterTypes } from 'src/types'
import { filtersIsEmpty } from 'src/utils'

export const EpisodesScreen = () => {
  const { setOptions, navigate } = useNavigation()
  const { filters } = useFiltersContext()

  const navigateToScreen = () => {
    navigate(Screens.EpisodeFilters)
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen
          title="Episode"
          navigate={navigateToScreen}
          isShowCircle={filtersIsEmpty(filters[FilterTypes.episode].filter)}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, setOptions])

  return <EpisodesList />
}
