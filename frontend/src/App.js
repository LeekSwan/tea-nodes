import './App.css';
import axios from 'axios';
import React from 'react';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      test: ''
    }
    // this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/')
    .then(result => {
      console.log(result)
      // const allFoodsFromResponse = result.data.response;
      // this.setState({ allFoods: allFoodsFromResponse });
     })
  }





  handleChange(e) {
    // handles changes that are made to food form
  }


  render() {
    return (
        <div>
            

        </div>
    )
      
  }
}

  


export default App;
