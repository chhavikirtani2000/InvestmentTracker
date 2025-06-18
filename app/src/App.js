import React from 'react';
import axios from 'axios';
import Component3 from './Component3';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './Navbar';
import logo2 from './GettyImages-1352396871.webp';
import Footer from './Footer';
import Content1 from './Content1';
import Signup from './Signup';
import PageNotFound from './PageNotFound';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Dashboard from './Dashboard';
import Tab from './Tab';
import ESG from './ESG';

class  App extends React.Component {
  userId='';
  constructor(props){
    super(props);
    this.state = {
      users:[],
      id:0,
      Name:'',
      Email:'',
      Password:''
    }
  }
  setUserIdApp(idx){
    // Object.preventExtensions(this);

    // Object.defineProperty(this, 'userId', { value: id });
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        users:[],
      id:idx,
      name:'',
      email:'',
      password:''
      })
    })
    // axios.get("http://localhost:8080/api/")
    // .then((res)=>{
    // this.setState({
    //   users:[],
    //   id:idx,
    //   name:'',
    //   email:'',
    //   password:''
    // });
    //this.userId=id;
    console.log(this.state.id);
  }
  componentDidMount(){
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        users:res.data,
        id:0,
        name:'',
        email:'',
        password:''
      })
    })
  }
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://localhost:8080/api/",{
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/",{
        id:id,
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://localhost:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://localhost:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        name:res.data.name,
        email:res.data.email,
        password:res.data.password
      });
    }) 
  }
  watchList=['watchlist1', 'watchlist2', 'watchlist3', 'watchlist4', 'watchlist5', 'watchlist6'];
  render(){
    return (
      <div className="container" >
        <BrowserRouter>
        {/* <Navbar /> */}
        <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/" element={<Component3 users={this.watchList}/>} /> */}
            {/* <Component3 />
          </Route> */}
          <Route path="/about" element={<Component3 users={this.watchList}/>} />
            {/* <Component3 />
          </Route> */}
          <Route path="/profile" element={<Tab/>} />
          <Route path="/esg" element={<ESG/>} />


          <Route exact path='/' element={<Content1 />} />
          <Route exact path='/login' element={<Login func={this.setUserIdApp}  />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/forgotpassword' element={<ForgotPassword />} />
          <Route exact path='*' element={<PageNotFound />} />
          
        </Routes>
        <Footer />
        </div>
        </BrowserRouter>
                      
      </div>
    );
  }
}

export default App;