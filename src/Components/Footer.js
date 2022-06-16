import React from "react"
import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="Footer">
            <ul>
                <li><FaTwitterSquare size={25}/></li>
                <li><FaFacebookSquare size={25}/></li>
                <li><FaInstagramSquare size={25}/></li>
                <li><FaGithubSquare size={25}/></li>
            </ul>
        </div>
    )
}