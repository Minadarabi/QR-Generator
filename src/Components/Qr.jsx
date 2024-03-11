import { useState } from "react"
import QRCode from "react-qr-code"
import "./style.css"


export const Qr = () => {
    const [input , setInput] = useState("")
    const [qr , setQr] = useState("")
  return (
    <>
     <div>
        <h1>QR Code Generator</h1>
        <div className="qr-container">
          <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter Your Value here" />
          <button>Generate</button>
          <QRCode value="ghjl" title="gbhnjm" size={300} />    

        </div>
      
    </div>
    </>
   
  )
}
