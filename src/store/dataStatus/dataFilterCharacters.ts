import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeRootState } from '../store'

interface IStatus {
    dataStatus?: string
    dataGender?: string
    datafilter: IFilterData
}

interface IFilterData {
    status: string
    gender: string
}

const initialState: IStatus = {
    dataStatus: '',
    dataGender: '',
    datafilter : {
        status: '',
        gender: ''
    }
}

export const data = createSlice({
    name: 'dataFilterCharacters',
    initialState,
    reducers: {
        stateStatus: (state, action: PayloadAction<string>) => {
            state.dataStatus = action.payload
        },
        stateGender: (state, action: PayloadAction<string>) => {
            state.dataGender = action.payload
        },
        changeGender: (state, action: PayloadAction<string>) => {
            state.datafilter.gender = action.payload
        },
        changeStatus: (state, action: PayloadAction<string>) => {
            state.datafilter.status = action.payload
        }
    },
})

export const { stateStatus, stateGender, changeGender, changeStatus } = data.actions

export const selectCount = (state: TypeRootState) => state.dataFilterCharacters.dataStatus
export const selectCoundSecond = (state: TypeRootState) => state.dataFilterCharacters.dataStatus
export const selectCountThird = (state: TypeRootState) => state.dataFilterCharacters.datafilter

export default data.reducer