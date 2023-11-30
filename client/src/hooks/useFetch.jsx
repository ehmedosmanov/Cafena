import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
 const [data, setData] = useState(null)
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null)
 const fetchData = async () => {
    try {
        const res = await axios.get(url)
        const result = res.data
        setData(result)
    } catch (error) {
        setError(error)
    } finally {
        setLoading(false)
    }
 }
 useEffect(() => {
    fetchData()
 }, [url])
 
 return {data, loading, error}
}

export default useFetch