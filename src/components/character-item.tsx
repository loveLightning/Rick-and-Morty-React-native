import React, { memo } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'

import { Screens, Stacks, useNavigation } from 'src/navigation'

interface Props {
  id: string
  name: string
  status: string
  image: string
}

// eslint-disable-next-line react/display-name
const CharacterItem = memo(({ id, name, status, image }: Props) => {
  const { push } = useNavigation()

  return (
    <ContainerCharacter>
      <Container
        activeOpacity={0.8}
        onPress={() => {
          push(Stacks.Characters, {
            screen: Screens.CharacterDetail,
            params: {
              id,
              name,
            },
          })
        }}>
        <ImageCharacter source={{ uri: image ?? undefined }} />
        <TextStatus>{status}</TextStatus>
        <TextName>{name}</TextName>
      </Container>
    </ContainerCharacter>
  )
})

export { CharacterItem }

const ContainerCharacter = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 15px;
`

const Container = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.white[1]};
  border-radius: 8px;
  width: 100%;
  height: 219px;
  max-width: 165px;
`
const TextStatus = styled.Text`
  padding: 12px 12px 0 12px;
  font-family: ${({ theme }) => theme.roboto400};
  font-size: 11px;
  line-height: 13px;
  color: ${({ theme }) => theme.grey[4]};
`
const TextName = styled.Text`
  padding: 0 0 0 12px;
  max-height: 50px;
  font-family: ${({ theme }) => theme.roboto900};
  font-size: 17px;
  line-height: 22px;
  color: ${({ theme }) => theme.light_black};
`

const ImageCharacter = styled(Image)`
  height: 140px;
  border-radius: 8px;
`
