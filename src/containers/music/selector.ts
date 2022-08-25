import { useSelector, shallowEqual } from 'react-redux'

export const useMusicAlbumSelector = () =>
  useSelector((state) => state, shallowEqual)