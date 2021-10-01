import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss';
function Navbar (){
    return(
       <div className="myNavbar container-xl" >
           <ul className="myNavbar__container">
                <li className= "myNavbar__container--items">SalaryCalc</li>
                <li className= "myNavbar__container--items">Add New Person</li>
           </ul>
       </div>
    );
}
export default Navbar;