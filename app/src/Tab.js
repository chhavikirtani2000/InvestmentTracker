import React, { useState, useEffect } from "react";
import "./cards2.css";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import Navbar from "./Navbar";

const Tab = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [stockData, setStockData] = useState(null);
  const location = useLocation();
  const [userStocks, setUserStocks] = useState([[]]);
  useEffect(() => {
    const interval = setInterval(() => {
      getUserStocks();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
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
    for(let i=0;i<userStocks.length;i++)
    {
      console.log(userStocks[i][0]);
      if(userStocks[i][1]!='')
        totalInvestment+=(parseFloat(userStocks[i][1])*parseInt(userStocks[i][2]));
        totalInvestment = Math.round(totalInvestment*100)/100;
    }
    
    const stockslist=userStocks.map(stocks=>{
      //let p=getPrice(stocks[0]);
      //console.log(parseFloat(stocks[1]));
      
      return(
            <tr>
                <td style={{border: '1px solid white', padding: '5px'}}>{stocks[0]}</td>
                <td style={{border: '1px solid white', padding: '5px'}}>{stocks[1]}</td>
                <td style={{border: '1px solid white', padding: '5px'}}>{stocks[2]}</td>
                {/* <td style={{border: '1px solid white', padding: '5px'}}>{stocks[1]}</td> */}
            </tr>
      )          
})
console.log('investmenr '+totalInvestment);
  
  const getPortfolio = async () => {
    // const { data } = await axios.get("http://localhost:8080/api/"+location.state.id);
    let data=null
    axios.get("http://localhost:8080/api/"+location.state.id)
            .then((res)=>{
              //console.log(res);
                data=res.data.portfolios;
            }) 
    //setPortfolio(data);
    console.log(data);
    if(data==null)
    {
      console.log('here');
      setPortfolio([{'stocksymbol': 'IBM', 'stockPrice':20, 'quantity': 2}]);
    }
    console.log(portfolio);
  };
  
  const getStockData = async () => {
    
    // let tickers='IBM';
    // fetch(`https://alpha-vantage.p.rapidapi.com/query?interval=1min&function=TIME_SERIES_INTRADAY&symbol=IBM&datatype=json&output_size=compact`, options)
    //   .then(response => response.json())
    //   .then(response => {
      
    //       console.log(response['Meta Data']["3. Last Refreshed"])
    //       console.log(response['Time Series (1min)'])
          
    //       // setLastRefreshedAt(response['Meta Data']["3. Last Refreshed"]);
    //       // setLastRefreshedAtValue(response['Time Series (1min)']);
    //       setStockData(response['Time Series (1min)']);
    //       console.log(stockData);
    //   })
    //   .catch(err => console.error(err));
      // const { data } = await axios.get(
      //   "https://stock-prices2.p.rapidapi.com/api/v1/resources/stock-prices/1d?ticker=IBM",
      //   options
      // );

      //const d = new Date();
      //let text = d.toISOString().split("T")[0];
      //setStockData(data[text]);
      
  };
  useEffect(() => {
    getPortfolio();
    getStockData();
  }, []);

  // if (!portfolio) return <div>No Record Found</div>;

  return (
    /* <div className="row bg_image"
      > */
    <div className="row" >
      <Navbar userId={location.state.id}/>
      <div className="col-5"
        
      >
        {/* <button type="button" className="btn btn-primary">
          New Portfolio
        </button> */}
        <div className="header">
          <h2 style={{color:"white"}}>Portfolio1</h2>
          <p style={{color:"white"}}>
            The stock portfolio refers to the compilation of individual stocks
            that you own. Complete investment portfolios include assets from
            various classes, such as stocks, bonds and cash reserves.
          </p>
          
        </div>
        
      </div>
      <div className="row">
      <div className="col">
        <div style={{textAlign:'center', fontWeight:'bold', width:'500px', overflow:'hidden', backgroundImage:'linear-gradient(rgba(165, 113, 207),rgba(76, 23, 119),rgb(35, 11, 55,.35),rgba(7, 0, 13))', paddingBottom:'0px', paddingTop:'0px'}}>
        <h2 style={{color:"white"}}>Total Amount Invested: </h2>
        <h3 style={{color:"white"}}>$ {totalInvestment}</h3>
        </div>
      </div>
      
      {/* <div className="col-7"> */}
            {/* <table
              className="table tt table-stripped-columns table-hover  table-light"
              style={{
              
                width: "70%",
                marginTop: "60px",
                color: "plum",
                marginRight: "20px",
              }}
            >
              <thead>
                <tr style={{ fontSize: "15px", color: "purple" }}>
                  <th>stocksymbol</th>
                  <th>stockprice</th>
                  <th>stock Quantity</th>
                  <th>stock closing price</th>
                </tr>
              </thead>

              <tbody style={{ height: "1px" }}>
                {portfolio.map((emp) => (
                  <tr key={emp.stocksymbol}>
                    <td>{emp.stocksymbol}</td>
                    <td>{emp.stockPrice}</td>
                    <td>{emp.quantity}</td>
                    <td>{stockData?.Close}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          {/* </div> */}
          <div className="col" style={{color:'white', fontSize:'30px', width:'550px', backgroundImage:'linear-gradient(rgba(165, 113, 207),rgba(76, 23, 119),rgb(35, 11, 55,.35),rgba(7, 0, 13))', paddingBottom:'10px'}}>
                
            <table style={{ borderCollapse: 'collapse',
                margin: '25px 0',
                fontSize: '0.9em',
                fontFamily: 'sans-serif',
                minWidth: '400px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
                marginLeft:'100px'
               }}>
                <tr><th colspan="3" style={{fontSize:'30px', color:'white', textAlign:'center', paddingTop:'0px', padding: '5px', marginLeft:'50px', border: '1px solid white'}}>User Stocks</th></tr>
                <tr>
                <th style={{border: '1px solid white', padding: '5px'}}>Name</th>
                <th style={{border: '1px solid white', padding: '5px'}}>Buy Price</th>
                <th style={{border: '1px solid white', padding: '5px'}}>Quantity</th>
                {/* <th style={{border: '1px solid white', padding: '5px'}}>Current Price</th> */}
                </tr>
                {stockslist}
            </table>
            </div>
            </div>
      <div></div>
    </div>
  );
};
export default Tab;
