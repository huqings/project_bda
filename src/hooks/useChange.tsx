import { useState } from 'react';

const useChange = (initState?: any) => {
  const [state, setState] = useState(initState);
  const setXState = (val: any) => {
    setState(val);
  };
  return [state, setXState];
};
export default useChange;