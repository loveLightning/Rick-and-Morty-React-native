import React, { useLayoutEffect } from 'react'

import { CharactersList, HeaderScreen } from 'src/components'
import { Screens, useNavigation } from 'src/navigation'

export const CharactersScreen = () => {
  const { setOptions, navigate } = useNavigation()

  const navigateToScreen = () => {
    navigate(Screens.FiltersCharacters)
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen title="Character" navigate={navigateToScreen} />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, setOptions])

  return <CharactersList />
}
