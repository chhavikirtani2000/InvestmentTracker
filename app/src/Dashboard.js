import React from 'react'
import axios from 'axios';
import styled from "styled-components";
import Card from "./Card";
import Navbar from './Navbar';
import { useState, useEffect, useRef } from "react"
import {useLocation} from 'react-router-dom';


function Dashboard(props) {
    const location = useLocation();
    const [tickers, setTickers] = useState(props.input);
    const [lastRefreshedAt, setLastRefreshedAt] = useState([]);
    const [lastRefreshedAtValue, setLastRefreshedAtValue] = useState([]);
    const [userStocks, setUserStocks] = useState([[]]);
    useEffect(() => {
        const interval = setInterval(() => {
          getUserStocks();
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7917f64fa4mshae5c449345ddc02p116c16jsnb7e6fc53c4b5',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };
    function getUserStocks()
    {
        axios.get("http://localhost:8080/api/"+location.state.id)
            .then((res)=>{
                // stockJson={};
                // for(let i=0;i<res.data.stockList.length;i++)
                // {
                //     let item={'name':res.data.stockList[i][0],
                //                 'price':res.data.stockList[i][1],
                //                 'quantity':res.data.stockList[i][2]};
                //     
                // }
                if(res.data.stockList==null)
                    setUserStocks([]);
                else
                    setUserStocks(res.data.stockList);
            }) 
            
        //console.log(userStocks);
    }
    var totalInvestment=0;
    var numInv=0;
    for(let i=0;i<userStocks.length;i++)
    {
      console.log(userStocks[i][0]);
      if(userStocks[i][1]!='')
        totalInvestment+=(parseFloat(userStocks[i][1])*parseInt(userStocks[i][2]));
        totalInvestment = Math.round(totalInvestment*100)/100;
      numInv+=1;
    }
    function getPrice(stock)
    {
        // console.log(stock.toUpperCase());
    // fetch(`https://alpha-vantage.p.rapidapi.com/query?interval=1min&function=TIME_SERIES_INTRADAY&symbol=${stock.toUpperCase()}&datatype=json&output_size=compact`, options)
    //     .then(response => response.json())
    //     .then(response => {
        
    //         //console.log(response['Meta Data']["3. Last Refreshed"])
    //         //console.log(response['Time Series (1min)'])
            
            
    //         //setLastRefreshedAt(response['Meta Data']["3. Last Refreshed"]);
    //         setLastRefreshedAtValue(response['Time Series (1min)']);
        
        
        
    //     })
    //     .catch(err => console.error(err));
        //console.log(lastRefreshedAtValue);
        return '2';
        
    }
    const stockslist=userStocks.map(stocks=>{
          let p=getPrice(stocks[0]);
          return(
                <tr>
                    <td style={{border: '1px solid white', padding: '5px'}}>{stocks[0]}</td>
                    <td style={{border: '1px solid white', padding: '5px'}}>{stocks[1]}</td>
                    <td style={{border: '1px solid white', padding: '5px'}}>{stocks[2]}</td>
                    {/* <td style={{border: '1px solid white', padding: '5px'}}>{stocks[1]}</td> */}
                </tr>
          )          
    })

    return(
        <div>
            <Navbar userId={location.state.id}/>
            {/* <h2 style={{color:'white'}}>{location.state.id}</h2> */}
            
            {/* <button>here</button> */}
            <Card />
            <h3 style={{color:'white', marginLeft:'330px', fontFamily:'Courier New'}}>Investment Return Analytics</h3>
            <div style={{ width: "1000px", overflow:'hidden', whiteSpace:'nowrap', top:'0', marginLeft:'100px', marginBottom:'20px' }}>
                <div style={{ overflow:'hidden', whiteSpace:'nowrap'}}>
            {/* <div className="row row-sm" > */}
              <div className="card card-sm">
                <div>
                  {" "}
                  {" "}
                  Total Invested Amount
                </div>
                <div className="card-val">{totalInvestment}</div>
              </div>
            {/* </div> */}
            {/* <div className="row row-sm"> */}
              <div className="card card-sm">
                <div>Number of Investment</div>
                <div className="card-val">{numInv}</div>
              </div>
            {/* </div> */}
            {/* <div className="row row-sm"> */}
              <div className="card card-sm">
                Rate of Return
                <div className="card-val">0.05% ↓</div>
              </div>
            {/* </div> */}
          </div>

        </div>

            {/* <div className="App" style={{color:'white', align:'center', marginLeft:'500px'}}>
                <h2 style={{fontFamily:'Courier New', marginLeft:'90px'}}>User Stocks</h2>
            <table style={{align:'center', borderCollapse: 'collapse',
                margin: '25px 0',
                fontSize: '0.9em',
                fontFamily: 'sans-serif',
                minWidth: '400px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'}}>
                <tr>
                <th style={{border: '1px solid white', padding: '5px'}}>Name</th>
                <th style={{border: '1px solid white', padding: '5px'}}>Buy Price</th>
                <th style={{border: '1px solid white', padding: '5px'}}>Quantity</th>
                
                </tr>
                {stockslist}
            </table>
            </div> */}
            
            {/* <Container>
            
             <h2 style={{color:'white'}}>{props.id}</h2>
             <Card />
           
             
     
             <BgImage/>
     
            </Container> */}
        </div>
     
         
        // <div style={{backgroundColor:'black', height:'100vh', width:'100%', position: 'absolute',
        // top: '0', left: '0', right: '0', zIndex: '9'}}>
        //     <h1 style={{color:'white'}}>welcome</h1>
        //     <h2 style={{color:'white'}}>{props.id}</h2>
       
    )
}

export default Dashboard