import React, { useEffect, useState } from 'react'
import sideDot from '../../assets/more_vert_30dp_F3F3F3_FILL0_wght400_GRAD0_opsz24.png'
import './TopNav.css'

const TopNav = ({setAppear}) => {
    const [active , setActive] =  useState(0)

    const testing = () =>{
        console.log('testing!!!!')
    }
    const setting = (no) =>{
        setActive(no)
    }    
  return (
    <div className='topnav'>
        <div  onClick={()=> setAppear(true)}  className='item'>
            <svg className='collapse' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m296-80-56-56 240-240 240 240-56 56-184-184L296-80Zm184-504L240-824l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </div>
        <div  className='list item'>
            <div onClick={()=> setting(0)} className={`it ${active == 0 ? "active": null}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-logos' viewBox="0 -960 960 960"><path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z"/></svg>     
            </div>
            <div onClick={()=> setAppear(true)}   className={`it ${active == 1 ? "active": null}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-logos' viewBox="0 -960 960 960"><path d="M160-120q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-254q-35-12-57.5-43T40-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T200-607v87h240v-87q-35-12-57.5-43T360-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T520-607v87h200q17 0 28.5-11.5T760-560v-47q-35-12-57.5-43T680-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-607v47q0 50-35 85t-85 35H520v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87H200v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-240q0-17-11.5-28.5T160-280q-17 0-28.5 11.5T120-240q0 17 11.5 28.5T160-200Zm0-480q17 0 28.5-11.5T200-720q0-17-11.5-28.5T160-760q-17 0-28.5 11.5T120-720q0 17 11.5 28.5T160-680Zm320 480q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm0-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm320 0q17 0 28.5-11.5T840-720q0-17-11.5-28.5T800-760q-17 0-28.5 11.5T760-720q0 17 11.5 28.5T800-680ZM160-240Zm0-480Zm320 480Zm0-480Zm320 0Z"/></svg>
            </div>
            <div onClick={()=> setAppear(true)}  className={`it ${active == 2 ? "active": null}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-logos' viewBox="0 -960 960 960"><path d="M480-40q-112 0-206-51T120-227v107H40v-240h240v80h-99q48 72 126.5 116T480-120q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840-480h80q0 91-34.5 171T791-169q-60 60-140 94.5T480-40Zm-36-160v-52q-47-11-76.5-40.5T324-370l66-26q12 41 37.5 61.5T486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-50h70v50q36 3 65.5 29t40.5 61l-64 26q-8-23-26-38.5T482-648q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v50h-70ZM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 206 51t154 136v-107h80v240H680v-80h99q-48-72-126.5-116T480-840q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120-480H40Z"/></svg>
            </div>
        </div>
        <div onClick={()=> setAppear(true)}  className='item'>
            <img className='side-dot' src={sideDot} alt="" />
        </div>
        
    </div>
  )
}

export default TopNav