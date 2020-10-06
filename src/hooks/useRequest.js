import { useState, useCallback } from 'react';
import { MOVIES } from '../services/api'
import axios from 'axios'

const useRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const request = useCallback(async(url) => {
    const { code } = MOVIES(url)
    try { 
      setLoading(true)
      setError(null)
      const response = await axios.get(code)
      setData(response.data)
    } catch(error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])
  return { data, error, loading, request };
};

export default useRequest