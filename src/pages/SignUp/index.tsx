import React from 'react'
import Header from '../../components/Header'
import SignUpForm from '../../components/SignUpForm'
import { createUser } from '../../services/signUpService'

const SignUp: React.FC = () => {
  return (
    <>
      <Header />
      <SignUpForm createUser={createUser} />
    </>
  )
}

export default SignUp
