import React, { Component, createElement } from 'react'
import ReactDOM from 'react-dom'

function listElements() {
    class sidebar extends React.Component{
        name: string;

        constructor(name: string) {
            super(name)
            console.log("Sidebar Component Created");
            this.name = name;
            
        }

        render(): React.ReactNode {
            return(
                createElement("li", {},
                    createElement("h2", {this.name})
                )
            );
        }
    }

}

