import React, { Component } from 'react';
// import Map from "./mapmateri"
class Sbmptn extends Component{
    render(){
        return(
            <div className="main">
               <div>
                 <div className="container-fluid text-center">    
                    <div className="row content">
                    <div className="col-sm-2 sidenav">
                        <p><a href="/sbmptn">Sbmptn</a></p>
                        <p><a href="/um">Ujian Mandiri</a></p>
                        <p><a href="/un">Ujian Nasional</a></p>
                        <p><a href="/uk">Ujian Kedinasan</a></p>
                    </div>
                    <div className="col-sm-8 text-left"> 
                        <h1>Sbmptn</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr />
                        <h3>Test</h3>
                        <p>Lorem ipsum...</p>
                    </div>
                    <div className="col-sm-2 sidenav">
                        <div className="well">
                        <p>ADS</p>
                        </div>
                        <div className="well">
                        <p>ADS</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}
export default Sbmptn;
