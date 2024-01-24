import React from 'react'
import {useQuery} from 'react-query'
import { getAllProperties } from '../utils/api'
const useProperties = () => {
    const {data, isError, isLoading, refetch} = useQuery(
        "allP roperties",
        getAllProperties,
        {refetchOnWindowFocus: false}
    )
    return{
      data,
      isError,
      isLoading,
      refetch
    }
  return {
    data, isError, isLoading, refetch
  }
}

export default useProperties
