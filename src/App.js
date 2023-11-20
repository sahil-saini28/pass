import { useState, useCallback, useEffect, useRef } from "react";






function App() {
  const [length, setLength] = useState(13)
  const [Character, setCharacter] = useState(false)
  const [Number, setNumber] = useState(false)
  const [password,setPassword] = useState("")


const passwordgenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if ( Number === true) str +="0123456789"
  if ( Character === true ) str += "!@#$%^&*(){}[]|?/,.;:"
  for (let i=1 ; i <= length ;i++){
    let char = Math.floor(Math.random() * str.length+1);
    pass +=str.charAt(char)
    setPassword(pass)
  } 

},[length,Number,setPassword,Character,]);

useEffect(()=>{passwordgenerator()},[length,setNumber,setPassword, setCharacter,passwordgenerator])
   
const passwordRef = useRef(null)

const copypass = useCallback(() => {
  passwordRef.current?.select()
  navigator.clipboard.writeText(password);
}, [password]);



  return (
    <>
      <h1 className="text-4xl text-center text-green-400  ">first project </h1>
      <div className="w-full max-w-md mx-auto  text-center  shadow-md  rounded-lg px-4 my-8  ">
        <label
          htmlFor="price"
          className="block  my-5 text-4xl font-large  leading-6 text-gray-900"
        >
          Generated password
        </label>

        <input
          type="text"
          value={password}
          name="password"
          id="password"
          className=" w-full text-center my-5 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-2 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="password"
          ref={passwordRef}
        />

        <input
         
          id="minmax-range"
          type="range"
          min={6}
          max={20}
          value={length}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e)=>setLength(parseInt(e.target.value))}
       />
        
        <label
          for="minmax-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          password length :{length}
        </label>

      
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="vue-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox-list"
                onClick={()=>setCharacter((prev)=>!prev)}
                className="w-full py-3  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
              Character
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="react-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="react-checkbox-list"
                onClick={()=>setNumber((prev)=>!prev)}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Number
              </label>
              
            </div>
            
          </li>
         
        </ul>
        <button onClick={copypass} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
      </div>
    </>
  );
}

export default App;
