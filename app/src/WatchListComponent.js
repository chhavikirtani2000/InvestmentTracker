import React from 'react'
import axios from 'axios';
import { useState, useEffect, useRef } from "react"
import CreateCardButtonOnClick from "./CreateCardButtonOnClick";
import "./WatchlistComponent.css";



function WatchListComponent(props) {
    const [state2, setState2]= useState({value:'',sourceData:[]});
    const [state3, setState3]= useState({value:'',searchData:[]});
    const [stockState, setStockState] = useState([{ stock: "" }]);
    const [state, setState] = useState("");
    const [prices, setPrices] = useState([]);
    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [watchList, setWatchList] = useState([[]]);
    const [tickers, setTickers] = useState(props.input);
    const [lastRefreshedAt, setLastRefreshedAt] = useState([]);
    const [lastRefreshedAtValue, setLastRefreshedAtValue] = useState([]);
    

  
    function handleChange1(event) {
        //setStockState(...stockState, {stock:""});
        setStockState([...stockState, { stock: "" }]);
    };
    let stockPrices=[]

    var options = {
      method: 'GET',
      url: 'https://latest-stock-price.p.rapidapi.com/price',
      params: {Indices: 'NIFTY 50'},
      headers: {
      'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
      'x-rapidapi-key': '8bd87d9e56mshf4817b084d7796fp192187jsn9533e1f6b8de'
      }
      };
      //var dataFromResponse=[]
      
      useEffect(() => {
        axios.request(options).then(function (response) {
          var dataFromResponse = response.data;
          setPrices(dataFromResponse);
          stockPrices=dataFromResponse;
          // console.log(dataFromResponse);
          }).catch(err => console.log(err));
    }, [])
    //console.log(dataFromResponse);
    // axios.request(options).then(function (response) {
    //     var dataFromResponse = response.data;
    //     stockPrices=dataFromResponse;
    //     //console.log(dataFromResponse);
    //     })
    //     .catch(err => console.log(err));
        
    //     );
        
      
  
  // const [tickers, setTickers] = useState(props.input);
  // const [prices, setPrices] = useState([]);
  // const [x, setX] = useState([]);
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': '7917f64fa4mshae5c449345ddc02p116c16jsnb7e6fc53c4b5',
  //         'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  //     }
  // };
  
  // fetch(`https://alpha-vantage.p.rapidapi.com/query?interval=1min&function=TIME_SERIES_INTRADAY&symbol=${tickers}&datatype=json&output_size=compact`, options)
  //     .then(response => response.json())
  //     .then(response => {
  //         console.log(response['Meta Data'])
  //         console.log(response['Time Series (1min)'])
  //         setPrices(response['Meta Data']);
  //         setX(response['Time Series (1min)']);  
  //     })
  //     .catch(err => console.error(err));

    function submit(evenet,id){
        //id=2;
        //console.log(id)
        //console.log(state);
        evenet.preventDefault();
        let tempList=watchList;
        //console.log(watchList);

        for(let i=0;i<tempList.length;i++)
        {
          if(props.items[0]==tempList[i][0])
          {
              tempList[i].push(state);
          }
        }
        console.log(tempList);
        let listStocks=[];
        let stockName="";
        // axios.get("http://localhost:8080/api/"+id)
        // .then((res)=>{
        //     console.log(res.data.stocks);
        //     listStocks=res.data.stocks;
        //     stockName=res.data.name;
        // // this.setState({
        // //     id:res.data.id,
        // //     name:res.data.name,
        // //     email:res.data.email,
        // //     password:res.data.password
        // // });
        // }) 
        
        listStocks.push(state);
        axios.put("http://localhost:8080/api/stocks/",{
        id:props.userId,
        name:"xyz2",
        email:"abc",
        password:"abc",
        marketwatchList:tempList
      }).then(()=>{
      })
        
    //     axios.put("http://localhost:8080/api/",{
    //     id:id,
    //     name:"xyz",
    //     email:"abc",
    //     password:"abc",
    //     stocks:listStocks
    //   }).then(()=>{
    //   })
        setState('');
      }

    const searchStocks = (
        <input
          type="text"
          placeholder="Search stocks2"
          style={{width:"100%", marginBottom:"10px", marginTop:"10px"}}
          
        />
      );
    let flag=0;
    useEffect(() => {
        const interval = setInterval(() => {
            handleChange2();
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    function handleChange2() {
        
        axios.get("http://localhost:8080/api/"+props.userId)
            .then((res)=>{
                // console.log('**********');
                // console.log(res.data);
              
                let watches=res.data.marketwatchList;
                setWatchList(watches);
                let stocks=[]
                for(let i=0;i<watches.length;i++)
                {
                  if(props.items[0]==watches[i][0])
                  {
                     //console.log('here');
                      for(let j=1;j<watches[i].length;j++)
                      {
                        stocks.push(watches[i][j]);
                      }
                      break;
                  }
                }

                setState2({
                  sourceData:stocks,
                });


                // if(res.data.stocks==null)
                // {
                //     setState2({
                //         sourceData:[],
                //     });
                // }

                // incorrect
                // else if(state3.searchData.length>0)
                // {
                //     console.log(state3.searchData);
                //     setState2({
                //         sourceData:state3.searchData,
                //     });
                // }


                // else
                // {
                //     //console.log(state3.searchData.length);
                //     setState2({
                //         sourceData:res.data.stocks,
                //     });
                // }
            }) 
        
    };
    function filterList(e) {
        flag=1;
        
        let updatedList = state2.sourceData.filter(item => {
          return (
            item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
          );
        });
        if(e.target.value=='')
            updatedList=[]
        //setState2({ sourceData: updatedList });
        console.log(updatedList);
        setState3({ searchData: updatedList });
    
      };
    const searchBox = (
        <input
          type="text"
          placeholder="Search stocks"
          onClick={handleChange2}
          onChange={filterList}
          style={{width:"100%", marginBottom:"10px", marginTop:"10px"}}
        />
      );
    function searchStockPrice(stock)
    {
      let priceSearched='NOT FOUND';
      let closeSearched='NOT FOUND';
      //console.log(prices);
      for(let i=0;i<prices.length;i++)
      {
        //console.log(stock.toLowerCase());
        //console.log(prices[i].symbol.toLowerCase());
        if(stock.toLowerCase() == prices[i].symbol.toLowerCase())
        {
          //console.log('hereeee');
            priceSearched=prices[i].open;
            closeSearched=prices[i].lastPrice;
            break;
        }
      }

      return [priceSearched, closeSearched];
    }
    const [show, setShow] = useState(false);
    const target = useRef(null);
    //console.log(state2.sourceData);
    const selectBox = state2.sourceData.map(option =>{ 
      let p = searchStockPrice(option)[0];
      let c = searchStockPrice(option)[1];
      //console.log(option);
      return (
        <li key={option} style={{color:'white', marginTop:'0', marginBottom:'0'}} action ref={target} onClick={() => setShow(!show)}> 
          <CreateCardButtonOnClick stockname={option} userId={props.userId}/>
          {/* <h8 style={{fontStyle:'italic'}}>
          <br></br>
          open price {p}</h8> <br></br><h8 style={{fontStyle:'italic'}}>last price {c}</h8> */}
          </li>
      )});

    
    const resultBox = state3.searchData.map((option, index) => {
        //console.log(index);
        if(index==0)
        return (
            <h6 style={{color:'white', backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
            <CreateCardButtonOnClick stockname={option} userId={props.userId}/></h6>
            
            // <li key={option} style={{color:'white'}}>{option} <button style={{backgroundColor:'black', color:'red', fontStyle:'italic'}}>Delete</button></li>
      )});
    //console.log(props.items);
    
    
    return(
        <div className='col-md-4' >
        <div class="card cardWC" style={{marginBottom:"10px",width:'100%'}}>
        <div class="card-body">
        <h5 class="card-title" style={{color:'white', fontFamily:'Consolas'}}>{props.items[0]}</h5>
        {/* <h2 style={{color:'white'}}>{props.id}</h2> */}
        {/* <button onClick={handleChange2} style={{marginTop:'10', paddingBottom:'10'}}>Show Stocks</button> */}
        <button className="buttonWC" onClick={handleChange1} style={{marginTop:'10px', paddingBottom:'10px'}}>Add Stocks</button>
        {/* {stockState.length===2 && (<input
          type="text"
          placeholder="Search stocks2"
          style={{width:"100%", marginBottom:"10px", marginTop:"10px"}}
          
        />)} */}
        {stockState.length === 2 && (
                <div><input
                type="text"
                placeholder="Search stocks to add"
                value={state} onChange={(e)=>setState(e.target.value)}
                style={{width:"100%", marginBottom:"10px", marginTop:"10px"}}
              /> <button className="buttonWC" onClick={(e)=>submit(e,props.id)}>Add</button></div>
              )}
        {/* {stockState.map((s)=>  
            (<input
          type="text"
          placeholder="Search stocks2"
          style={{width:"100%", marginBottom:"10px", marginTop:"10px"}}
          
        />))} */}
        {/* {searchStocks} */}


        {searchBox}
        {resultBox}
        <div style={{height:"200px", overflow: 'scroll'}}>
        {selectBox && <ul>{selectBox}</ul>}
        </div>
        {/* {searchBox}
        {resultBox}
        <div style={{height:"200px", overflow: 'scroll'}}>
        {selectBox && <ul>{selectBox}</ul>}
        
        </div> */}
        
        </div>
        </div>
        </div>
    )
}

export default WatchListComponent