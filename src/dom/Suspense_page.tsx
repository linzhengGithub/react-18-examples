import { Suspense, useState } from 'react';
import YourComponent from './YourComponent';
import { fetchData } from './utils';

const initialResource = fetchData();

function Suspense_page() {
  const [resource, setResource] = useState(initialResource)
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <YourComponent resource={ resource } />
      <button onClick={() => setResource(fetchData())}>refresh</button>
    </Suspense>
  );
}

export default Suspense_page;
{/* <SuspenseList>
  <Suspense fallback={<h1>loading...</h1>}>
     <YourComponent resource={ resource } />
  </Suspense>
  <Suspense fallback={<h1>loading...</h1>}>
    <YourComponent resource={ resource } />
  </Suspense>
</SuspenseList> */}
