import React, { useReducer } from 'react'
import { formReducer, initialState} from './Reducer'

const Form = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
  
    function handleSubmit(event) {
      event.preventDefault();
      localStorage.setItem('name', state.name);
      localStorage.setItem('email', state.email);
      dispatch({ type: 'setName',  payload: ''});
      dispatch({ type: 'setEmail', payload: ''});
    }
  
    function handleNameChange(event) {
      dispatch({ type: 'setName', payload: event.target.value });
    }
  
    function handleEmailChange(event) {
      dispatch({ type: 'setEmail', payload: event.target.value });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={state.name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={state.email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    );
}
export default Form