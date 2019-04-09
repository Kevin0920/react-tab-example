import React from 'react';


const Tab = (props) => {
    console.log(props);

    return (
        <li 
            className="nav-item"
            // className={props.isActive ? "active": null}
            onClick={props.handleClick}
            >
           <a
            className="nav-link active"
            href="#">{props.data.title}</a> 
        </li>
    )
};

export default Tab;