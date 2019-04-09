import React from 'react';

const Tab = ({ tabHeaders }) => {
    console.log(tabHeaders);
    // const headers = 

    return(
        <div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
    )
}

export default Tab;