import React, {useState, useEffect, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
          .then(res => res.json())
          .then(setUsers)
  }

  const addUser = user => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(getUsers)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    console.log("")
  }, [users])

  return (
    <UserContext.Provider value = {{
      users, addUser, getUsers
    }}>
        {props.children}
    </UserContext.Provider>
  )
}