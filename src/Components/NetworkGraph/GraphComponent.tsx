import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { org, person } from "../../Types/index"
import ChuckGrassley from '../../../img/People/ChuckGrassley.png'

/* import OrgsListFull from '../NetworkGraph/orgObjects/orgs';
import PeopleListFull from "./peopleObjects/people";

let orgsList: org[] = OrgsListFull
let peopleList: person[] = PeopleListFull */


const NetworkGraph = () => {
    let DIR = "../../../img/"
    const DIRperson = DIR + "People"
    const DIROrg = DIR + "Organizations"
    const graph = {

        //convert to import people and org objects, populate 
        //id, label, image from object
        nodes: [
            {
                id: 1,
                shape: "circularImage",
                image: ChuckGrassley,
                brokenImage: DIR + "missing_png.png",
                label: "broken"
            },
            {
                id: 2,
                shape: "circularImage",
                image: DIR + "missing.png",
                brokenImage: DIR + "missing_png.png",
                label: "when images\nfail\nto load",
            },
        ],
        edges: [
            { from: 1, to: 2 },
        ]
    };

    const options = {
        autoResize: true,
        height: '500px', //fix this to not be static
        width: '100%',
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
export default NetworkGraph