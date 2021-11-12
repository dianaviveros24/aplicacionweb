import { useState, useEffect } from 'react';

const useInitialState = (URL) => {
  const [ nombre, setNombre ] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setNombre(data));
  }, []);
  return nombre;
};

export default useInitialState;
