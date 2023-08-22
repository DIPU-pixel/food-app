import React from 'react'
import { useRouteError } from 'react-router-dom'

const Errorpage = () => {
   const RouterIssue= useRouteError();
   console.log(RouterIssue);
  return (
    <div>
        <h1>error</h1>
        <p>something went wrongs</p>
        <p>{RouterIssue?.error?.message?.replace("\"/jiqfiuwheif/\"")}</p>
    </div>
  )
}

export default Errorpage