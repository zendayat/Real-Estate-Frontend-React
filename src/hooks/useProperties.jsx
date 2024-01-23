import React from 'react'
import {useQuery} from 'react-query'
const useProperties = () => {
    const {data, isError, isLoading, refetch} = useQuery({
        queryKey: "allProperties"
    })
  return {
    data, isError, isLoading, refetch
  }
}

export default useProperties
