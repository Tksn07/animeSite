/* eslint @typescript-eslint/no-unused-vars: 0 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MusicState } from '../../types/MusicState'
import { SuccessDogPayloadType } from './type'
// import sliceNames


export const initialState: MusicState = {
  albumImgUrl: '',
  musicUrl: ''
}

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    requestFetchMusicAlbum: state => state,
    successFetchMusicAlbum: (
      state,
      {
        payload: { url, status },
      }: PayloadAction<SuccessDogPayloadType>
    ) => {
      state.albumImgUrl = url
    },
  }
})

export const {
  requestFetchMusicAlbum,
  successFetchMusicAlbum
} = musicPlayerSlice.actions

export default musicPlayerSlice.reducer