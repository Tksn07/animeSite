import { fork } from "redux-saga/effects"
import musicSaga from "../containers/music/saga"

export default function* rootSaga() {
  yield fork(musicSaga)
}
