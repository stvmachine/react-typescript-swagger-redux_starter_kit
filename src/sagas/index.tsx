/**
 * The root saga file that defines the root saga.
 */

import { all } from 'redux-saga/effects'

/* Import module sagas */
import apiSaga from './api'

/** The root saga that starts all of the other sagas. */
export default function* rootSaga() {
  yield all([
    /* The API saga */
    apiSaga(),
  ])
}
