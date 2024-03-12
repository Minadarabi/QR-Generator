import { useState } from "react"
import QRCode from "react-qr-code"
import "./style.css"


export const Qr = () => {
    const [input , setInput] = useState("")
    const [qr , setQr] = useState(null);

    function generateQr(){
        setQr(input)
        setInput("")
        
    }
  return (
    <>
     <div>
        <h1>QR Code Generator</h1>
        <div className="qr-container">
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter Your Value here" />
          <button onClick={generateQr}>Generate</button>
          {!!qr && <QRCode value={qr} title="QR" size={300} /> }   

        </div>
      
    </div>
    </>
   
  )
}
