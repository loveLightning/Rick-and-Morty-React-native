import React, { useLayoutEffect } from 'react'

import { ApplyBtn, FiltersCharacter, HeaderCard } from 'src/components'
import { useFilteresCharacters } from 'src/context'
import { useNavigation } from 'src/navigation'

export const FiltersCharacterScreen = () => {
  const { setOptions, goBack } = useNavigation()
  const { setIsApply } = useFilteresCharacters()

  const applyFilters = () => {
    setIsApply(true)
    goBack()
  }

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderCard
          isClear
          title="Filter"
          ComponentsRight={<ApplyBtn navigateScreen={applyFilters} />}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goBack, setOptions])

  return <FiltersCharacter />
}
