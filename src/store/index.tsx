import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
  StoreEnhancer,
} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas'
import pets, { IStoreState } from './pets'

/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
export interface IRootStoreState {
  readonly pets: IStoreState
}

/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
const rootReducer = combineReducers<IRootStoreState>({
  pets: pets.reducer,
} as any)

/**
 * Create the redux-saga middleware.
 */
const sagaMiddleware = createSagaMiddleware()

/**
 * Enhancers for the store.
 */
const enhancers = compose(
  /* Add the redux-saga middleware */
  applyMiddleware(sagaMiddleware),
  /* Include the devtools. Comment this out if you don't want to use the dev tools. */
  devToolsEnhancer({})
) as StoreEnhancer<IRootStoreState>

/**
 * Create the store. We do not include an initial state, as each of the module / duck
 * reducers includes its own initial state.
 */
export const store = createStore<IRootStoreState>(rootReducer, enhancers)

/* Run the root saga */
sagaMiddleware.run(rootSaga)
