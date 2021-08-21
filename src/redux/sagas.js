import { put, takeEvery, all } from 'redux-saga/effects'
import { actions, actionTypes } from './actions'
import { api } from '../utils/api'

function* loadFlightsAsync() {
    const res = yield api.getFlightInfos()
    yield put(actions.flightsLoaded(res))
}

function* watchLoadFlightsAsync() {
    yield takeEvery(actionTypes.loadFlightsAsync, loadFlightsAsync)
}

export function* rootSaga() {
    yield all([
        watchLoadFlightsAsync()
    ])
}