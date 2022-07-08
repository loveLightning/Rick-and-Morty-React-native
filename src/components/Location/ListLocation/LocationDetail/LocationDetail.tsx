import { useRoute } from '@react-navigation/native'
import React from 'react'
import { IrouteLocation } from '../../location.type'
import { HeaderLocation } from './HeaderLocation/HeaderLocation'
import { LocationResidents } from './LocationResidents/LocationResidents'

export const LocationDetail: React.FC = () => {
  const route = useRoute<IrouteLocation>()
  return (
    <>
      <HeaderLocation route={route} />
      <LocationResidents route={route} />
    </>
  )
}
