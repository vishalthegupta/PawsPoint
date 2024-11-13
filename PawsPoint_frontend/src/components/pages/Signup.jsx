import React from 'react'
import TextInput from '../../shared/TextInput'

const Signup = () => {
  return (
    <div className='w-full h-full bg-secondary flex flex-col justify-center items-center'>
        <div className='text-gray-300 text-xl font-bold'>Sign Up</div>
        <div className='flex flex-col space-y-1'>
            <TextInput title={'Email'} placeHolder={'Enter your valid email..'} type={'email'}
            theme={'light'}
            />
            <TextInput title={'Password'} placeHolder={'Enter your password...'} type={'password'}
            theme={'light'}/>
        </div>
    </div>
  )
}

export default Signup