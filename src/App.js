import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/HomePage/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";


import ProjectData from "./Components/Projects/ProjectData";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/Contact/Contact";
function App() {
 
  return (
    <div>
     
      <Router>
     
        <Switch>
          
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <ProjectData></ProjectData>
            
          </Route>
          <Route path="/contact">
           <ContactUs></ContactUs>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <MessengerCustomerChat
          pageId="106709411327830"
          appId="383950842866089"
          
        />
    </div>
  );
}

export default App;
