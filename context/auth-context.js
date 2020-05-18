import { createContext, useContext, useReducer } from 'react';

const ROLES = ['creator', 'user'];
const USER_DATA = {
  name: 'Kevin Sherman',
  username: 'snoe',
  email: 'kevin@medici.com',
};

const initialState = {
  isAuthenticated: false,
  data: null,
};

export const AuthContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {

    case 'signIn':
      return {
        authenticated: true,
        data: {
          roles: action.roles,
          userData: action.userData,
        }
      };

    case 'signOut':
      return {
        authenticated: false,
        data: null,
      }

    default: return state;
  }
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(reducer, initialState);

  const signIn = () => {
    dispatch({
      type: 'signIn',
      roles: ROLES,
      userData: USER_DATA,
    })
  };

  const signOut = () => {
    dispatch({ type: 'signOut' });
  };

  return <AuthContext.Provider value={{ authState, signIn, signOut }} >{children}</AuthContext.Provider>

};

export const useAuth = () => useContext(AuthContext);