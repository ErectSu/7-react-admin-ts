import { setLocalStorage } from '@/utils'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import actionType from '../../../app.constant'

let runOneTime = true

const JsEs5Detail = (props: any) => {
  const params = useParams()
  setLocalStorage('routeParams', params)
  
  return (
    <div>
      <header>JsEs6Detail page  admin</header>
    </div>
  )
}

export default JsEs5Detail