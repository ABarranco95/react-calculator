import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super()

    this.state = {
      num1: '',
      num2: '',
      result: ''
    }
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value})
  }

  addNum = () => {
    let addNums = parseInt(this.state.num1) + parseInt(this.state.num2)

    this.setState({result: addNums})
  }

  render() {
    return (
      <div className="container">
        
        <h1>Add with React!</h1>

        <div className="add">

          <input type="number"
            name='num1'
            placeholder='First number'
            value={this.setState.num1}
            onChange={ (e) => this.setNum(e, 'num1') }
          />

          <span>+</span>

          <input type="number"
            name='num2'
            placeholder='Second number'
            value={this.setState.num2}
            onChange={ (e) => this.setNum(e, 'num2') }
          />


          <button onClick={this.addNum}>=</button>
          <h3>Addition results go here!</h3>
          <h4> {this.state.result} </h4>
        </div>
      </div>
    )
  }
}


// function Calculator() {
//     return (
//         <div className="container">
//         <h1>Add with React!</h1>

//         <div className="add">
//           <input type="text" />
//           <span>+</span>
//           <input type="text" />
//           <button>=</button>
//           <h3>Addition results go here!</h3>
//         </div>
//       </div> 
//     )
// }

export default Calculator;