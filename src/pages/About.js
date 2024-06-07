import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/IMG_7988.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                // Image goes here
                src={profilePic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Aditya Rana</div>
              <div className="brief_description">
                <p>Hi everyone!</p>

                <p>
                I am a rising junior at Virginia Tech studying computer science.
                When I am not working, my peers usually find me outdoors practicing my photography, going to the gym, or playing F1 23.
                Looking forward to working with all the IBM Accelerate program participants.
                </p>
                <p>Cheers!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}