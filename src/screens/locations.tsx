import React, { useLayoutEffect } from 'react'

import { HeaderScreen, LocationsList } from 'src/components'
import { useLocationFiltersContext } from 'src/context'
import { Screens, Stacks, useNavigation } from 'src/navigation'
import { filtersIsEmpty } from 'src/utils'

export const LocationsScreen = () => {
  const { setOptions, navigate } = useNavigation()

  const { filters } = useLocationFiltersContext()

  const navigateToScreen = () => {
    navigate(Stacks.Locations, {
      screen: Screens.LocationFilters,
    })
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen
          title="Location"
          navigate={navigateToScreen}
          isShowCircle={filtersIsEmpty(filters.filter)}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, setOptions])

  return <LocationsList />
}
