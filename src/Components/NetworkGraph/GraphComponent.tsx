import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";

import "./styles.css";
// need to import the vis network css in order to show tooltip
import "./network.css";

function NetworkGraph() {
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

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NetworkGraph />, rootElement);