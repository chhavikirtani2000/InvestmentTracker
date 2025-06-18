import React from 'react'
import "./Content.css";
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Content1() {
    return (
        <div>
            <Header/>
            <div className="container text-center">
                <div className="row" style={{ paddingTop: '50px', paddingLeft: '40px' }}>
                    <div className="col">
                        <div className="d-flex flex-column">
                            <div className="p-2">
                                <h1 className="hC_class">
                                    Become a Better Investor </h1>
                            </div>
                            <div className="p-2">
                                <p className="pC_class">A Investment Tracker with powerful portfolio tracking
                                    software that lets you check your investments in one place.</p>
                            </div>
                            <div className="p-2" style={{ margin: 'auto' }} id="welcome_container">
                                <Link to="/login">
                                <button data-testid="btnSubmit" className="btn btn-secondary buttonC logC">Get started</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="divC_class" style={{ width: '530px' }}>
                                <div className="d-flex flex-column">
                                    <div className="p-2">
                                        <h1 className="hC_class">
                                            Track and manage your portfolio</h1>
                                    </div>
                                    <div className="p-2">
                                        <p className="pC_class">Your assets at a glance.</p>
                                    </div>
                                    <div className="p-2">
                                        <p className="pC_class">Keep up to date with your stocks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divC_class" style={{ width: '530px' }}>
                            <div className="col">
                                <div className="d-flex flex-column">
                                    <div className="p-2">
                                        <h1 className="hC_class">
                                            Save Time and Money</h1>
                                    </div>
                                    <div className="p-2">
                                        <p className="pC_class">Never miss an important market Development</p>
                                    </div>
                                    <div className="p-2">
                                        <p className="pC_class">Manage all your financial assets from one place
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row" style={{ paddingTop: '200px' }}>
                    <h1 className="hC_class">
                        Learn and Invest Smart </h1>
                </div>
                <div className="row" style={{ paddingBottom: '200px' }}>
                    <div className="col">
                        <div className="divC_class" style={{ width: '530px' }}>
                            <div className="d-flex flex-column">
                                <div className="p-2">
                                    <h1 className="hC_class">
                                        FTSE Stocks</h1>
                                </div>
                                <div className="p-2">
                                    <p className="pC_class">The Financial Times Stock Exchange 100 Index, also called the FTSE 100 Index, FTSE 100, FTSE, or, informally, the "Footsie", is a share index of the 100 companies listed on the London Stock Exchange with the highest market capitalisation..</p>
                                </div>
                                <div className="p-2">
                                    <p className="pC_class">Know more</p>
                                    <a href="https://en.wikipedia.org/wiki/FTSE_100_Index" target="_blank" rel="noopener noreferrer">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divC_class" style={{ width: '530px' }}>
                        <div className="col">
                            <div className="d-flex flex-column">
                                <div className="p-2">
                                    <h1 className="hC_class">
                                        ESG Stocks</h1>
                                </div>
                                <div className="p-2">
                                    <p className="pC_class">ESG stocks are company stocks that focus on sustainability and environmental concerns rather than just considering its bottom line. They aim to profit but with minimal impact on the environment.ESG first came into focus in the United Nations Global Compact report.</p>
                                </div>
                                <div className="p-2">
                                    <p className="pC_class">Know more
                                    </p>
                                    <a href="https://en.wikipedia.org/wiki/Environmental,_social,_and_corporate_governance" target="_blank" rel="noopener noreferrer">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
