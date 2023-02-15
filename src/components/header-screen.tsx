import React, { FC } from 'react'
import { StyleProp, TextStyle, View } from 'react-native'
import styled from 'styled-components/native'

interface HeaderProps {
  title?: string
  navigate: () => void
  isShowCircle: boolean
  style?: StyleProp<TextStyle>
}

const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.grey[1]};
`

const Container = styled.View`
  flex-direction: column;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.grey[1]};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.grey[1]};
`

const Title = styled.Text`
  width: 100%;
  max-width: 191px;
  font-family: ${({ theme }) => theme.roboto700};
  color: ${({ theme }) => theme.light_black};
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.41px;
`

const WrapperFilter = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const FilterText = styled.Text`
  color: ${({ theme }) => theme.extra_blue};
  font-weight: 900;
  letter-spacing: -0.41px;
  font-size: 17px;
  margin-left: 5px;
`

const Circle = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.extra_blue};
`

export const HeaderScreen: FC<HeaderProps> = ({
  title,
  navigate,
  isShowCircle,
  ...props
}) => {
  return (
    <Wrapper>
      <Container>
        <WrapperFilter onPress={navigate}>
          {isShowCircle && <Circle />}

          <FilterText>Filter</FilterText>
        </WrapperFilter>

        {title && (
          <View>
            <Title numberOfLines={1} {...props}>
              {title}
            </Title>
          </View>
        )}
      </Container>
    </Wrapper>
  )
}
