import React from 'react';
import Products from "./Products";
import Sidebar from "./Sidebar";
import GetInvolved from "./GetInvolved";
import Design from "./Design";
import Data from "./Data";
import Footer from "./Footer";
import { Tabs, Tab } from 'react-bootstrap';

import Nav from "./Nav";

const Home = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Tabs defaultActiveKey="innovations" className="mt-4">
                            <Tab eventKey="innovations" title="Innovations">
                                <Products />
                            </Tab>
                            <Tab eventKey="design" title="Design">
                                <Design />
                            </Tab>
                            <Tab eventKey="data" title="Data &amp; Interoperability" disabled>
                                <Data />
                            </Tab>
                            <Tab eventKey="getinvolved" title="Get Involved">
                                <GetInvolved />
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col-4 d-none d-md-block">
                        <h4 className="mt-4">Our innovators</h4>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;