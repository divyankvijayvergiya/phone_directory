import React, {Component} from 'react';
import  "./Header.css";

const Header = function(props){
    // const headerStyle = {textAlign: 'center', padding: 20, background: '#000', color:'#fff', textTransform:'uppercase'};

    return(
        <div className="header" >
            {props.heading}
        </div>
    );
}

// class Header extends Component{
//     render(){
//         return(
//           <div className="header">
//             Phone Directory
//           </div>
//         )
//     }
// }

export default Header;