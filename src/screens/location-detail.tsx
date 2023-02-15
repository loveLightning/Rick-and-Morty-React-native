import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { GET_LOCATION_DETAIL } from 'src/apollo'
import {
  ErrorMessage,
  HeaderCard,
  Loader,
  LocationDetail,
} from 'src/components'
import { LocationDetailProp, useNavigation } from 'src/navigation'
import { LocationQueryType } from 'src/types'

export const LocationDetailScreen = () => {
  const {
    params: { id },
  } = useRoute<LocationDetailProp>()
  const { extra_blue } = useTheme()

  const { setOptions } = useNavigation()

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
      {result && <LocationDetail locationDetail={result} />}
    </SafeAreaView>
  )
}
