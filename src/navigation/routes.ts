import type { ParamListBase, RouteProp } from '@react-navigation/native'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum Navigators {
  Main = 'Main',
}

export enum Screens {
  Characters = 'CharactersScreen',
  Locations = 'LocationsScreen',
  Episodes = 'EpisodesScreen',
  CharacterDetail = 'CharacterDetailScreen',
  LocationDetail = 'LocationDetailScreen',
  EpisodeDetail = 'EpisodeDetailScreen',
  CharacterFilters = 'CharacterFiltersScreen',
  LocationFilters = 'LocationFiltersScreen',
  EpisodeFilters = 'EpisodeFiltersScreen',
}

export enum Stacks {
  Characters = 'CharactersStack',
  Locations = 'LocationsStack',
  Episodes = 'EpisodesStack',
}

type Routes = Navigators | Screens | Stacks

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>()

interface WithIdAndName {
  id: string
  name: string
}

interface WithId {
  id: string
}

export type CharacterDetailProp = RouteProp<
  { CharacterDetailScreen: WithIdAndName },
  'CharacterDetailScreen'
>

export type EpisodeDetailProp = RouteProp<
  { EpisodeDetailScreen: WithId },
  'EpisodeDetailScreen'
>

export type LocationDetailProp = RouteProp<
  { LocationDetailScreen: WithId },
  'LocationDetailScreen'
>
