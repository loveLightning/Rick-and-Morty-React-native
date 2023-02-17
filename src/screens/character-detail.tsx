import React, { useEffect, useLayoutEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import styled, { useTheme } from 'styled-components/native'

import { GET_CHARACTER_DETAIL } from 'src/apollo'
import {
  ButtonBack,
  CharacterDetail,
  ErrorMessage,
  HeaderCard,
  Loader,
} from 'src/components'
import { CharacterDetailProp, useNavigation } from 'src/navigation'
import { CharacterQueryType } from 'src/types'

export const CharacterDetailScreen = () => {
  const {
    params: { id, name },
  } = useRoute<CharacterDetailProp>()

  const { setOptions, goBack } = useNavigation()
  const { extra_blue } = useTheme()

  const [getCharacterDetail, { data: characterDetail, loading, error }] =
    useLazyQuery<CharacterQueryType>(GET_CHARACTER_DETAIL, {
      variables: {
        id,
      },
    })

  useEffect(() => {
    getCharacterDetail()
  }, [getCharacterDetail])

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderCard
          title={name}
          ComponentsLeft={<ButtonBack pressOnBack={goBack} />}
        />
      ),
    })
  }, [goBack, name, setOptions])

  if (loading) {
    return (
      <Wrapper>
        <Loader size="large" color={extra_blue} />
      </Wrapper>
    )
  }

  if (error) {
    return <ErrorMessage>Error</ErrorMessage>
  }

  return (
    <>
      {characterDetail && (
        <CharacterDetail characterDetail={characterDetail.character} />
      )}
    </>
  )
}

const Wrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
