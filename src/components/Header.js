import {Link} from "react-router-dom";

function Header(props){
return(
<header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
       <Link to="/"> <img width={50}  src="/img/image 4.png" alt="Логотип кроссовок Snickers"/></Link>

              <div >
               <h3 className="text-uppercase">React sneakers</h3>
               <p className="opacity-7">Магазин лутших красовок</p>
              </div>
        </div>
        <ul className="d-flex align-center text-center">
          <li onClick={props.onClickCart} className="mr-30 cu-p"><img className="mr-5"  width={18} height={18} src="/img/Group.svg" alt="img"/><span >1205 грн</span></li>

         <Link to="/favorites"><li className="mr-30 cu-p"><img width={18} height={18}  src="/img/hart.png" alt="hart"/></li></Link> 
          <li><img width={18} height={18}  src="/img/Union.svg" alt="Union"/></li>
        </ul>
      </header>

);



}
export default Header