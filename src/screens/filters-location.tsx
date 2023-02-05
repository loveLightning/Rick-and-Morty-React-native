import React, { useLayoutEffect } from 'react'

import { HeaderCard } from 'src/components'
import { ApplyBtn, FiltersCharacter } from 'src/components'
import { useNavigation } from 'src/navigation'

export const FiltersLocationScreen = () => {
  const { setOptions, goBack } = useNavigation()
  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderCard
          pressOnBack={goBack}
          title="Filter"
          ComponentsRight={<ApplyBtn />}
        />
      ),
    })
  }, [goBack, setOptions])

  return <FiltersCharacter />
}
