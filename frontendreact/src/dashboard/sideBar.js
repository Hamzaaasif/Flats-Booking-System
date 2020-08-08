import { MDBListGroup, MDBListGroupItem, MDBIcon , MDBDropdown , MDBDropdownMenu , MDBDropdownToggle , MDBDropdownItem , MDBRow , MDBCol} from 'mdbreact';
import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
//import logo from './mdb-react.png'
import {Signout} from '../auth/auth'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class Sidebar extends Component {

    render()
    {

    return(

        
        

         <div className="sidebar-fixed position-fixed">
        
        <h3 className = "HeadingStyle"  >MAYAR GROUP</h3>
            
        <MDBListGroup className="list-group-flush">

            <NavLink exact={true} to="/home" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="chart-pie" className="mr-3"/>
                    Home
                </MDBListGroupItem>
            </NavLink>

            <NavLink to="/allfd" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="building" className="mr-3"/>
                    Flats 
                </MDBListGroupItem>
            </NavLink>

            <NavLink to="/getappli" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="user-plus" className="mr-3"/>
                    Applicant
                </MDBListGroupItem>
            </NavLink>

            <NavLink to="/allinsta" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="dollar-sign" className="mr-3"/>
                    Installments
                </MDBListGroupItem>
            </NavLink>

            <NavLink to="/getquerycust" activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon="user" className="mr-3"/>
                    Query Customers
                </MDBListGroupItem>
                </NavLink>

                <NavLink to="/" activeClassName="activeClass1">
                <MDBListGroupItem onClick={Signout}>
                    <MDBIcon icon="undo" className="mr-3" />
                    
                    Sign Out
                </MDBListGroupItem>
                </NavLink>

        </MDBListGroup>
        

  </div>


    
  );
    }
}

export default Sidebar;


