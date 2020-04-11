import React from 'react'
import "../styles/footer.css";
import github from '../images/github.png'

export default function Footer() {
    return (
        <div className={"footerContainer"}>
            <div className={"linkContainer"}><a className={"jikanLink"} href={"https://jikan.moe/"} target="blank">Made using Jikan API</a></div>
            <div id={"githubLinkContainer"} className={"linkContainer"}><a className={"githubLink"} href={"https://github.com/PuumalaO"} target="blank">My GitHub<img className={"githubImage"} src ={github}/></a></div>
        </div>
    )
}
