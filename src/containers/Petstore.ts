import { connect } from 'react-redux'

/* Import RootStoreState */
import { IRootStoreState } from '../store'

/* Import module files */
import pets from '../store/pets'
import { Pet } from '../store/pets/types'

/**
 * Interface for properties that the container passes to the component.
 */
export interface Props {
  pets: ReadonlyArray<Pet>
  isFetching: boolean
  errorMessage?: String
}

/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
  loadPets: () => void
  onAddPet: (name: string) => void
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: IRootStoreState): Props => ({
  pets: state.pets.pets,
  isFetching: state.pets.isFetching,
  errorMessage: state.pets.errorMessage,
})

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = {
  loadPets: pets.actions.get,
  onAddPet: pets.actions.add,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
