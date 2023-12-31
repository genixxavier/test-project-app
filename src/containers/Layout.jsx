import React  from 'react'
import styled from 'styled-components'

const Layout = ({children, className}) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default styled(Layout)`
background-color: #14213d;
color: #fff;
min-height: 100vh;
padding: 1px;
`