import React,{useState} from 'react'

export default function About() {
    const[text,setText]=useState('Enable Dark Mode')
    const [mystyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
   })
   const handleDarkMode=()=>{
       if(mystyle.color==='white')
       {
           setMyStyle({
             color:'black',
             backgroundColor:'white'
           })
           setText('Enable Dark Mode')
       }
       else{
          setMyStyle({
           color:'white',
           backgroundColor:'black'
          })
          setText('Enable Light Mode')
       }
   }
  return (
    <div style={mystyle} className="my-4">
      <h1>About Us</h1><br/>
      <p>Welcome to TextUtils, the ultimate destination for harnessing the full potential of text processing! In a world where communication is key, our platform is designed to be your indispensable companion for all things text-related. Whether you're a seasoned writer, a dedicated student, or a professional navigating the intricacies of language, TextUtils is here to make your journey smoother and more efficient.<br/><br/>

        At TextUtils, we believe that words hold immense power, and our mission is to unlock that power for you. Our comprehensive suite of tools is carefully crafted to cater to a diverse array of needs. Need to analyze the character count of a document or delve into the intricacies of word frequency? We've got you covered. Seeking to streamline your editing process with text summarization or enhance global communication through language translation? TextUtils has the solution.<br/><br/>

        What sets us apart is not just the functionality of our tools but the user-friendly experience we provide. We understand that navigating through the complexities of text processing can be daunting, so we've designed our platform to be intuitive and accessible. Whether you're a tech-savvy individual or just starting your journey into the world of text manipulation, TextUtils is your ally.<br/><br/>

        Join us on a voyage of innovation and simplicity. Explore the diverse landscape of text editing with confidence, knowing that TextUtils is here to empower you. Your words matter, and we're here to ensure that you can wield them effectively. Welcome to TextUtils – where every keystroke unlocks new possibilities in the world of words!</p>
       <button className="btn btn-primary mx-1 my-2" onClick={handleDarkMode}>{text}</button>
    </div>
  )
}
