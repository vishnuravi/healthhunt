import React from 'react';
import Products from "./Products";
import Sidebar from "./Sidebar";
import ComingSoon from "./ComingSoon";
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
                                <ComingSoon />
                            </Tab>
                            <Tab eventKey="data" title="Data &amp; Interoperability">
                                <ComingSoon />
                            </Tab>
                            <Tab eventKey="getinvolved" title="Get Involved">
                                <ComingSoon />
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col-4 d-none d-md-block">
                        <h4 className="mt-4">Our innovators</h4>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;