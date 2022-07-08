import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICharacter } from '../../components/Character/character.type'
import { TypeRootState } from '../store'

interface IData {
  dataCharacters: any
}

const initialState: IData = {
  dataCharacters: '',
}

export const data = createSlice({
  name: 'dataCharacters',
  initialState,
  reducers: {
    stateData: (state: IData, action: PayloadAction<ICharacter>) => {
      state.dataCharacters = action.payload
    }
  },
})

export const { stateData } = data.actions

export const selectCount = (state: TypeRootState) => state.dataCharacters.dataCharacters

export default data.reducer