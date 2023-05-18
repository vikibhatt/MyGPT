import React from 'react'
import logo from '../images/mygpt.png'

const Ui = () => {
  return (
    <div className = "flex w-[52] h-[100vh]">
      <div className = "w-[18%] bg-[#1f2022]">
        <div className = "flex flex-row justify-around">
      <img className = "w-[65%]" src= {logo}/>
       </div>
      {/* <div className =  "flex flex-row mx-9">
       <button className =  "flex justify-start border w-[100%] rounded-full p-1.5 text-white hover:bg-[#343541]">
       <svg className = "m-1" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
       New Chat
       </button>
      </div> */}
      </div>
      <div className = "flex flex-col w-[82%] justify-center items-center font-bold bg-[#343541]">
        <div className = "text-white text-3xl">MyGPT</div>

        <div className = "flex justify-between w-[52vw] my-8 text-white">
         <div className = "flex flex-col justify-center items-center w-[16vw]">
         <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
         Examples 
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
          Explain quantum computing in simple terms
         </button>
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
          Got any creative ideas for a 10 year old’s birthday?
         </button>
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
          How do I make an HTTP request in Javascript?
         </button>
         </div>

         <div className = "flex flex-col justify-center items-center w-[16vw]">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
         Capabilities
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
         Remembers what user said earlier in the conversation
         </button>
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
         Allows user to provide follow-up corrections
         </button>
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
         Trained to decline inappropriate requests
         </button>
         </div>

         <div className = "flex flex-col justify-center items-center w-[16vw]">
         <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
         Limitations
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
         May occasionally generate incorrect information
         </button>
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
         May occasionally produce harmful instructions or biased content
         </button>
         <button className = "bg-[#40414f] rounded-md m-2 p-1">
          Limited knowledge of world and events after 2021
         </button>
         </div>
        </div>

        <div className = "flex w-[52vw] justify-center items-center">
          <input className = "w-[45vw] rounded-md bg-transparent m-12 p-1 text-white bg-[#40414f]" type="text" placeholder = "Enter your message"/>
          <button className = "text-white mx-2 rounded-md p-1 bg-[#40414f]">Submit</button>
        </div>
      </div>
    </div>
    
  )
}

export default Ui
