import React, { useLayoutEffect } from 'react'

import { CharactersList, HeaderScreen } from 'src/components'
import { useFiltersContext } from 'src/context'
import { Screens, Stacks, useNavigation } from 'src/navigation'
import { FilterTypes } from 'src/types'
import { filtersIsEmpty } from 'src/utils'

export const CharactersScreen = () => {
  const { setOptions, push } = useNavigation()

  const { filters } = useFiltersContext()

  const navigateToScreen = () => {
    push(Stacks.Characters, {
      screen: Screens.CharacterFilters,
    })
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen
          title="Character"
          navigate={navigateToScreen}
          isShowCircle={filtersIsEmpty(filters[FilterTypes.character].filter)}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, setOptions])

  return <CharactersList />
}
