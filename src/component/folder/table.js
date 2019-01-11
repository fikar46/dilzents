import React, { Component } from 'react';

class TableNilai extends Component{
    render(){
        return(
            <div>
                <h3>tryout UN</h3>
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
        );
    }
}
export default TableNilai;