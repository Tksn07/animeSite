import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { requestFetchMusicAlbum } from './slice'

export const useMusicPlayerDispatch = () => {
  const dispatch = useDispatch()

  const requestFetchMusicAlbumCallback = useCallback(
    () => dispatch(requestFetchMusicAlbum()),
    [dispatch]
  )
  
  return {
    requestFetchMusicAlbum: requestFetchMusicAlbumCallback,
  }
}