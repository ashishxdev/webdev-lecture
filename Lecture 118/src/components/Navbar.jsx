import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={() => getAdjective()}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)

// import React from 'react'
// import { memo } from 'react'

// const Navbar = (props) => {
//   console.log("Navbar is rendered")
//   return (
//     <div>
//       I am a {props.adjective} Navbar
//       <button onClick={() => props.getAdjective()}>{props.getAdjective()}</button>
//     </div>
//   )
// }

// export default memo(Navbar)