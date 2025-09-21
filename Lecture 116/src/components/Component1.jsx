// import React from 'react'

// const Component1 = ({count}) => {
//   return (
//     <div>
//         {count}
//     </div>
//   )
// }

// export default Component1

import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
    const value = useContext(counterContext)
  return (
    <div>
        {value.count}
    </div>
  )
}

export default Component1
