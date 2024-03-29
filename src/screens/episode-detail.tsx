import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { GET_EPISODE_DETAIL } from 'src/apollo'
import {
  ButtonBack,
  EpisodeDetail,
  ErrorMessage,
  HeaderCard,
  Loader,
} from 'src/components'
import { EpisodeDetailProp, useNavigation } from 'src/navigation'
import { EpsiodeQueryType } from 'src/types'

export const EpisodeDetailScreen = () => {
  const {
    params: { id, name },
  } = useRoute<EpisodeDetailProp>()
  const { extra_blue } = useTheme()

  const { setOptions, goBack } = useNavigation()

  const {
    data: episode,
    loading,
    error,
  } = useQuery<EpsiodeQueryType>(GET_EPISODE_DETAIL, {
    variables: {
      id,
    },
  })
  const result = episode?.episode

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
      <View>
        <Loader size="large" color={extra_blue} />
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <ErrorMessage>Error</ErrorMessage>
      </View>
    )
  }

  return (
    <SafeAreaView>
      {result && <EpisodeDetail episodeDetail={result} />}
    </SafeAreaView>
  )
}
