import React from "react";
import { useNavigate } from "react-router-dom";
import LocPic from "../../assets/img/Loc.svg";
import LockPic from "../../assets/img/Lock.svg";
import MileagePic from "../../assets/img/Mileage.svg";
import Header from "./header/Header";
import Footer from "./footer/Footer";


function Home() {
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
                                    <h2>Subscription plan</h2>
                                    <p>Select the ideal subscription plan for your listing.</p>
                                </div>

                                <div className="subPlan">
                                    <p>Select your plan</p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-head">Just mates</h5>
                                                    <div className="card-desc">
                                                        <h6>
                                                            <img src={LocPic} alt="" srcset="" className="me-2" />
                                                            Bring your own GPS
                                                        </h6>
                                                        <h6>
                                                            <img src={MileagePic} alt="" srcset="" className="me-2" />
                                                            Mileage reporting to be done by you
                                                        </h6>
                                                        <h6>
                                                            <img src={LockPic} alt="" srcset="" className="me-2" />
                                                            In-person key handover to guests
                                                        </h6>
                                                    </div>
                                                    <h5 className="card-foot">Free</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-head">Good mates</h5>
                                                    <div className="card-desc">
                                                        <h6>
                                                            <img src={LocPic} alt="" srcset="" className="me-2" />
                                                            Primary GPS included
                                                        </h6>
                                                        <h6>
                                                            <img src={MileagePic} alt="" srcset="" className="me-2" />
                                                            Automated mileage calculations
                                                        </h6>
                                                        <h6>
                                                            <img src={LockPic} alt="" srcset="" className="me-2" />
                                                            In-person key handover to guests
                                                        </h6>
                                                    </div>
                                                    <h5 className="card-foot">$10/month</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-head">Good mates</h5>
                                                    <div className="card-desc">
                                                        <h6>
                                                            <img src={LocPic} alt="" srcset="" className="me-2" />
                                                            Keyless access technology
                                                        </h6>
                                                        <h6>
                                                            <img src={MileagePic} alt="" srcset="" className="me-2" />
                                                            Automated mileage calculations
                                                        </h6>
                                                        <h6>
                                                            <img src={LockPic} alt="" srcset="" className="me-2" />
                                                            Remote handover to guests
                                                        </h6>
                                                    </div>
                                                    <h5 className="card-foot">$30/month</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="subPlan">
                                    <p>Select add-ons for your subscription</p>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="custom-control custom-radio custom-control-inline customRadio">
                                                <label className="custom-control-label" for="customRadioInline1">BYO secondary GPS - $5/month</label>
                                                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input custmRadio" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="custom-control custom-radio custom-control-inline customRadio">
                                                <label className="custom-control-label" for="customRadioInline2">Between trip insurance</label>
                                                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input custmRadio" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="subPlan">
                                    <p>Add card details</p>
                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <fieldset class="credit-card-group">
                                                <input placeholder="1234 5678 1234 5678" pattern="[0-9]*" type="text" class="card-number" id="card-number" />
                                                <input placeholder="MM/YY" pattern="[0-9]*" type="text" class="card-expiration" id="card-expiration" />
                                                <input placeholder="CVC" pattern="[0-9]*" type="text" class="card-cvv" id="card-cvv" />
                                            </fieldset>
                                        </div>
                                        <small id="emailHelp" className="form-text text-muted">
                                            You will not be charged right now. Subscription will only start once your listing is published and live.
                                        </small>
                                    </div>
                                </div>

                                <div className="subPlan">
                                    <p className="text20">Learn more about the plans here -<span> What is the right plan for me?</span></p>
                                    <p className="text20">You will be able to switch between plans easily later as well. Speak to our host success team if you need any clarifications.</p>
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

export default Home;