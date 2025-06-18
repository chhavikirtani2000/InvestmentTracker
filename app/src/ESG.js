import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar';
import {useLocation} from 'react-router-dom';
import { NavLink, Link } from "react-router-dom";

export default function ESG()
{
    const [nvda,setNVDA]=useState([null])
    const [msft,setMSFT]=useState([null])
    const [bby,setBBY]=useState([null])
    const [abde,setABDE]=useState([null])
    const [pool,setPOOL]=useState([null])
    const [crm,setCRM]=useState([null])
    const [cdns,setCDNS]=useState([null])
    const [intu,setINTU]=useState([null])
    const [idxx,setIDXX]=useState([null])
    const [lrcx,setLRCX]=useState([null])

    const handleClick = event => {
        event.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e2d8092cefmshf6ae9713197bf7dp122f10jsnf6db0e6af218',
                'X-RapidAPI-Host': 'esg-risk-ratings-for-stocks.p.rapidapi.com'
            }
        };
        
        fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=NVDA', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setNVDA(response["NVDA"])
            })
            .catch(err => console.error(err));
        
        // fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=MSFT', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setMSFT(response["MSFT"])
        //     })
        //     .catch(err => console.error(err));

        // fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=BBY', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setBBY(response["BBY"])
        //     })
        //     .catch(err => console.error(err));

        // fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=ADBE', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setABDE(response["ADBE"])
        //     })
        //     .catch(err => console.error(err));

        fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=POOL', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setPOOL(response["POOL"])
            })
            .catch(err => console.error(err));

        // fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=CRM', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setNVDA(response["CRM"])
        //     })
        //     .catch(err => console.error(err));

        //     fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=CDNS', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setNVDA(response["CDNS"])
        //     })
        //     .catch(err => console.error(err));

        //     fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=INTU', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setNVDA(response["INTU"])
        //     })
        //     .catch(err => console.error(err));

        //     fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=IDXX', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setNVDA(response["IDXX"])
        //     })
        //     .catch(err => console.error(err));

        //     fetch('https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg?ticker=LRCX', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setNVDA(response["LRCX"])
        //     })
        //     .catch(err => console.error(err));
    
    }  
    const location = useLocation(); 

    return (
        <div style={{backgroundColor:"green", color:"white"}}  className="d-flex flex-row p-3 mb-3">
            {/* <Navbar/> */}
            
            <div className='p-3'>
            <h1 className="text-center fw-bold">ESG Stocks</h1> 
            <p align="justify">Environmental awareness is currently growing among many companies. As a result, a new theme to increase awareness of environment, social and governance (ESG) has begun. Investments in companies that pay more attention to environmental, social, and governance issues have increased as a result of rising environmental concerns, social injustice, and improved disclosure requirements.</p>
            <br></br>
            <p align="justify">ESG stocks, which is slowly gaining traction, are those company stocks that prioritise sustainability and environmental issues along with its return generating potential. . With the least possible harm to the environment, they want to make a profit. These days, an increasing number of businesses include ESG disclosures in their reports to indicate how they have increased public awareness and contributed to societal improvement. Such businesses place a greater emphasis on environmentally friendly practises, reducing their negative effects on biodiversity, etc.</p>
            <br></br>
            <p align="justify">Before purchasing a company's shares, investors typically concentrate on the returns, balance sheets, and profitability of the company. However, when the world's attention turns to problems like climate change, deforestation, carbon emissions, etc., it is urgently necessary to promote social change and provide financial support for these problems.Regulators all over the world are urging businesses to do more to address these issues and to provide better disclosures of their contributions.</p>
            <h4><b>What are the advantages of ESG investing?</b></h4>
            <ol>
                
                <li>ESG investing reduces risk</li>
                <p className="fw-light">Investing in ESG stocks lowers the amount of portfolio risk.</p>
                <li>ESG investing can lead to high returns</li>
                <p className="fw-light">Focusing on ESG stocks increases the ability to earn higher returns on the investment. </p>
                <li>ESG stocks generally have strong leadership </li>
                <p className="fw-light">Companies with strong focus on ESG stocks generally do well in the long-term.</p>
                <li>ESG investing promotes ethical companies</li>
                <p className="fw-light">ESG investing has the ability to promote ethical companies. </p>
            </ol>
            </div>
            <div  className='p-3'>
            <h3>Environmental, Social, and Governance (ESG) SCORE API</h3> 
            <p align="justify">A company’s ESG rating essentially represents its exposure to prolonged governance, social, and environmental risks. These critical factors primarily involve things such as employee safety, compliance, equal pay, anti-fraud policies, inclusion, and how eco-friendly the organization is.Awarding an ESG score to a company gives investors an opportunity to diligently and transparently compare different performance track records between several companies in various industries and sectors.</p> 
            <h4><b>There are three components of an ESG score:</b></h4>
            <ol>
                <li>The Environmental Factor</li>
                <p className="fw-light">This ESG score considers a business’s environmental impact, evaluating the amount of carbon emissions made, the steps taken to reduce their carbon footprint, invest in biodiversity, reduce pollution, and they’re continuous strive to adopt greener technologies.
                </p>
                <li>The Social Factor </li>
                <p className="fw-light">This component considers a company’s openness to investing in a more diversified workplace, whether or not they have teams of motivated and satisfied employees, are engaged in charity, are inclusive, and condemn discrimination.
                </p>
                <li>The Governance Factor</li> 
                <p className="fw-light">This analyses whether or not the company has an independent board, good overall corporate culture, executive pay, solid ethics, are not involved in bribery or corruption, and are advocates of transparency.
                </p> 
            </ol>

            <h4>ESG Scores of current 5 best ESG stocks</h4>
            <Table bordered >
            <thead style={{color:"white"}}>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Controversy Score</th>
                <th>Environment Score</th>
                <th>Governance Score</th>
                <th>Social Score</th>
                <th>Total ESG Score</th>
                </tr>
            </thead>
            <tbody style={{color:"white"}}>
                <tr>
                <td>1</td>
                <td>Nvidia<br/>(NASDAQ:NVDA)</td>
                <td>C</td>
                <td>A</td>
                <td>C</td>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Microsoft<br/>(NASDAQ:MSFT)</td>
                <td>C</td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Best Buy<br/>(NYSE:BBY)</td>
                <td>B</td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Adobe<br/>(NASDAQ:ADBE)</td>
                <td>A</td>
                <td>A</td>
                <td>B</td>
                <td>B</td>
                <td>B</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Pool<br/>(NASDAQ:POOL)</td>
                <td>C</td>
                <td>A</td>
                <td>C</td>
                <td>C</td>
                <td>B</td>
                </tr>
                {/*<tr>
                <td>6</td>
                <td>Salesforce (NYSE:CRM)</td>
                <td>C</td>
                <td>A</td>
                <td>C</td>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>7</td>
                <td>Cadence (NASDAQ:CDNS)</td>
                <td>C</td>
                <td>A</td>
                <td>C</td>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>8</td>
                <td>Intuit (NASDAQ:INTU)</td>
                <td>C</td>
                <td>A</td>
                <td>C</td>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>9</td>
                <td>Idexx Laboratories (NASDAQ:IDXX)</td>
                <td>C</td>
                <td>A</td>
                <td>C</td>
                <td>C</td>
                <td>B</td>
                </tr>
                <tr>
                <td>10</td>
                <td>Lam Research (NASDAQ:LRCX)</td>
                <td>C</td>
                <td>A</td>
                <td>C</td>
                <td>C</td>
                <td>B</td>
                </tr> */}
            </tbody>
            </Table>
            </div>
        </div>
    )
}