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
      edges : new DataSet()
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/getallteas')
      .then(result => {
        result.data.response.forEach(val=> {
          this.state.nodes.add({
              id : val['id'],
              label : val['tea_name']
          })
        })
      })
    axios.get('http://localhost:3000/getalledges')
      .then(result => {
        console.log(result.data.response)
        result.data.response.forEach(val=> {
          this.state.edges.add({
              from : val['from_node'],
              to : val['to_node']
          })
        })
      })
    
    const data = {
      nodes: this.state.nodes,
      edges: this.state.edges
    };
    const options = {};

    this.network = new Network(this.appRef.current, data, options);
  }

  render() { 
    return (
        <div style={{height: '100vh'}}>
            <div className='graph' ref={this.appRef} />
        </div>
    )
  }
}

export default App;
