import React, { ReactNode } from 'react'
import { StyleProp, TextStyle, View } from 'react-native'
import styled from 'styled-components/native'

interface HeaderProps {
  title?: string
  ComponentsRight?: ReactNode
  ComponentsLeft?: ReactNode
  style?: StyleProp<TextStyle>
}

const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.white[0]};
`

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.white[0]};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.grey[1]};
  height: 50px;
`

const Title = styled.Text`
  max-width: 191px;
  text-align: center;
  font-family: ${({ theme }) => theme.roboto700};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.light_black};
  max-width: 130px;
`

const ButtonInner = styled.TouchableOpacity`
  min-width: 65px;
`

export const HeaderCard = ({
  title,
  ComponentsRight,
  ComponentsLeft,
  ...props
}: HeaderProps) => {
  const paddingRight = ComponentsRight ? 16 : 0

  // const isDecrease = isSmall ? '50%' : 'auto'

  return (
    <Wrapper>
      <Container style={{ paddingRight }}>
        {/* {isBack && (
          <BackHomeWrapper onPress={pressOnBack} activeOpacity={0.5}>
            <BackHomeIcon />
            <TextBack>Back</TextBack>
          </BackHomeWrapper>
        )} */}

        <ButtonInner>{ComponentsLeft}</ButtonInner>

        {/* {isClear && isFilterValues && (
          <TouchableOpacity onPress={clearFiltersValues}>
            <TextIsClear>Clear</TextIsClear>
          </TouchableOpacity>
        )} */}

        {title && (
          <View>
            <Title numberOfLines={1} ellipsizeMode="tail" {...props}>
              {title}
            </Title>
          </View>
        )}
        <ButtonInner>{ComponentsRight}</ButtonInner>
      </Container>
    </Wrapper>
  )
}
