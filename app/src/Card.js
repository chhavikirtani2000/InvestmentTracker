import React ,{useState,useEffect} from 'react';
import './Card.css';
import axios from 'axios';

function Card() {
    const [user,setUser] = useState([]);
    var options = {
      method: 'GET',
      url: 'https://latest-stock-price.p.rapidapi.com/price',
      params: {Indices: 'NIFTY 50'},
      headers: {
      'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
      'x-rapidapi-key': '8bd87d9e56mshf4817b084d7796fp192187jsn9533e1f6b8de'
      }
      };

    const fetchData =()=>{

      axios.request(options).then(function (response) {
        var dataFromResponse = response.data;
        let divyani = dataFromResponse
        console.log(divyani);
        setUser(divyani)
        // setPrices(dataFromResponse);
        // stockPrices=dataFromResponse;
        
        }).catch(err => console.log(err));



        // fetch("https://api.twelvedata.com/time_series?symbol=EUR/USD&interval=1min&apikey=7736a6fa517e4906a4bf17df18d78764")
        // .then((response) =>{
        //     return response.json();
        // }).then((data)=>{
        //     let divyani = data.values
        //     console.log(divyani);
        //     setUser(divyani)
        // })
        
    }
   useEffect(()=>{
        fetchData();
    },[]) 
 
    return (
        <div class="scrolling-wrapper" >
            <marquee>
        
          {user.map(data => (
             
               
             <div class="card cardDC">
               
               
                <div className="cardDC-img-top" style={{backgroundColor:"white"}}>
                 <span> Last update</span>
                 <br></br>
                   {data.lastUpdateTime}
                   
                 {/* <span className="card-title" style={{color:'white'}}>
                    Name : {data.symbol}
                 </span> */}
                 
                 </div>
                 <br></br>
                 <br></br>
                 <h4 style={{color:'white'}}>{data.symbol}</h4>
                 <span className="card-titleDC" style={{color:'white'}}>
                    Opening price : {data.open}
                 </span>
                 <br></br>
                 <h5 className="card-texttDC">
                   Day high: {data.dayHigh}
                 </h5>
                 <h5 className="card-textDC">
                   Day low: {data.dayLow}
                 </h5>
            </div>
           
             
           
        
         ))}
          </marquee> 
       
            
     </div>
    )
}



export default Card;