import { lazy, ReactElement, Suspense, useEffect, useState } from 'react';
const Lazy = lazy(() => import('./Lazy'));

function Base(): ReactElement {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return <div>Hello {show ? <Lazy /> : <span>World</span>}</div>;

  // return (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <Lazy />
  //   </Suspense>
  // );
}

export default Base;
