import React from 'react';
import ScaleBackground from '../components/ScaleBackground';
import "../css/Contact.css";

const Contact = () => {
    return (
        <div className="column contactContainer pageSection" style={{margin: "0px 0px 30px 0px"}}>
            <div className="row sectionTitleContainer">
                <div className="column sectionTitle">
                    <hr style={{margin: "0px 0 10px 0"}}/>
                    <h1 className="tab" id="CONTACT">Contact</h1>
                    <hr style={{margin: "10px 0 0 0"}}/>
                </div>
            </div>
            <div className="column contact">
            <div className="column contactBackground">
                <ScaleBackground />
                <div className="column contactBox">
                    <div className="column contactBoxBlock box1" onClick={() => {window.open("https://www.linkedin.com/in/noahwatts/", '_blank', 'noreferrer')}}>
                        <div className="row contactBoxEntry">
                            <div className="column contactBoxSVG">
                                <svg style={{border: "3px solid #d9d9d9", borderRadius: "10px"}} viewBox="0 0 256 256"><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#d9d9d9"/></svg>
                                <hr style={{bottom: "-20px"}} />
                            </div>
                            <h3>{"LinkedIn"}</h3>
                        </div>
                        <p>{"linkedin.com/in/noahwatts"}</p>
                    </div>
                    <div className="column contactBoxBlock box2" onClick={() => {window.open("mailto: nwatts2@uccs.edu", '_blank', 'noreferrer')}}>
                        <div className="row contactBoxEntry">
                            <div className="column contactBoxSVG">
                                <svg viewBox="0 0 24 24" fill="none" >
                                    <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <hr />
                            </div>
                        
                            <h3>{"Email"}</h3>
                        </div>
                        <p>nwatts2@uccs.edu</p>
                    </div>
                    <div className="column contactBoxBlock box3" onClick={() => {window.open("tel:+17196843010", '_blank', 'noreferrer')}}>
                        <div className="row contactBoxEntry">
                            <div className="column contactBoxSVG">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3V2Z" fill="#d9d9d9"/>
                                    <rect x="5.75" y="1.75" width="12.5" height="20.5" rx="1.75" stroke="#d9d9d9" stroke-width="1.5"/>
                                    <path d="M9 19.5H15" stroke="#d9d9d9" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <hr />
                            </div>
                        
                            <h3>{"Phone"}</h3>
                        </div>
                        <p>{"(719) 684-3010"}</p>
                    </div>
                    <div className="column contactBoxBlock box4" onClick={() => {window.open("https://github.com/nwatts2", '_blank', 'noreferrer')}}>
                        <div className="row contactBoxEntry">
                            <div className="column contactBoxSVG">
                                <svg viewBox="0 0 24 24" fill="none" >
                                    <path d="M7.90451 6.92144C8.41341 6.45495 8.44779 5.66424 7.9813 5.15534C7.51481 4.64645 6.7241 4.61207 6.2152 5.07856L7.90451 6.92144ZM1.46194 11.1314L2.3066 12.0529L2.3066 12.0529L1.46194 11.1314ZM1.46194 11.8686L2.3066 10.9471L2.3066 10.9471L1.46194 11.8686ZM6.2152 17.9214C6.7241 18.3879 7.51481 18.3536 7.9813 17.8447C8.44779 17.3358 8.41341 16.545 7.90451 16.0786L6.2152 17.9214ZM6.2152 5.07856L0.617287 10.21L2.3066 12.0529L7.90451 6.92144L6.2152 5.07856ZM0.617287 12.79L6.2152 17.9214L7.90451 16.0786L2.3066 10.9471L0.617287 12.79ZM0.617287 10.21C-0.139356 10.9036 -0.139356 12.0964 0.617287 12.79L2.3066 10.9471C2.63087 11.2444 2.63087 11.7556 2.3066 12.0529L0.617287 10.21Z" fill="#d9d9d9"/>
                                    <path d="M16.0557 16.0786C15.5468 16.545 15.5125 17.3358 15.9789 17.8447C16.4454 18.3536 17.2361 18.3879 17.745 17.9214L16.0557 16.0786ZM22.4983 11.8686L21.6537 10.9471L21.6537 10.9471L22.4983 11.8686ZM22.4983 11.1314L21.6537 12.0529L21.6537 12.0529L22.4983 11.1314ZM17.745 5.07856C17.2361 4.61207 16.4454 4.64645 15.979 5.15534C15.5125 5.66424 15.5468 6.45495 16.0557 6.92144L17.745 5.07856ZM17.745 17.9214L23.343 12.79L21.6537 10.9471L16.0557 16.0786L17.745 17.9214ZM23.343 10.21L17.745 5.07856L16.0557 6.92144L21.6537 12.0529L23.343 10.21ZM23.343 12.79C24.0996 12.0964 24.0996 10.9036 23.343 10.21L21.6537 12.0529C21.3294 11.7556 21.3294 11.2444 21.6537 10.9471L23.343 12.79Z" fill="#d9d9d9"/>
                                    <path d="M15.2127 3.80317C15.3801 3.13343 14.9729 2.45476 14.3032 2.28732C13.6334 2.11989 12.9548 2.52709 12.7873 3.19683L15.2127 3.80317ZM8.78732 19.1968C8.61989 19.8666 9.02709 20.5452 9.69683 20.7127C10.3666 20.8801 11.0452 20.4729 11.2127 19.8032L8.78732 19.1968ZM12.7873 3.19683L8.78732 19.1968L11.2127 19.8032L15.2127 3.80317L12.7873 3.19683Z" fill="#d9d9d9"/>
                                </svg>
                                <hr />
                            </div>
                            <h3>Code Repositories</h3>
                        </div>
                        <p>{"github.com/nwatts2"}</p>
                    </div>
                    <div className="column contactBoxBlock box5" onClick={() => {window.open("https://www.buymeacoffee.com/noahwatts", '_blank', 'noreferrer')}}>
                        <div className="row contactBoxEntry">
                            <div className="column contactBoxSVG">
                                <svg viewBox="0 0 24 24" fill="none" style={{marginLeft: "4px"}} >
                                    <path d="M15.4286 7C10.9654 7 4 7 4 7C4 7 4.0001 11.4 4 13.6C3.99987 16.3506 6.85648 18 9.71428 18C12.5721 18 15.4286 16.3506 15.4286 13.6C15.4286 11.4 15.4286 14.7 15.4286 12.5M15.4286 7C17.7143 7 20 7.72369 20 9.75C20 11.7763 18.8571 13.05 15.4286 12.5M15.4286 7C15.4286 9.14788 15.4286 10.3521 15.4286 12.5" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <hr />
                            </div>
                        
                            <h3>{"Buy me a coffee!"}</h3>
                        </div>
                        <p>{"buymeacoffee.com/noahwatts"}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
                
    );
}

export default Contact;