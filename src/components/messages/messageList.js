import React, { useContext, useEffect } from "react"
import { MessageContext } from "./messageDataProvider"
import { MessageCard } from "./MessageCard"
import { useNavigate } from "react-router-dom"

export const MessageList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { messages, getMessages, addMessages, editMessages } = useContext(MessageContext)
  

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("MessageList: useEffect - getMessages")
    
    getMessages()

  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h2>Messages</h2>
      <button onClick={() => { navigate("create") }}>
        Add Message
      </button>
      <div className="messages">
        {
          <div className="messages">
            {messages.map(message => {

             

              return <MessageCard  
              key={message.id}
                message={message}
                
                
              />
            })
            }
          </div>
        }
      </div>
    </>
  )
      }