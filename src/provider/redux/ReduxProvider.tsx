'use client'
import React from 'react'
import { Provider } from 'react-redux'

const ReduxProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider  >{children}</Provider>
  )
}

export default ReduxProvider