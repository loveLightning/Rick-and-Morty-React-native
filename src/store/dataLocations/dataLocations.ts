import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILocation } from '../../components/Location/location.type'
import { TypeRootState } from '../store'

interface ILoc {
    dataLocal: any
}

const initialState: ILoc = {
    dataLocal: '',
}

export const dataLocations = createSlice({
  name: 'dataLocations',
  initialState,
  reducers: {
    stateLocations: (state, action: PayloadAction<ILocation>) => {
        state.dataLocal = action.payload
    }, 

  },
})

export const { stateLocations } = dataLocations.actions

export const selectCount = (state: TypeRootState) => state.data.data

export default dataLocations.reducer