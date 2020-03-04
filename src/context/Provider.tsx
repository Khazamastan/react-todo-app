import React, { useReducer, useEffect, useState } from 'react'
import Context from './Context'

interface IProps {
  children: any
  reducer: any
}

const Provider = ({ children, reducer }: IProps) => {
  const [store, dispatch] = useReducer(reducer, {})
  const [state, setState] = useState({ isLoaded: false })
  useEffect(() => {
    dispatch({ type: '@init' })
    setState({ isLoaded: true })
  }, [])

  useEffect(() => {
    localStorage.setItem("home", JSON.stringify(store));
  })

  return <Context.Provider value={{ dispatch, store }}>{state.isLoaded ? children : false}</Context.Provider>
}

export default Provider
