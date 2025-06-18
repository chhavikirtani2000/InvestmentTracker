import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Overlay from 'react-bootstrap/Overlay';
import DateTime from './DateTime';
import axios from "axios";
import './CreateCardButtonOnClick.css';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      users: [],
      id: 0,
      stockName: '',
      price: '',
      quantity: ''
    }
  }
  componentDidMount() {
    // axios.get("http://localhost:8080/api/")
    //   .then((res) => {
    //     this.setState({
    //       users: res.data,
    //       id: 0,
    //       stockName: '',
    //       price: '',
    //       quantity: ''
    //     })
    //   })
  }
  submit(evenet, id) {
    //console.log(this.props.userId)
    if(this.props.operation=='buy')
    {
    evenet.preventDefault();
    console.log(this.props.price);
    let newstock=[[this.props.stockName, this.props.price, this.state.quantity]];
    console.log(newstock);
    axios.put("http://localhost:8080/api/userstocks/", {
      id:this.props.userId,
      name:"xyz",
      email:"abc",
      password:"abc",
      stockList:newstock
      }).then(() => {
        // this.componentDidMount();
      })

      this.setState({quantity:''});
    }
    else
    {
      evenet.preventDefault();
      console.log(this.props.price);
      let newstock=[[this.props.stockName, this.props.price, this.state.quantity]];
      console.log(newstock);
      axios.put("http://localhost:8080/api/userstocksdelete/", {
        id:this.props.userId,
        name:"xyz",
        email:"abc",
        password:"abc",
        stockList:newstock
        }).then(() => {
          // this.componentDidMount();
        })

        this.setState({quantity:''});
    }


    // if (id === 0) {
    //   axios.post("http://localhost:8080/api/", {
    //     stockName: this.props.stockName,
    //     price: this.props.price,
    //     quantity: this.state.quantity
    //   }).then(() => {
    //     this.componentDidMount();
    //   })
    // } else {
    //   axios.put("http://localhost:8080/api/", {
    //     id: id,
    //     stockName: this.props.stockName,
    //     price: this.props.price,
    //     quantity: this.state.quantity
    //   }).then(() => {
    //     this.componentDidMount();
    //   })
    // }
  }
  // delete(id) {
  //   axios.delete("http://localhost:8080/api/" + id)
  //     .then(() => {
  //       this.componentDidMount();
  //     })
  // }
  // edit(id) {
  //   axios.get("http://localhost:8080/api/" + id)
  //     .then((res) => {
  //       this.setState({
  //         id: res.data.id,
  //         stockName: this.props.stockName,
  //         price: this.props.price,
  //         quantity: res.data.quantity
  //       });
  //     })
  // }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <form onSubmit={(e) => this.submit(e, this.state.id)}>
                <div className="input-field col s12">
                  {/* <i className="material-icons prefix">vpn_key</i> */}
                  <input value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} type="text" id="autocomplete-input" className="autocomplete" />
                  <label htmlFor="autocomplete-input" style={{color:'white'}}>Enter Units</label>
                </div>
                <button  className="buttonCC1"  type="submit" name="action">
                  <i className="material-icons right">send</i>
                </button>
              </form>
            </div>
            {/* <div className="col s6">
          <table>
          <thead>
            <tr>
                <th>Quantity</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
          </thead>

        <tbody>
            {
              this.state.users.map(user =>
                  <tr key={user.id}>
                      <td>{user.password}</td>
                      <td>
                        <button onClick={(e)=>this.edit(user.id)} className="btn waves-effect waves-light" type="submit" name="action">
                          <i className="material-icons ">edit</i>
                        </button>       
                      </td>
                      <td>
                        <button onClick={(e)=>this.delete(user.id)} className="btn waves-effect waves-light " type="submit" name="action">
                          <i className="material-icons ">delete</i>
                        </button>       
                      </td>
                  </tr>
                )
            }  
        </tbody>
      </table>
    </div> */}
          </div>
        </div>
      </>
    );
  }
}




export default function CreateCardButtonOnClick(props) {


  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [name, setName] = useState(props.stockname);

  const [boughtPrice, setBoughtPrice] = useState("");

  const stocks = require('stock-ticker-symbol');
  const [company, setCompany] = useState(stocks.lookup(name)); // Apple Inc.;
  const [userId, setUserId] = useState(props.userId);
  //console.log(props.userId);
  return (
    <>

      <Button variant="light" size="sm" ref={target} onClick={() => setShow(!show)}
      style={{backgroundColor:'transparent', color:'white', borderRadius:'0', borderColor:'transparent', paddingLeft:'0', fontSize:'20px',
      top:'0'}}>
        {props.stockname}
      </Button>


      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              width: 480,
              position: 'relative',
              backgroundImage:'linear-gradient(rgba(76, 23, 119),rgb(35, 11, 55),rgba(7, 0, 13))',
              padding: '10px',
              margin: '50px 400px',
              color: 'white',
              borderRadius: 3,
              borderColor:'white',
              borderWidth:'2px',
              borderStyle:'solid',
              ...props.style,
            }}
          >

            <h4>{name}</h4>
            <hr />
            <p>{company}</p>
            {/* <p className="ml-5">+0.75 (+0.03%)</p> */}
            <hr />
            <Table>
              <tr>
                <td>
                <h6 style={{color:'white',fontWeight:'bold'}}>Buy</h6>
                  {/* {console.log(userId)} */}
                  <Sample stockName={name} price={boughtPrice} userId={userId} operation='buy'/>
                  {/* <Form>
                        <Form.Group className="mb-3" controlId="formBasicBuyStock" >
                            <Form.Label visuallyHidden>Buy</Form.Label>
                            <Form.Control type="text" placeholder="Buy Quantity" />
                        </Form.Group>
                          
                        <Button variant="primary" type="submit">Buy</Button>    
                       
                    </Form> */}
                </td>
                <td>
                  {/* <Form>   
                        <Form.Group className="mb-3" controlId="formBasicSellStock">
                            <Form.Label visuallyHidden>Sell</Form.Label>
                            <Form.Control type="text" placeholder="Sell Quantity" />
                        </Form.Group>
                           
                        <Button variant="danger" type="submit">Sell</Button>
                    </Form> */}
                  <h6 style={{color:'white',fontWeight:'bold'}}>Sell</h6>
                  <Sample stockName={name} price={boughtPrice} userId={userId} operation='sell'/>
                </td>
              </tr>
            </Table>
            <hr />

            <DateTime input={name} Changedata={(boughtPrice) => setBoughtPrice(boughtPrice)} />
          </div>
        )}
      </Overlay>
    </>
  );
}

