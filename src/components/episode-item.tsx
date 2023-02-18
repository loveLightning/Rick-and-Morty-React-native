import React, { memo } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { Separator } from 'src/components'
import { ArrowIcon } from 'src/icons'
import { Screens, Stacks, useNavigation } from 'src/navigation'

interface Props {
  id: string
  episode: string
  name: string
  air_date: string
  isLast: boolean
}

// eslint-disable-next-line react/display-name
const EpisodeItem = memo(({ episode, name, air_date, isLast, id }: Props) => {
  const { push } = useNavigation()

  return (
    <>
      <View>
        <Wrap>
          <ItemEpisode
            activeOpacity={0.8}
            onPress={() =>
              push(Stacks.Episodes, {
                screen: Screens.EpisodeDetail,
                params: {
                  id,
                  name,
                },
              })
            }>
            <View>
              <SeasonEpisode>{episode}</SeasonEpisode>
              <NameEpisode numberOfLines={1}>{name}</NameEpisode>
              <DateEpisode numberOfLines={1}>{air_date}</DateEpisode>
            </View>

            <ArrowIcon />
          </ItemEpisode>
          {isLast && <Separator />}
        </Wrap>
      </View>
    </>
  )
})

export { EpisodeItem }

const Wrap = styled.View`
  padding-left: 15px;
`

const ItemEpisode = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 5px 0;
`

const SeasonEpisode = styled.Text`
  padding-top: 0;
  color: ${({ theme }) => theme.light_black};
  letter-spacing: -0.41px;
  font-family: ${({ theme }) => theme.roboto900};
  font-size: 17px;
  padding-top: 7px;
`

const NameEpisode = styled.Text`
  padding-bottom: 0;
  font-size: 15px;
  font-family: ${({ theme }) => theme.roboto400};
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.grey[4]};
`

const DateEpisode = styled.Text`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.grey[5]};
  font-family: ${({ theme }) => theme.roboto900};
`
