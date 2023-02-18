import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { GET_LOCATION_DETAIL } from 'src/apollo'
import {
  ButtonBack,
  ErrorMessage,
  HeaderCard,
  Loader,
  LocationDetail,
} from 'src/components'
import { LocationDetailProp, useNavigation } from 'src/navigation'
import { LocationQueryType } from 'src/types'

export const LocationDetailScreen = () => {
  const {
    params: { id, name },
  } = useRoute<LocationDetailProp>()
  const { extra_blue, white } = useTheme()

  const { setOptions, goBack } = useNavigation()

  const {
    data: location,
    loading,
    error,
  } = useQuery<LocationQueryType>(GET_LOCATION_DETAIL, {
    variables: {
      id,
    },
  })
  const result = location?.location

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
    <SafeAreaView style={{ flex: 1, backgroundColor: white[0] }}>
      {result && <LocationDetail locationDetail={result} />}
    </SafeAreaView>
  )
}
