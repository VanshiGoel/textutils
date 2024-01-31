import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
         let newword=word.toLowerCase();
         return newword[0].toUpperCase()+newword.slice(1)
    }
  return (
     <div style={{height:'50px'}}>
      {props.alert&&<div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}
