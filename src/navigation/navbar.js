import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./navlinks";

export default function NavBar() {
    return (
        <div>
            <div>logo</div>
            <div>website name</div>
            <NavLinks/>
        </div>
    );
}