import React, { Component } from 'react';

class Item extends Component{
    render(){
        const {link,img,nama_produk} = this.props.produk;
        return(
            <div>
                <a href={link}><div className="container baru hvr-underline-from-center">
                    <img src={img} alt='img' className='image-icon-materi'/>
                        <p className="name_produks">{nama_produk}</p>
                    </div>
                </a>
            </div>
        );
    }
}
export default Item;










