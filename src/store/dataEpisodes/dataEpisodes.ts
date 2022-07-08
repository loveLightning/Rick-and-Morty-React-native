import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILocation } from '../../components/Location/location.type'
import { TypeRootState } from '../store'

interface IEpis {
    dataEpisode: any
}

const initialState: IEpis = {
  dataEpisode: '',
}

export const dataEpisodes = createSlice({
  name: 'dataEpisodes',
  initialState,
  reducers: {
    stateEpisodes: (state, action: PayloadAction<ILocation>) => {
        state.dataEpisode = action.payload
    }, 

  },
})

export const { stateEpisodes } = dataEpisodes.actions

export const selectCount = (state: TypeRootState) => state.data.data

export default dataEpisodes.reducer