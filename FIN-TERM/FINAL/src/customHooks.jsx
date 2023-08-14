import { useEffect, useState, useRef } from "react";

export function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

export const fetcher = async (url, options) => {

    const response = await fetch(url, options);
    if(response.ok){
      const json = await response.json();
      console.log(json)
      return json;
    }

}

export function useFetch(url, options){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetcher = async () => {
    const response = await fetch(url, options? options : null);
    
    if(response.ok){
      const json = await response.json();
      setData(json)

    } else {
      const json = await response.json();
      setError(json);

    }
  }
  useEffect(() => {

    fetcher();

  })

  return {data, error};
}