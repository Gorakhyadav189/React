import { useState ,useCallback,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number,setnumber]=useState(false)
  const [char,setchar]=useState(false)
  const [password,setpassword]=useState("")

 console.log(password +"sbdhbssd")
  const passwordgenerater=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str +="0123456789"
    if(char) str +="/?@#$%-+[]"
    for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()* str.length+1)
    pass += str.charAt(char)

  }
   setpassword(pass)
  },[length,number,char,setpassword])

  useEffect(()=>{
    passwordgenerater()
  },[length,,number,char,passwordgenerater])
  return (
    <>
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-6 text-orange-400">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
           Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-md mb-5">
          <input
            type="text"
            value={password}
            className="flex-1 outline-none py-2 px-3 bg-transparent text-lg text-white"
            placeholder="Generated password"
            readOnly
          />
          <button
            onClick={() => navigator.clipboard.writeText(password)}
            className="bg-orange-500 hover:bg-orange-600 text-orange-500 px-4 py-2 text-sm font-medium transition"
          >
            Copy
              </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Length slider */}
          <div className="flex items-center justify-between">
            <label className="font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-2/3 cursor-pointer accent-orange-500"
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
            />
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberinput"
              className="accent-orange-500 w-4 h-4"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput" className="cursor-pointer">
              Include Numbers
            </label>
          </div>

          {/* Special chars */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charinput"
              className="accent-orange-500 w-4 h-4"
              onChange={() => {
                setchar((prev) => !prev);
              }}
            />
            <label htmlFor="charinput" className="cursor-pointer">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
