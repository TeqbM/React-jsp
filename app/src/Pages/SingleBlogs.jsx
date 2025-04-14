import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleBlogs() {
     const {id} = useParams()
  return (
    <>
          single blog  {id}
    </>
  )
}
