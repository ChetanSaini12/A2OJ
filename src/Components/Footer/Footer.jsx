import logo from './logo.png'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import discord from './discord.svg'
import youtube from './youtube.svg'

import './footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="full">
                <div class="firstContainer">
                    <div className="logo">
                        <img src={logo} alt="logo" width="150" />
                    </div>
                    <div className="events">
                        <p>
                            <NavLink to="/home">Home</NavLink>
                        </p>
                        <p>
                            <NavLink to="/a2oj">A2OJ</NavLink>
                        </p>
                        <p>
                            <NavLink to="/leaderboard">Leaderboard</NavLink>
                        </p>
                        <p>
                            <NavLink to="/contest">Contest</NavLink>
                        </p>
                        <p>
                            <NavLink to="/roadmap">Roadmap</NavLink>
                        </p>
                        <p>
                            <NavLink to="/code-editor">Code Editor</NavLink>
                        </p>
                        <p>
                            <NavLink to="/about">About</NavLink>
                        </p>
                    </div>
                </div>
                <div className="secondContainer">
                    <div className="location">
                        <h3>DEVELOPERS & CODERS CLUB NITA</h3>
                        <p>
                            National Institute of Technology, Agartala,
                            <br />
                            Jirania, Tripura - 799046
                        </p>
                    </div>
                    <div className="social">
                        <h3>SOCIAL</h3>
                        <div className="imgContainer">
                            <a href="https://www.instagram.com/dccnita/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://twitter.com/dccnita" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/dccnita/" target="_blank" rel="noopener noreferrer" >
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://discord.gg/58qJhGtTaa" target="_blank" rel="noopener noreferrer">
                                <img src={discord} alt="" />
                            </a>
                            <a href="https://www.youtube.com/@DCCNITA" target="_blank" rel="noopener noreferrer">
                                <img src={youtube} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='events-hidden'>
                        <div className="flex flex-row justify-between">
                            <span>
                                <NavLink to="/home">Home</NavLink>
                            </span>
                            <span>
                                <NavLink to="/a2oj">A2OJ</NavLink>
                            </span>
                            <span>
                                <NavLink to="/contest">Contest</NavLink>
                            </span>
                        </div >
                        <div className="flex flex-row justify-center">
                            <span>
                                <NavLink to="/leaderboard">Leaderboard</NavLink>
                            </span>
                            <span>
                                <NavLink to="/roadmap">Roadmap</NavLink>
                            </span>
                            <span >
                                <NavLink to="/about">About</NavLink>
                            </span>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
};