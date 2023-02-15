import React, { useLayoutEffect } from 'react'

import { HeaderScreen, LocationsList } from 'src/components'
import { useFiltersContext } from 'src/context'
import { Screens, useNavigation } from 'src/navigation'
import { FilterTypes } from 'src/types'
import { filtersIsEmpty } from 'src/utils'

export const LocationsScreen = () => {
  const { setOptions, push } = useNavigation()

  const { filters } = useFiltersContext()

  const navigateToScreen = () => {
    push(Screens.LocationFilters)
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen
          title="Location"
          navigate={navigateToScreen}
          isShowCircle={filtersIsEmpty(filters[FilterTypes.location].filter)}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, setOptions])

  return <LocationsList />
}
