import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect}from 'react-router-dom';
class Admin extends Component{
    state= {
        listProduk: [],
        selectedEdit:0
    };
    componentDidMount(){
        this.getTryoutList();
    }
    getTryoutList=()=>{
        axios.get('http://localhost:1997/tryout')
        .then((data)=> {
            console.log(data.data)
            this.setState({listProduk:data.data, selectedEdit:0})
        }).catch((err)=>{
            console.log(err)
        })
    }
    onBtnAddClick=()=>{
        var nama_produk = this.refs.namaAdd.value;
        var tanggal = this.refs.tanggalAdd.value;
        var link = this.refs.linkAdd.value;

        axios.post('http://localhost:1997/tryout',{
            nama_produk, tanggal, link
        }).then((res)=>{
            this.getTryoutList()
        }).catch((err)=>{
            console.log(err)
        })
    }
    onBtnEditClick=(id)=>{
        var nama_produk = this.refs.namaEdit.value;
        var tanggal = this.refs.tanggalEdit.value;
        var link = this.refs.linkEdit.value;

        axios.put('http://localhost:1997/tryout/n'+id,{
            nama_produk, tanggal, link
        }).then((res)=>{
            this.getTryoutList();
        }).catch((err)=>{
            console.log(err)
        })
    }
    onBtnDeleteClick=(id)=>{
        if(window.confirm('Apakah anda yakin ingin menghapusnya?')){
            axios.delete('http://localhost:1997/tryout/'+id)
                .then((res)=>{
                    this.getTryoutList();
                }).catch((err)=>{
                    console.log(err)
                })
        }
    }
    
    renderListProduk = ()=>{
        var listJSXProduk = this.state.listProduk.map((item)=>{
            if(item.id !== this.state.selectedEdit){
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nama_produk}</td>
                        <td>{item.tanggal}</td>
                        <td><Link to={item.link}><p style={{color:"blue"}}>{item.link}</p></Link></td>
                        <td><input onClick={()=> this.setState({selectedEdit: item.id})} type="button" value="Edit" className="btn btn-primary"/></td>
                        <td><input onClick={()=> this.onBtnDeleteClick(item.id)} type="button" value="Delete" className="btn btn-danger"/></td>
                        
                    </tr>
                    )
            }
            return(
                <tr>
                    <td>{item.id}</td>
                    <td><input type="text" defaultValue={item.nama_produk} ref="namaEdit"/></td>
                    <td><input type="text" defaultValue={item.tanggal} ref="tanggalEdit"/></td>
                    <td><input type="text" defaultValue={item.link} ref="linkEdit"/></td>
                    <td><input onClick={()=> this.onBtnEditClick(item.id)} type="button" value="Submit" className="btn btn-primary"/></td>
                    <td><input onClick={()=> this.setState({selectedEdit:0})} type="button" value="Cancel" className="btn btn-danger"/></td>
                    
                </tr>
                )
            
        })
        return listJSXProduk
    }
    render(){
        if(this.props.username === ''){
            return<Redirect to="/login"/>
        }else{
        return(
            <div className="container-fluid"> 
                <h1>Menu Admin Tryout</h1>
                <table className="tableadmin">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>tanggal</th>
                            <th>Link</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderListProduk()} 
                    </tbody>
                    <tfoot>
                        <td>Input</td>
                        <td>
                            <input ref="namaAdd" type="text" placeholder="Nama Tryout" />
                        </td>
                        <td>
                            <input ref="tanggalAdd" type="text" placeholder="Tanggal tryout"/>
                        </td>
                        <td>
                            <input ref="linkAdd" type="text" placeholder="Link Tryout" /> 
                        </td>
                        <td>
                            <input onClick={this.onBtnAddClick} type="button" className="btn btn-button--success" value="submit"/>
                        </td>
                        <td></td>
                    </tfoot>
                </table>
                
            </div>
        );
        }
    
    }
}
const mapStateToProps = (state) => {
    return{
      username:state.auth.username
    }
  }
export default  connect(mapStateToProps, null)(Admin);










