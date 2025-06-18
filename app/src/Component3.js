import React from 'react'
import logo2 from './GettyImages-1352396871.webp'
import WatchListComponent from './WatchListComponent'
import { useState, useEffect } from "react"
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import './Component3.css';



function Component3(props) {
  const [watchState, setWatchState] = useState([{ marketwatch: "" }]);
  const [state, setState] = useState("");
  const [liststate, setListState] = useState({watchlists:[]});
  function handleChange1(event) {
    //setStockState(...stockState, {stock:""});
    setWatchState([...watchState, { marketwatch: "" }]);
};
useEffect(() => {
    //console.log(liststate.watchlists);
    const interval = setInterval(() => {
      getWatchlists();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
function getWatchlists() {
axios.get("http://localhost:8080/api/")
    .then((res)=>{
      // console.log(res);
      for(let i=0;i<res.data.length;i++)
      {
          // console.log(res.data[i]);
          // console.log(res.data[i].id);
          // console.log(location.state.id);
          if(res.data[i].id==location.state.id)
          {
            // console.log(res.data[i].marketwatchList);
            if(res.data[i].marketwatchList!=null)
              setListState({
                  watchlists:res.data[i].marketwatchList
              })
            break;
          }
          // setListState({
          //   watchlists:res.data.marketwatchList
          // })
        }
    })
  if(liststate.watchlists==undefined)
    liststate.watchlists=[];
}
function submit(evenet){
    //id=2;
    //console.log(id)
    //console.log(state);
    evenet.preventDefault();
    let listwatch=[];
    let arr=[];
    listwatch.push(state);
    arr.push(listwatch);
    
    axios.put("http://localhost:8080/api/",{
        id:location.state.id,
        name:'xyz',
        email:'xyz',
        password:'xyz',
        stocks:[],
        marketwatchList:arr
      }).then(()=>{
        getWatchlists();
      })
    // let listStocks=[];
    // axios.post("http://localhost:8080/api/",{
    //     name:state,
    //     email:'xyz',
    //     password:'xyz',
    //     stocks:listStocks
    //   }).then(()=>{
    //     getWatchlists();
    //   })
     setState('');
    }
 
  let stocks=['stock1', 'stock2', 'stock3', 'stock4'];
  let stocks2=['stock1', 'stock2', 'stock3', 'stock4', 'stock5', 'stock6', 'stock7', 'stock8', 'stock9'];
  let ind=1;
  
  const location = useLocation();
  return (
    <div>
      <Navbar userId={location.state.id}/>
      <div className='row'>
        {/* <div className='col' style={{paddingLeft:"50px",paddingTop:"10px", fontFamily:'Didot'}}><p className='pW'>WatchList</p></div> */}
        <div className='col'  style={{paddingLeft:"40px",paddingTop:"20px"}}>
        <button onClick={handleChange1} className="buttonW" style={{fontSize:"15px",paddingLeft:"30px",paddingRight:"30px", marginBottom:'20px'}}>Add new WatchList</button>
        {watchState.length === 2 && (
                <div><input
                type="text"
                placeholder="Name of WatchList"
                value={state} onChange={(e)=>setState(e.target.value)}
                style={{marginBottom:"30px", marginTop:"10px"}}
              /> <button className="buttonW" style={{fontSize:"15px"}} onClick={(e)=>submit(e)}>Add</button></div>
              )}
              </div>
              </div>
       <div className='row'>
        {
          liststate.watchlists.map((item, index)=>
          {return(<WatchListComponent stocksList={stocks2} items={item} id={item.id} userId={location.state.id} />)}
          )
            // console.log(liststate.watchlists)
            // props.users
        //     liststate.watchlists.map((item, index)=>
        //     {
        //       console.log(item);
        //       if(item.name=='xyz')
        //         return(<WatchListComponent stocksList={stocks2} items={item.name} id={item.id} />)
        //       else
        //         return(<WatchListComponent stocksList={stocks} items={item.name} id={item.id} />)
        //       ind++;
        //     }
        // )
        }
      </div>
      </div>
  )
}

export default Component3