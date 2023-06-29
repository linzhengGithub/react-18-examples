import './App.css'
// import SyncButton from './dom/class_flushSync';
import Suspense_page from './dom/Suspense_page';
import Transition_page from './dom/Transition_page';

function App() {

  // const [loading, setLoading] = useState(false)

  // setTimeout(() => {
  //   setLoading(true)
  // },2000)

  return (
    <>
      {/* <SyncButton /> */}
      {/* <Suspense_page /> */}
      <Transition_page />
    </>
  )
}

export default App
