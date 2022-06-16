import React from "react"
import ProfilePic from "../Images/profilepic.jpg"
import { BiEnvelope } from "react-icons/bi"
import { AiFillLinkedin } from "react-icons/ai"

export default function Info() {
    return (
        <div className="Info">
            <img src={ ProfilePic } alt="Profile Picture" className="ProfilePic"/>
            <h1>Sebastian Rubina</h1>
            <p>Frontend Developer</p>
            <p><a href="https://sebastianrubina.com">sebastianrubina.com</a></p>

            <div className="ButtonContainer">
                <button className="ButtonEmail"><BiEnvelope size={20}/> Email</button>
                <button className="ButtonLinkedIn"><AiFillLinkedin size={20}/>LinkedIn</button>
            </div>
        </div>
    )
}