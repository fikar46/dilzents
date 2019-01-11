import React, {Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect}from 'react-router-dom';
import Item from './item'
import { Circle } from 'rc-progress';
import CircularProgressbar from 'react-circular-progressbar';

const percentage = 66;
class Homes extends Component{
    state= {
        listProduk: []
    };
    componentDidMount(){
        axios.get('http://localhost:1997/produk_child')
        .then((data)=> {
            console.log(data.data)
            this.setState({listProduk:data.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    renderListProduk = ()=>{
        var listJSXProduk = this.state.listProduk.map((item)=>{
            return(
                <Item produk={item}/>
            )
        })
        return listJSXProduk
    }
    render(){
        if(this.props.username === ''){
            return<Redirect to="/login"/>
        }else{
        return(
            <div className="main text-center">
                <h1 className='welcome-h1'>Selamat datang {this.props.username}</h1>

                {/* <div className="container">
                        <div className="table">
                            <div className="grafik-child">
                            <h3>tryout SBMPTN</h3>
                                <table className="table_user">
                                    <thead>
                                        <th>TO 1</th>
                                        <th>TO 2</th>
                                        <th>TO 3</th>
                                        <th>TO 4</th>
                                        <th>TO 5</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>660</td>
                                            <td>654</td>
                                            <td>750</td>
                                            <td>720</td>
                                            <td>800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            <h3>Nilai UN</h3>
                                <table className="table_user">
                                    <thead>
                                        <th>TO 1</th>
                                        <th>TO 2</th>
                                        <th>TO 3</th>
                                        <th>TO 4</th>
                                        <th>TO 5</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>660</td>
                                            <td>654</td>
                                            <td>750</td>
                                            <td>720</td>
                                            <td>800</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="chart">
                            <TableNilai />
                        </div>
                    <div className="kanan animate-box fadeInUp animated-fast">
                        <h4 className="profil-h2">Kemampuanmu</h4>
                        <div className="score">
                        <p className='score-child'>rank: 80</p>
                        <p className='score-child'>point:20</p>
                        <p className='score-child'>Nilai:880</p>
                        </div>
                        <div className="cita-cita">
                        <p className="judulpilihan">3 jurusan pilihan</p>
                        <p className="pilihan">Pilihan 1:</p>
                        <p className="pilihan">Pilihan 2:</p>
                        <p className="pilihan">Pilihan 3:</p>
                        </div>
                        <div className="recomend">
                        <p className="judulpilihan">Rekomendasi jurusan</p>
                        <p className="pilihan">Pilihan 1:</p>
                        <p className="pilihan">Pilihan 2:</p>
                        <p className="pilihan">Pilihan 3:</p>
                        </div>


                    </div>
                </div> */}
                {/* <div className='percent'>
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="blue"/>
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="#D3D3D3" />
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="#D3D3D3" />
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="#D3D3D3" />
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="#D3D3D3" />
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="#D3D3D3" />
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="#D3D3D3" />
                    <Circle className="circle_percent" percent="35" strokeWidth="4" strokeColor="#D3D3D3" />
                </div> */}
                <div className="percent">
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                />
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                />
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                />
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                />
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                />
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                />
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                />
                <CircularProgressbar
                className="circle_percent"
                percentage={percentage}
                text={`${percentage}%`}
                styles={{
                    path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
                    text: { fill: '#f88', fontSize: '16px' },
                }}
                /> 
                </div>
                <div className="container">
                    <div className="animate-box fadeInUp animated-fast">
                        <h2 className="materi">Materi</h2>
                        {this.renderListProduk()}    
                    </div>
                </div>
                <div className="container">
                    <div className="animate-box fadeInUp animated-fast">
                        <h2 className="tryout">TryOut</h2>
                        {this.renderListProduk()}    
                    </div>
                </div>
                <div className="container diskusi">
                    <div className="animate-box fadeInUp animated-fast">
                        <h2 className="diskusi">Diskusi</h2>
                        <p>Yuk diskusikan soal dan materi dengan siswa lain</p>
                           
                    </div>
                </div>
                <div className="container kelasonline">
                    <div className="animate-box fadeInUp animated-fast">
                        <h2 className="kelasonline">Kelas Online</h2>
                        <p>Belajar online bersama mentor secara langsung dan terjadwal</p>
                    </div>
                </div>
            </div>
        )
        }
    }
}
const mapStateToProps = (state) => {
    return{
      username:state.auth.username,
      email:state.auth.email
    }
  }
export default connect(mapStateToProps, null)(Homes);
