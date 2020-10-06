import { useState, useCallback } from 'react';
import { MOVIES } from '../services/api'
import axios from 'axios'

const useRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const request = useCallback(async(url) => {
    const { code } = await MOVIES(url)
    try { 
      const response = await axios.get(code)
      setData(response.data)

    } catch(error) {
      console.log(error)
    }
  }, [])
  return { data, error, loading, request };
};

export default useRequest