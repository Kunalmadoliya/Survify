import React from 'react'
import Container from '../container/Container'

const Header = () => {

    const navItems = [
        {
           name : "Home", 
           slug : "/",
           active : true
        },
        {
           name : "Login", 
           slug : "/login",
           active : ""
        },
        {
           name : "Home", 
           slug : "/",
           active : true
        },
        {
           name : "Home", 
           slug : "/",
           active : true
        },
        {
           name : "Home", 
           slug : "/",
           active : true
        },
    ]
  return (
    <>
      <header>
        <Container>
            <nav>
                  
            </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
