import React from "react";
import "./Navbar.css";


const Styles = {
    Navbar: {
        "font-size": "30px",
        "text-align": "center",
        "font-family": "Arial"
    }
}
const Navbar = props => (
<div class="row">
    <nav className="blue lighten-5">
    <ul>
        <div className="logo center-align black-text" style={Styles.Navbar}>Click car</div>
    </ul>
    </nav>
</div>

)

export default Navbar