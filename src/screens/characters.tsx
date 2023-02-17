import React, { useLayoutEffect } from 'react'

import { CharactersList, HeaderScreen } from 'src/components'
import { useCharacterFiltersContext } from 'src/context'
import { Screens, Stacks, useNavigation } from 'src/navigation'
import { filtersIsEmpty } from 'src/utils'

export const CharactersScreen = () => {
  const { setOptions, navigate } = useNavigation()

  const { filters } = useCharacterFiltersContext()

  const navigateToScreen = () => {
    navigate(Stacks.Characters, {
      screen: Screens.CharacterFilters,
    })
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen
          title="Character"
          navigate={navigateToScreen}
          isShowCircle={filtersIsEmpty(filters.filter)}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, setOptions])

  return <CharactersList />
}
