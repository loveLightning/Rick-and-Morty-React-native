import React, { useLayoutEffect } from 'react'

import { EpisodesList, HeaderScreen } from 'src/components'
import { useEpisodeFiltersContext } from 'src/context'
import { Screens, Stacks, useNavigation } from 'src/navigation'
import { filtersIsEmpty } from 'src/utils'

export const EpisodesScreen = () => {
  const { setOptions, navigate } = useNavigation()
  const { filters } = useEpisodeFiltersContext()

  const navigateToScreen = () => {
    navigate(Stacks.Episodes, {
      screen: Screens.EpisodeFilters,
    })
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen
          title="Episode"
          navigate={navigateToScreen}
          isShowCircle={filtersIsEmpty(filters.filter)}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, setOptions])

  return <EpisodesList />
}
