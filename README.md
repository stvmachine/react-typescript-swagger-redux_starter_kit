### Install Swagger

# OS X

1. Adding java to the path

```bash
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
export PATH=${JAVA_HOME}/bin:$PATH
```

2. Installing swagger with brew
   `brew install swagger-codegen`

ToDo:

1. For use redux-starter-kit without conflicts i had to disable `strictFunctionTypes` on tsconfig.json.

The next example give an error:

```typescript
function* handleAddPet(action: PayloadAction<IAddPetPayload>) {
  try {
    let result: Pet = yield call(runApi, petsApi, 'addPet', action.payload)
    yield put(pets.actions.addSuccess(result))
  } catch (error) {
    yield put(pets.actions.addFailure(error))
  }
}
```

The error:
`[ts] Argument of type 'Pet' is not assignable to parameter of type 'never'.`

2. Add react-cosmos.
3. Add a UX library: rebass, grommet ux, etc.
