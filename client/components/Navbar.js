import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div key = "navbar">
            <nav>Shopify Backend
                <Link to = "/add-product">Inventory</Link>
                <Link to = "/inventory">Add Item</Link>
            </nav>
        </div>
    )
}

export default Navbar;
