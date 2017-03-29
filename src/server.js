import React from 'react'
import {renderToString} from 'react-dom/server'
// export default (params) => (
//     <div>root</div>
// )

const root = param => <div>renderToString</div>

const content = renderToString(root())

export default content
