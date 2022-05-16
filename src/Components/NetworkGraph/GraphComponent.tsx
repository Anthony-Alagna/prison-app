import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { org, person } from "../../Types/index"


import ChuckGrassley from '../../../img/People/ChuckGrassley.png'
import DavidPerdue from '../../../img/People/DavidPerdue.png'
import MissingPng from '../../../img/missing_png.png'
import CoryGardner from '../../../img/People/CoryGardner.png'
import MitchMcConnell from '../../../img/People/MitchMcConnell.png'
import CapitoShelleyMoore from '../../../img/People/CapitoShelleyMoore.png'
import JohnCornyn from '../../../img/People/JohnCornyn.png'
import HenryCuellar from '../../../img/People/HenryCuellar.png'
import BillHagerty from '../../../img/People/BillHagerty.png'


import GEOGroup from '../../../img/Organizations/GEOGroup.png'
import ApolloGlobalMgmt from '../../../img/Organizations/ApolloGlobalMgmt.png'



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
            {
                id: 4,
                shape: "circularImage",
                image: CoryGardner, //55979 donated from GEO Group
                brokenImage: MissingPng,
                label: "Cory Gardner",
            },
            {
                id: 5,
                shape: "circularImage",
                image: MitchMcConnell, // GEOGroup donated 52204
                brokenImage: MissingPng,
                label: "Mitch McConnel",
            },
            {
                id: 6,
                shape: "circularImage",
                image: CapitoShelleyMoore, //GEOGroup donated 46000
                brokenImage: MissingPng,
                label: "Shelley Moore Capito",
            },
            {
                id: 7,
                shape: "circularImage",
                image: JohnCornyn,  //GEOGroup donated 33600
                brokenImage: MissingPng,
                label: "John Cornyn",
            },
            {
                id: 8,
                shape: "circularImage",
                image: HenryCuellar, //GEOGroup donated 39400
                brokenImage: MissingPng,
                label: "Henry Cuellar",
            },
            {
                id: 9,
                shape: "circularImage",
                image: BillHagerty, //Appollo Global Management donated 52235
                brokenImage: MissingPng,
                label: "Bill Hagerty",
            },
            {
                id: 10,
                shape: "circularImage",
                image: ApolloGlobalMgmt,
                brokenImage: MissingPng,
                label: "Apollo Global Management",
            },


        ],
        edges: [
            { from: 3, to: 2 },
            { from: 3, to: 4 },
            { from: 3, to: 5 },
            { from: 3, to: 6 },
            { from: 3, to: 7 },
            { from: 3, to: 8 },
            { from: 10, to: 9 },
            { from: 10, to: 1 },
            { from: 10, to: 3 },

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
                network.on("click", function (params) {


                });

                //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
    );
}
export default NetworkGraph