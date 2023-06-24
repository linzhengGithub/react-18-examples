import { Suspense, lazy } from 'react';

const LazyComponent = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import('./YourComponent');
});

function Suspense_page() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <LazyComponent />
    </Suspense>
  );
}

export default Suspense_page;
