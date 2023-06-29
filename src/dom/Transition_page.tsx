import { Suspense, useState, useTransition } from 'react';
import YourComponent from './YourComponent';
import { fetchData } from './utils';

function Button({ refresh }: any) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="border">
      <button
        onClick={() => {
          startTransition(() => {
            refresh();
          });
        }}
        disabled={isPending}>
        点击刷新数据
      </button>
      {isPending ? <div>loading...</div> : null}
    </div>
  );
}

const initialResource = fetchData();

function Transition_page() {
  const [resource, setResource] = useState(initialResource)
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <YourComponent resource={ resource } />
      <Button refresh={() => setResource(fetchData())}>refresh</Button>
    </Suspense>
  );
}

export default Transition_page;
