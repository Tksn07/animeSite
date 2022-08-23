/* eslint @typescript-eslint/no-unused-vars: 0 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MusicState } from '../../types/MusicState'
// import sliceNames


export const initialState: MusicState = {
}

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {}
})

export const {
} = musicPlayerSlice.actions

export default musicPlayerSlice.reducer