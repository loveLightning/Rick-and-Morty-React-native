import React, { FC, ReactNode } from 'react'
import { StyleProp, TextStyle, View } from 'react-native'
import styled from 'styled-components/native'

import { useFilteresCharacters } from 'src/context'
import { useFiltersIsEmpty } from 'src/hooks'
import { BackHomeIcon } from 'src/icons'
import { defaultFiltersValues } from 'src/utils'
// import { isSmall } from 'src/utils'

interface HeaderProps {
  isBack?: boolean
  pressOnBack?: () => void
  title?: string
  ComponentsRight?: ReactNode
  titleMargin?: number
  titleMaxWidth?: number
  isClear?: boolean
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
`

const Title = styled.Text`
  width: 100%;
  max-width: 191px;
  text-align: center;
  font-family: ${({ theme }) => theme.roboto700};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.light_black};
`

const Empty = styled.View`
  width: 40px;
  height: 40px;
`

const BackHomeWrapper = styled.TouchableOpacity`
  margin-left: 10px;
  flex-direction: row;
`

const TextBack = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.extra_blue};
  margin-left: 5px;
`

const WrapperIsClear = styled.TouchableOpacity``

const TextIsClear = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${({ theme }) => theme.extra_blue};
  padding-left: 16px;
`

export const HeaderCard: FC<HeaderProps> = ({
  isBack = false,
  isClear = false,
  pressOnBack = () => undefined,
  title,
  ComponentsRight,
  titleMargin: marginLeft,
  titleMaxWidth = 191,
  ...props
}) => {
  const paddingRight = ComponentsRight ? 16 : 0

  const { filtersValues, setFiltersValues } = useFilteresCharacters()
  const { isFilterEmpty } = useFiltersIsEmpty(filtersValues)
  // const isDecrease = isSmall ? '50%' : 'auto'

  const clearFilters = () => {
    setFiltersValues(defaultFiltersValues)
  }

  return (
    <Wrapper>
      <Container style={{ paddingRight }}>
        {isBack && (
          <BackHomeWrapper onPress={pressOnBack} activeOpacity={0.5}>
            <BackHomeIcon />
            <TextBack>Back</TextBack>
          </BackHomeWrapper>
        )}

        {isClear && isFilterEmpty() && (
          <WrapperIsClear onPress={clearFilters}>
            <TextIsClear>Clear</TextIsClear>
          </WrapperIsClear>
        )}

        {!(isBack && isClear && isFilterEmpty) && <Empty />}

        {title && (
          <View
            style={{
              marginLeft,
              // width: isDecrease,
            }}>
            <Title
              numberOfLines={1}
              style={{ maxWidth: titleMaxWidth }}
              {...props}>
              {title}
            </Title>
          </View>
        )}
        {ComponentsRight ? <View>{ComponentsRight}</View> : <Empty />}
      </Container>
    </Wrapper>
  )
}
