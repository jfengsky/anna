import React from 'react'
import DefaultLayout from './layouts/default'

export default props => (
  <DefaultLayout title={props.title}>
    <div id="root" dangerouslySetInnerHTML={{__html: props.content}} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      (function(){
        window.__INIT_STATE = ${JSON.stringify('')}
      }())
      `,
      }}
    />
  </DefaultLayout>
)
