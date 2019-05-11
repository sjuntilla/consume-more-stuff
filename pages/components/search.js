// import React from "react";
// import { Component } from "react";

// class Search extends Component {
//     state = {
//         query: "",
//         data: [],
//         filteredData: []

//     };


// handleInputChange = e => {
//     const query = e.target.value;

//     this.setState(prevState => {
//         const filteredData = prevState.data.filter(element => {
//             return element.name;
//         });
//         return {
//             query,
//             filteredData
//         }
//     })
// }

// getData = () => {
//     fetch("http://localhost:8080")
//     .then(res => res.json())
//     .then(data => {
//         const { query } = this.state;
//         const filteredData = data.filter(element => {
//             return element.name
//         });

//         this.setState({
//             data,
//             filteredData
//         });
//     });
// };

// componentWillMount(){
//     this.getData();
// }

// render(){
//     return (
//     <div className="searchForm">
//      <form>
//          <input
//          placeholder="Search Item.."
//          value={this.state.query}
//          onChange={this.handleInputChange}
//          />
//      <div>{this.state.filteredData.map(i => <p>{i.name} </p>)}</div>
//      </form>
//      </div>
//     )
// }

// }

// export default Search