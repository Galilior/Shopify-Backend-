import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from "./Navbar"
import  AllInventory  from "./AllInventory"
import  InventoryForm  from "./InventoryFory"

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <div>
            <Route exact path = "/inventory" component = { AllInventory } />
            <Route exact path = "/add-product" component = { InventoryForm } />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Routes;