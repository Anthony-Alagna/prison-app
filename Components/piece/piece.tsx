import React, { createElement, FunctionComponent } from 'react'
import "./piece.scss"

interface MessageProps{
    message:string
}

function FunctionalComponent(props:MessageProps) {
    const rootElement = 
        createElement("div", {},
            createElement("h1", {}, "Bookmarks"),
            createElement("ul", {},
                createElement("li", {},
                    createElement("h2", {}, "Ethernet"),
                    createElement("a",
                        { href: "https://ww.etherinet.com" },
                        "The Homepage of Etherinet"
                    )
                )
            )
        )
    return (rootElement);
    
}
export default FunctionalComponent;