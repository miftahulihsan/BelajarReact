import { useState } from 'react'
import Button from './component/button/button.tsx'
import Input from './component/input/input.tsx'
import Alert from './component/alert/alert.tsx'

function App() {

  return (
    <> 
    <div className="w-1/2 px-6 py-6 flex flex-col gap-4">
      <Button  title='Lihat Selengkapnya' size='lg' type='secondary' iconLeft="/src/icons/filled=true.svg" iconRight="/src/icons/filled=true.svg" disabled={false}></Button>
      <Alert type='light' color='red' text='Ini adalah alert' dismissable={true}></Alert>
      <Input label='Nama' placeholder='Masukkan Nama' icon='/src/icons/filled=true.svg' info={true} errorMassage='Maaf salah saya'></Input>
    </div>
    </>
  )
}

export default App
