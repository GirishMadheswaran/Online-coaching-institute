import React, { Component } from 'react';
import '../App.css';
import Footer from './footer';



class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            number: "",
            email: "",
            msg: "",
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ number: event.target.value })
    }

    handleLanguageChange = (event) => {
        this.setState({ language: event.target.value })
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    handleModeChange = (event) => {
        this.setState({ mode: event.target.value })
    }

    handleSubmit = (event) => {
        alert(`
            Name : ${this.state.name},
            Mobile : ${this.state.number},
            Language : ${this.state.language},
            E-mail : ${this.state.email},
            Mode of Training : ${this.state.mode}
        `)
        this.setState({ msg: "Our team will call you shortly!!!" })
        event.preventDefault()
    }

    render() {
        const { name, number, language, email, mode } = this.state;
        return (
            <div className="contact">
                <div className="address">
                    <div className="address-1">
                        <h2>Bangalore (Bengaluru)</h2>
                        <h4>Anoop Tech Pvt. Ltd.</h4>
                        <p>2nd & 3rd Floor, No. 39, 8th MainKoramangala 4th Block, Bengaluru-560034, (India), Contact Number +91 9910965511</p>
                    </div>
                    <div className="address-1">
                        <h2>Chennai</h2>
                        <h4>Anoop Tech Pvt. Ltd.</h4>
                        <p>5th Floor, Olympia TeknosPlot No. 28, South Phase,Sidco Industrial Estate, Guindy Chennai-600032, Tamil Nadu (India), Contact Number +91 9910965522</p>
                    </div>
                    <div className="address-1">
                        <h2>Delhi</h2>
                        <h4>Anoop Tech Pvt. Ltd.</h4>
                        <p>DSM-640-641, 6th Floor,DLF Tower, Shivaji Marg,Moti Nagar,New Delhi-110015 (India), Contact Number +91 9910965533</p>
                    </div>
                </div>
                <div className="address-2">
                    <div className="address-1">
                        <h2>Goa</h2>
                        <h4>Anoop Tech Pvt. Ltd.</h4>
                        <p>5th floor, Kamat Grand behind the caculo mall,St.Inez, Panjim, Goa-403001 (India), Contact Number +91 9910965544</p>
                    </div>
                    <div className="address-1">
                        <h2>Coimbatore</h2>
                        <h4>Anoop Tech Pvt. Ltd.</h4>
                        <p>No 123, 127, Kattoor Rd, P N Palayam, Tamil Nadu 641037, Contact Number +91 9910965555</p>
                    </div>
                    <div className="address-1">
                        <h2>Salem</h2>
                        <h4>Anoop Tech Pvt. Ltd.</h4>
                        <p> VOC Nagar, Junction, Salem, Tamil Nadu 636005, Contact Number +91 9910965566</p>
                    </div>
                </div>
                <div className="form">
                    <div className="form-head">
                        <h1>ENQUIRE NOW</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-body">
                            <input placeholder="Name" type="name" value={name} onChange={this.handleNameChange} /><br />
                            <input placeholder="Mobile Number" type="number" value={number} onChange={this.handleNumberChange} /><br />
                            <select value={language} onChange={this.handleLanguageChange}>
                                <option defaultValue='types'> Select course </option>
                                <option value="C"> C (Programming language) </option>
                                <option value="C++"> C++ </option>
                                <option value="Java"> Java </option>
                                <option value="Python"> Python </option>
                                <option value="angular"> Angular </option>
                                <option value="javascript"> JavaScript </option>
                                <option value="React"> React </option>
                                <option value="node"> Node </option>
                            </select><br />
                            <input placeholder="EMAIL ID to send you course details" type="text" value={email} onChange={this.handleEmailChange} /><br />
                            <select value={mode} onChange={this.handleModeChange}>
                                <option defaultValue='types'>Select Mode of Training</option>
                                <option value="online"> Online </option>
                                <option value="offline"> Offline </option>
                            </select><br />
                            <button className="button" type="submit" >START WITH FREE TRAINING</button>
                            <h4 className="last-msg">{this.state.msg}</h4>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;
