import React from 'react'
import { Text, StyleSheet } from 'react-native'

type IDefaultText = {
    children: React.ReactNode
}

export const DefaultText: React.FC<IDefaultText> = (props) => {
  return (
      <Text style={styles.defaultText}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 17,
        fontFamily: 'Roboto-Regular',
        fontWeight: '400',
    }
})