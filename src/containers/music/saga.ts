import { takeEvery, put, call, takeLatest, fork, select, all } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import * as ACTIONS from './slice'
import * as APIS from './api'
import { ResponseDogType } from './type'
// import { requestFetchUsers } from '../../lib/apis/user'
// import { RootState } from '../../reducers'

export interface ApiResponseType<T> {
  payload?: T
  error?: any
}


function* runRequestFetchMusic() {
  const {
    payload,
    error,
  }: ApiResponseType<ResponseDogType> = yield call(
    APIS.requestFetchMusicAlbum
  )
  console.log(payload)
  if (!!payload && !error) {
    const { url, status } = payload
    console.log(url)
    yield put(ACTIONS.successFetchMusicAlbum({ url, status }))
  } else if (error) {
    console.log("あーあ")
    // yield put(ACTIONS.failureFetchCalendarSelections())
  }
}


function* handleFetchAlubmMusic() {
  yield takeLatest(ACTIONS.requestFetchMusicAlbum.type, runRequestFetchMusic)
}

export default function* musicSaga() {
  yield fork(handleFetchAlubmMusic)
}