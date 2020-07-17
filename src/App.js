import React, { Component } from 'react';
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      myUsers: [],
      Images:[],
      isLoaded: false,
    }
    //this.getUsersInfo();
    //this.getImages();
  }

  getUsersInfo = () => {
    this.setState({Images:[]})
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ myUsers: data })
        console.log(this.state.myUsers)
      })
  }
  
  getImages = () => {
    this.setState({myUsers:[]})
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res=>res.json())
      .then(data =>{
        this.setState({Images : data})
      
      })  }


render(){
  return (
    <div className="App">
      <h1>Welcome Users</h1>
  <button onClick={this.getUsersInfo}>Click to get Users</button>
  <button onClick={this.getImages}>Click to get Images</button>
  <table className="table table-hover table-striped" id = "usertable">
    <thead>
      <tr>
      <th>Name</th>
      <th>UserName</th>
      <th>email</th>
      <th>city</th>
      <th>zipcode</th>
      <th>phone</th>
      </tr>
    </thead>
    {this.state.myUsers.map((u,i)=> <tr>
      <td>{u.name}</td>
      <td>{u.username}</td>
      <td>{u.email}</td>
      <td>{u.address.city}</td>
      <td>{u.address.zipcode}</td>
      <td>{u.phone}</td>
    </tr>)}
  </table>
  <table className="table table-hover table-striped" id = "Images">
    <thead>
      <tr>
      <th class="col-4">AlbumID</th>
      <th class="col-4">Title</th>
      <th class="col-4">Image</th>
      </tr>
    </thead>
    {this.state.Images.map((images,i)=> <tr>
      <td>{images.albumId}</td>
      <td>{images.title}</td>
      <td><img src={images.url}alt={images.thumnailUrl} style={{borderRadius:'50%'}} width="100" height="100"/></td>
    </tr>)}
  </table>
     
    </div>
  );
  }
}

export default App;
