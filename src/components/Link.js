import React from "react"

export default function Link(link) {
    return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
        </a>
    )
}