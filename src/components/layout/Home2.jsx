import React from "react";
import { useNavigate } from "react-router-dom";
import LocPic from "../../assets/img/Loc.svg";
import LockPic from "../../assets/img/Lock.svg";
import MileagePic from "../../assets/img/Mileage.svg";
import Header from "./header/Header";
import Footer from "./footer/Footer";


function Home2() {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <div class="row justify-content-md-center m-0">
                <div class="col col-lg-2">
                    <section className="my-3">
                        <div className="container-fluid">
                            <div className="SubscriptionSection border-0">
                                <div className="subHeadSide mt-4">
                                    <h5>Location</h5>
                                    <h5>About</h5>
                                    <h5>Features</h5>
                                    <h5>Rules</h5>
                                    <h5>Pricing</h5>
                                    <h5>Promotion</h5>
                                    <h5>Pictures</h5>
                                    <h5>Insurance</h5>
                                </div>
                                <div className="subHeadSide">
                                    <h4>Subscription</h4>
                                </div>
                                <div className="subHeadSide">
                                    <h4 className="disableText">Device</h4>
                                </div>
                                <div className="subHeadSide">
                                    <h4 className="disableText">Easy Access</h4>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-md-auto">


                    <section className="my-3">
                        <div className="container-fluid">
                            <div className="SubscriptionSection">

                                <div className="subHead">
                                    <h2>Device management</h2>
                                    <p>Add details of the device, if any already installed on your car. If none, then continue to next step.</p>
                                </div>

                                <div className="subPlan">
                                    <p>Device 1</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Device type</label>
                                                <input type="text" className="form-control" placeholder="Primary GPS" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Serial number</label>
                                                <input type="text" className="form-control" placeholder="Enter the serial number of the device" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p className="text20">Bringing your own device?</p>
                                                    </div>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="text20">
                                                    Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.
                                                </p>
                                                <div className="form-group mb-3">
                                                    <label className="labelText" for="">Upload an image of the device</label>
                                                    <div className="imgUpload mt-2">
                                                        <h6>Click to upload</h6>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                </div>

                                <div className="subPlan">
                                    <p>Device 2</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Device type</label>
                                                <input type="text" className="form-control" placeholder="Secondary GPS" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Serial number</label>
                                                <input type="text" className="form-control" placeholder="Enter the serial number of the device" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p className="text20">Bringing your own device?</p>
                                                    </div>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="text20">
                                                    Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.
                                                </p>
                                                <div className="form-group mb-3">
                                                    <label className="labelText" for="">Upload an image of the device</label>
                                                    <div className="imgUpload mt-2">
                                                        <h6>Click to upload</h6>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                </div>

                                <div className="subPlan">
                                    <p>Device 3</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Device type</label>
                                                <input type="text" className="form-control" placeholder="Drive mate Go" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Serial number</label>
                                                <input type="text" className="form-control" placeholder="Enter the serial number of the device" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p className="text20">Bringing your own device?</p>
                                                    </div>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="text20">
                                                    Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.
                                                </p>
                                                <div className="form-group mb-3">
                                                    <label className="labelText" for="">Upload an image of the device</label>
                                                    <div className="imgUpload mt-2">
                                                        <h6>Click to upload</h6>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                </div>

                                <div className="subPlan">
                                    <p>Device 4</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Device type</label>
                                                <input type="text" className="form-control" placeholder="Lockbox" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="labelText" for="">Serial number</label>
                                                <input type="text" className="form-control" placeholder="Enter the serial number of the device" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p className="text20">Bringing your own device?</p>
                                                    </div>
                                                    <div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="text20">
                                                    Toggle this on if you're bringing your own device. Leave it off if Drive mate is to provide the device.
                                                </p>
                                                <div className="form-group mb-3">
                                                    <label className="labelText" for="">Upload an image of the device</label>
                                                    <div className="imgUpload mt-2">
                                                        <h6>Click to upload</h6>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home2;