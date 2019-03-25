import { takeEvery, call, put } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import * as Api from 'typescript-fetch-api'
import { PayloadAction } from 'redux-starter-kit/src/createAction'

import pets, { IAddPetPayload } from '../store/pets'
const petsApi = new Api.PetApi()

function* handleAddPet(action: PayloadAction<IAddPetPayload>) {
  try {
    let result = yield call(() => petsApi.addPet(action.payload))
    yield put(pets.actions.addSuccess(result))
  } catch (error) {
    yield put(pets.actions.addFailure(error))
  }
}

function* handleRequestPets() {
  try {
    let result: Api.Pet[] = yield call(() =>
      petsApi.findPetsByStatus(['available'])
    )

    yield put(pets.actions.getSuccess(result))
  } catch (error) {
    yield put(pets.actions.getFailure(error))
  }
}

export default function* saga(): SagaIterator {
  yield takeEvery(pets.actions.add.toString(), handleAddPet)
  yield takeEvery(pets.actions.get.toString(), handleRequestPets)
}
