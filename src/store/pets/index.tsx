import { createSlice, createSelector } from 'redux-starter-kit'
import { Pet } from './types'

export interface IStoreState {
  readonly pets: ReadonlyArray<Pet>
  readonly errorMessage?: String
  readonly isFetching: boolean
}

export interface IAddPetPayload {
  name: string
  photoUrls: Array<string>
}

const INITIAL_STATE: IStoreState = {
  pets: new Array(),
  isFetching: false,
  errorMessage: '',
}

const pets = createSlice({
  slice: 'pets',
  initialState: INITIAL_STATE,
  reducers: {
    get: state => {
      state.errorMessage = ''
      state.isFetching = true
    },
    getSuccess: (state, { payload }) => {
      state.isFetching = false
      state.pets = payload
    },
    getFailure: (state, { payload }) => {
      state.isFetching = false
      state.errorMessage = payload
    },
    add: state => {
      state.errorMessage = ''
    },
    addSuccess: (state, { payload }) => {
      state.pets = [payload, ...state.pets]
    },
    addFailure: (state, { payload }) => {
      state.errorMessage = payload
    },
  },
})

pets.selectors.getPets = createSelector(['pets.pets'])

export default pets
