import '/src/styles.css'
import { useState } from 'react';

function App() {
 const [toggleState, setToggleState] = useState(1);

const toggleTab = (index) => {
  setToggleState(index);
 }
  return ( 
  <>    
  <div className="container w-3/4 bg-white shadow-xl rounded-md ">
    <div className="m-1 flex flex-col items-center justify-center">
      <h1 className='text-black text-4xl py-3 '>Deena&apos;s Portfolio 🌟
      {/* <span className='items-end justify-end'>☒</span> */}
      </h1>
    </div>
    <hr/>

    {/* buat 3 col and 1 row */}
    <div className=' flex flex-col p-2 m-4 h-full columns-3 overflow-y-auto'>
      <div className='column flex flex-row '>
      <div className='justify-left w-1/3 pr-4 border-r-2'>
        {/* sidebar */}
        <ul>
          {/* <li className='ml-2 my-2 text-2xl p-3 activeTab'> */}
          <li className={toggleState === 1 ? "activeTab" : "tabs"} onClick={() => toggleTab(1)}>
            <span className='tabTitle'>About Me</span>
          </li>
         
          {/* <li className=' ml-2 my-5 text-2xl p-3 '> */}
          <li className={toggleState === 2 ? "activeTab" : "tabs"} onClick={() => toggleTab(2)}>
            <span className='tabTitle'>Work Experience</span>
          </li>
          <li className={toggleState === 3 ? "activeTab" : "tabs"} onClick={() => toggleTab(3)}>
            <span className='tabTitle'>Skills</span>
          </li>
        </ul>
      </div>

      <div className='w-3/4 m-4 pl-4 border-r-2'>
        {/* text component */}
        {/* <h3>Details:</h3> */}
        <div className={toggleState === 1 ? "title activeTitle" : "title"} onClick={ () => toggleTab(1)}>
        <div>
          <img className='txtIcon' src='txtIcon.png'/>
        <p>aboutMe.txt</p>
          </div>
        </div>

        <div className={toggleState === 2 ? "title activeTitle" : "title"} onClick={() => toggleTab(2)}>
        <div className='mr-8'>
        <img className='txtIcon' src='txtIcon.png'/>
            <p className='ml-1'>intern.txt</p>
          </div>
          <div className='ml-8'>
        <img className='txtIcon' src='txtIcon.png'/>
            <p className='text-wrap '>currentWork.txt</p>
          </div>
        </div>

        <div className={toggleState === 3 ? "title activeTitle" : "title"} onClick={() => toggleTab(3)}>
        <div>
        <img className='txtIcon' src='txtIcon.png'/>
            <p className='ml-1'>skills.txt</p>
          </div>
        </div>
      </div>

      <div className='w-1/2  m-4 '>
      <div className='flex flex-col justify-center items-center'>
        <img className='aligns-center txtIcon w-20' src='txtIcon.png'/>
        <span className='text-center p-1'>about me</span>
      </div>
      <div>
        <h3>Details:</h3>
        {/* component */}
        <div className={toggleState === 1 ? "content activeContent" : "content"} onClick={() => toggleTab(1)}>

        <p>
          this issssssssssss details 1
        </p>
        </div>

        <div className={toggleState === 2 ? "content activeContent" : "content"} onClick={() => toggleTab(2)}>
        <p>
          this issssssssssss details
        </p>
        </div>

        <div className={toggleState === 3 ? "content activeContent" : "content"} onClick={() => toggleTab(3)}>
        <p>
          thid
        </p>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </>
)}

export default App;