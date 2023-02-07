import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'

import { GET_EPISODE_DETAIL } from 'src/apollo'
import { ErrorMessage, HeaderCard, Loader } from 'src/components'
import { EpisodeDetail } from 'src/components/episodes'
import { EpisodeDetailProp, useNavigation } from 'src/navigation'
import { EpsiodeQueryType } from 'src/types'

export const EpisodeDetailScreen = () => {
  const {
    params: { id },
  } = useRoute<EpisodeDetailProp>()

  const { setOptions } = useNavigation()

  const {
    data: episode,
    loading,
    error,
  } = useQuery<EpsiodeQueryType>(GET_EPISODE_DETAIL, {
    variables: {
      id,
    },
  })
  const result = episode?.data?.episode

  useLayoutEffect(() => {
    setOptions({
      header: ({ navigation }) => (
        <HeaderCard
          titleMaxWidth={120}
          isBack
          title={result?.name}
          pressOnBack={navigation.goBack}
        />
      ),
    })
  }, [result?.name, setOptions])

  if (loading) {
    return (
      <View>
        <Loader />
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
