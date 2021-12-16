import React, { useContext, useEffect } from "react"
import { MessageContext } from "./messageDataProvider"
import { MessageCard } from "./MessageCard"
import { useNavigate } from "react-router-dom"

export const MessageList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { messages, getMessage, addMessages, editMessages } = useContext(MessageContext)
  

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("MessageList: useEffect - getMessages")
    
    getMessage()

    
  }, [])

  const navigate = useNavigate()

  return (
    <>
      <h5>Messages</h5>
      
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