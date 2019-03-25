/**
 * Component template.
 *
 * Note that this file has a `.tsx` suffix, as it contains React elements.
 */

import * as React from 'react'
import PetStoreContainer /*, { Props, Actions } */ from '../containers/Petstore'
import { Pet } from '../store/pets/types'

/**
 * Interface for private internal component state.
 */
interface State {}

/**
 * The initial state for our internal component state.
 */
const INITIAL_STATE: State = {}

class Pets extends React.Component<any, State> {
  state = INITIAL_STATE

  addPet = () => {
    const { onAddPet } = this.props
    onAddPet({ status: 'new', name: 'test' })
  }

  componentDidMount() {
    const { loadPets } = this.props
    loadPets()
  }

  render() {
    const { pets, loadPets } = this.props
    console.log(pets)
    return (
      <div>
        <h1>Petstore</h1>
        <p>
          <button onClick={loadPets}>Reload</button>
          &nbsp;
          <button onClick={this.addPet}>Add Pet</button>
          {this.props.isFetching && <span>Saving&hellip;</span>}
        </p>
        {this.props.errorMessage && (
          <p style={{ color: 'red' }}>{this.props.errorMessage}</p>
        )}
        {!!pets.length && (
          <table style={{ margin: '0 auto', width: '60%' }}>
            <thead>
              <tr>
                <th>Pet</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pets
                .filter((_pet: Pet, index: number) => index < 20)
                .map((pet: Pet, index: number) => (
                  <tr key={index}>
                    <td>{pet.name}</td>
                    <td>{pet.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}

export default PetStoreContainer(Pets)
