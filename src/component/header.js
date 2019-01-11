// import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {onUserLogout,keepLogin} from "../actions";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';
//   import Cookies from "universal-cookie";
//   const cookies = new Cookies();
//  class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   componentDidMount(){
//       const cookienya = cookies.get("dataUser");
//       if(cookienya!== undefined){
//         this.props.keepLogin(cookienya);
//       }
//   }
//   onLogOutSelect=()=>{
//     this.props.onUserLogout();
//     cookies.remove('dataUser');
//   }
//   render() {
//     if(this.props.username === ''){
//     return(
//           <div class="header">
//             <Navbar  light expand="md">
//             <Link to='/'><NavbarBrand style={{color:'black'}}>Dilizents</NavbarBrand></Link>
//               <NavbarToggler onClick={this.toggle} />
//               <Collapse isOpen={this.state.isOpen} navbar>
//                 <Nav className="ml-auto" navbar>
//                 <NavItem>
//                   <Link to='/about'><NavLink>About</NavLink></Link>
//                   </NavItem>
//                   <NavItem>
//                   <Link to='/register'><NavLink>Register</NavLink></Link>
//                   </NavItem>
//                   <NavItem>
//                     <Link to='/login'><NavLink>Login</NavLink></Link>
//                   </NavItem>
//                 </Nav>
//               </Collapse>
//             </Navbar>
//           </div>
//     );
//       }
//         return (
//           <div>
//             <Navbar color="light" light expand="md">
//               <Link to='/'><NavbarBrand style={{color:'black'}}>Dilizents</NavbarBrand></Link>
//               <NavbarToggler onClick={this.toggle} />
//               <Collapse isOpen={this.state.isOpen} navbar>
//                 <Nav className="ml-auto" navbar>
//                   <NavItem>
//                     <NavLink href="http://dilizents.com">Dilizents page</NavLink>
//                   </NavItem>
//                   <UncontrolledDropdown nav inNavbar>
//                     <DropdownToggle nav caret>
//                       Hello, {this.props.username}
//                     </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem>
//                         Profile
//                       </DropdownItem>
//                       <Link to='/'><DropdownItem>
//                         Option
//                       </DropdownItem></Link>
//                       <DropdownItem divider />
//                       <DropdownItem onClick={this.onLogOutSelect}>
//                         Log Out
//                       </DropdownItem>
//                     </DropdownMenu>
//                   </UncontrolledDropdown>
//                 </Nav>
//               </Collapse>
//             </Navbar>
//           </div>
//          );
      
   
    
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     username:state.auth.username
//   }
// }

// export default connect(mapStateToProps, {onUserLogout, keepLogin})(Header);