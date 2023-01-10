import './App.css';
import axios from 'axios';
import { DataSet, Network } from 'vis';
import React, { createRef } from "react";

// https://stackoverflow.com/questions/40792649/rendering-vis-js-network-into-container-via-react-js

class App extends React.Component {
  constructor () {
    super();
    this.network = {};
    this.appRef = createRef();
    this.state = {
      nodes : new DataSet(),
      edges : new DataSet(),
      info: {}
    }
    // this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  // Calls this function when first loading page
  // https://beta.reactjs.org/learn/updating-arrays-in-state
  componentDidMount() {
    var curr_nodes = new DataSet()
    axios.get('http://localhost:3000/getallteas') // calls api to get all teas
      .then(result => {
        result.data.response.forEach(val=> {
          curr_nodes.add({
              id : val['id'],
              label : val['tea_name']
          })
        })
        var first_info = {id : result.data.response[0]['id'],label : result.data.response[0]['tea_name']}
        this.setState({nodes:curr_nodes, info: first_info})
      })
    var curr_edges = new DataSet()
    axios.get('http://localhost:3000/getalledges') // calls api to get all edges
      .then(result => {
        result.data.response.forEach(val=> {
          curr_edges.add({
              from : val['from_node'],
              to : val['to_node']
          })
        })
        this.setState({edges:curr_edges})
      })
    const data = {
      nodes: curr_nodes,
      edges: curr_edges
    };
    const options = {};

    this.network = new Network(this.appRef.current, data, options);

    // tells react what to do when clicking on a code
    this.network.on("click", (params) => {
      console.log(params)
      console.log(curr_nodes.get(params['nodes'][0]))
      this.setState({info: curr_nodes.get(params['nodes'][0])})
    });
  }

  onClick () {
    console.log(this.state.info)
  }


  render() { 
    return (
        <div style={{height: '95vh'}}>
            <button onClick={this.onClick}> Click me</button>
            <div>{this.state.info['id']} {this.state.info['label']}</div>
            <div className='graph' ref={this.appRef} />
        </div>
    )
  }
}

export default App;
