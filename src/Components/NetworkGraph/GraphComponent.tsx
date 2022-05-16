import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { org, person } from "../../Types/index"
import ChuckGrassley from '../../../img/People/ChuckGrassley.png'
import DavidPerdue from '../../../img/People/DavidPerdue.png'
import MissingPng from '../../../img/missing_png.png'
import GEOGroup from '../../../img/Organizations/GEOGroup.png'




const NetworkGraph = () => {
    const graph = {

        //convert to import people and org objects, populate 
        //id, label, image from object
        nodes: [
            {
                id: 1,
                shape: "circularImage",
                image: ChuckGrassley,
                brokenImage: MissingPng,
                label: "Chuck Grassley"
            },
            {
                id: 2,
                shape: "circularImage",
                image: DavidPerdue,
                brokenImage: MissingPng,
                label: "David Perdue",
            },
            {
                id: 3,
                shape: "circularImage",
                image: GEOGroup,
                brokenImage: MissingPng,
                label: "GEO Group",
            },
        ],
        edges: [
            { from: 3, to: 2},
        ]
    };

    const options = {
        autoResize: true,
        height: '500px', //fix this to not be static
        width: '100%',
        nodes: {
            borderWidth: 6,
            size: 30,
            color: {
                border: "#222222",
                background: "#666666",
            },
            font: { color: "#eeeeee" },
        },
        edges: {

            color: "lightgray",
        },
    };

    //TODO Implement events

    return (
        <Graph
            graph={graph}
            options={options}
            getNetwork={network => {
                network.on("click", function(params) {
                      
                    
                });

                //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
    );
}
export default NetworkGraph