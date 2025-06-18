import React, { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function DateTime(props)
{

    const [tickers, setTickers] = useState(props.input);
    const [lastRefreshedAt, setLastRefreshedAt] = useState([]);
    const [lastRefreshedAtValue, setLastRefreshedAtValue] = useState([]);
    
    const [isShown1, setIsShown1] = useState(false);
    const showData = async(e) => {
         e.preventDefault();
         setIsShown1(current => !current);

        // const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${tickers}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`
        // const url=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${tickers}&interval=5min&outputsize=full&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`
        // const data = await axios.get(url);
        //     try{
        //         if(data) {
        //             setPrices(data.data['Meta Data']);
        //             setX(data.data['Time Series (Daily)']);
        //         }

        //     } catch(err) {
        //         console.log(err)
        //     }
   

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7917f64fa4mshae5c449345ddc02p116c16jsnb7e6fc53c4b5',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        };
    
        fetch(`https://alpha-vantage.p.rapidapi.com/query?interval=1min&function=TIME_SERIES_INTRADAY&symbol=${tickers}&datatype=json&output_size=compact`, options)
            .then(response => response.json())
            .then(response => {
            
                console.log(response['Meta Data']["3. Last Refreshed"])
                console.log(response['Time Series (1min)'])
                
                
                setLastRefreshedAt(response['Meta Data']["3. Last Refreshed"]);
                setLastRefreshedAtValue(response['Time Series (1min)']);
            
            
            
            })
            .catch(err => console.error(err));

    }
    
    const [open, setOpen] = useState("");
    const [close, setClose] = useState("");
    const [high, setHigh] = useState("");
    const [low,setLow]=useState("");
    const [volume,setVolume]=useState("");

    const [isShown, setIsShown] = useState(false);
    
    const handleClick = event => {
        event.preventDefault();
        setIsShown(current => !current);
        console.log(lastRefreshedAtValue[lastRefreshedAt])
        setOpen(lastRefreshedAtValue[lastRefreshedAt]["1. open"])
        setClose(lastRefreshedAtValue[lastRefreshedAt]["4. close"])
        setHigh(lastRefreshedAtValue[lastRefreshedAt]["2. high"])
        setLow(lastRefreshedAtValue[lastRefreshedAt]["3. low"])
        setVolume(lastRefreshedAtValue[lastRefreshedAt]["5. volume"])
         
    };

     
    props.Changedata(open);

    return (
        <div>
           
            <h6 className="d-flex align-items-center justify-content-center">Live Stock Price</h6>
            <Button variant="outline-info" type="submit" onClick={showData}>Show last fetched time</Button>
            <br/>
            { isShown1 && (
                <div className="mt-2 d-flex align-items-center justify-content-center"> 
                    <h6 style={{color:'white'}}>Stock price is fetched at time: {lastRefreshedAt}</h6> 
                </div>
             )}
                
             <br/>  
            <Button variant="outline-info" type="submit" onClick={handleClick}>Show Market</Button> 
         
            { isShown && (
                <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-row mb-3 center" style={{color:'white'}}>
                        <div className="p-2 center"> <p><b>Open</b></p>  <p>{open} </p></div>
                        <div className="p-2 center"> <p><b>High</b></p>  <p>{high} </p></div>
                        <div className="p-2 center"> <p><b>Low</b></p>  <p>{low} </p></div>
                        <div className="p-2 center"> <p><b>Close</b></p>  <p>{close} </p></div>
                        <div className="p-2 center"> <p><b>Volume</b></p>  <p>{volume} </p></div>
                    </div>
                </div>
             )} 
            
        
        </div>
    )
    

}