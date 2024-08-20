import React from 'react'
import './Warning.css'

const Warning = ({setDisappear}) => {
  return (
    <section className='section'>
        <div className='warning'>
            <h1 className='title'>📛Warning📛</h1>
            <div onClick={()=> setDisappear(false)} className='close'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c3e50"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
            <p className='text'>
                <p>👋Hello There,</p>
                <p>💔This is the web app is still under construction🚧</p>
                <p>😇Have a nice day🤗</p>
            </p>
        </div>
    </section>
  )
}

export default Warning