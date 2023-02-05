/* eslint-disable @typescript-eslint/no-empty-interface */
import 'react-native-svg'

import { AppTheme } from 'src/theme'

type CustomTheme = typeof AppTheme

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}

declare module 'react-native' {
  export interface VirtualizedListProps<ItemT>
    extends VirtualizedListWithoutRenderItemProps<ItemT> {
    renderItem: ListRenderItem<ItemT> | null | undefined
    ItemSeparatorComponent?: React.ComponentType<unknown> | null | undefined
  }
}

declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string
    xmlnsXlink?: string
  }
}

declare module 'react-native-view-shot' {
  export interface CaptureOptions {
    useRenderInContext: boolean
  }
}
