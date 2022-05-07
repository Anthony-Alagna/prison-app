import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";

import "./styles.css";
// need to import the vis network css in order to show tooltip
import "./network.css";

 const NetworkGraph = () => {
    const DIR = "../../../img/"
    const DIRperson = DIR + "People"
    const DIROrg = DIR + "Organizations"
    const graph = {
        nodes: [
            {
                id: 1,
                shape: "circularImage",
                image: DIR + "missing.png",
                brokenImage: DIR + "missingBrokenImage.png",
                label: "when images\nfail\nto load",
            },
        ],
        edges: [
            { from: 1, to: 2 },
        ]
    };

    const options = {
        nodes: {
            borderWidth: 4,
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
            //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
        />
        );
}
export default NetworkGraph()