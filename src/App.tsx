import { useState } from 'react';
import './App.css'
import SyncButton from './dom/class_flushSync';
import Suspense_page from './dom/Suspense_page';

function App() {

  // const [loading, setLoading] = useState(false)

  // setTimeout(() => {
  //   setLoading(true)
  // },2000)

  return (
    <>
      <SyncButton />
      <Suspense_page />
    </>
  )
}

export default App
