import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.scss';
import del from '../../assets/del.png';
import edit from '../../assets/edit.png';
class Body extends Component {
    render () {
        return(
            <div className="container-xl">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Dependants</th>
                            <th>Gender</th>
                            <th>CPP</th>
                            <th>EI</th>
                            <th>GrossPay</th>
                            <th>NetPay</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tanvir</td>
                            <td>tanvirkauat@gmail.com</td>
                            <td>3</td>
                            <td>Female</td>
                            <td>255</td>
                            <td>210</td>
                            <td>80000</td>
                            <td>60000</td>
                            <td><img className="icon" src={edit}/></td>
                            <td><img className ="icon"src={del}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Body;