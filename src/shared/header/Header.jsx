import React from 'react'
import stan from "../../assets/images/STAN.png"

export default function Header() {
    return (
        <div className="bg-black h-28 flex justify-between content-center px-20">
            <div className="h-28 flex content-center">
            <img src={stan} className="h-16 m-auto" alt="Stanislaus Foundation"></img>
            <button className="text-red-500 align-middle text-3xl">STANISLAUS FOUNDATION</button>
            </div>
            
            <button className="text-white border-white hover:text-red-500 hover:border-red-500 border-2 border-solid border-white p-2 h-12 my-auto">VOLUNTEER</button>
        </div>
    )
}
