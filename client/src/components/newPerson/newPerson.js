import 'bootstrap/dist/css/bootstrap.min.css';
import './newPerson.scss';
function Details(){
    return (
        <div className="container-sm">
            <h1> DETAILS</h1>
            <form className="details">
                <label htmlFor="uname">Name</label>
                <input id="uname"/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label>Gender</label>
                <div id="gender">
                    <input name="gender" value="female" id="female" type="radio"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" value="male" id="male"/>
                    <label htmlFor="male">Male</label>
                </div>
                <label>Dependants</label>
                <div>
                    <select name ="dependants" id="dependants" >
                        <option value="">SELECT</option>
                        <option value="one" >ONE</option>
                        <option value="two">TWO</option>
                        <option value="three">THREE</option>
                        <option value="other">OTHER</option>
                    </select>
                </div>
                <label>GrossPay</label>
                <input type="number"/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>   
    );
}
export default Details;