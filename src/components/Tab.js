import React from 'react';
// import ReactDOM from 'react-dom';
// import Panel from './Panel';

const Tab = (props) => {
    console.log(props);

    // const handleClick = e => {
    //     // e.preventDefault();
    //     props.onChange();
    // }

    const headers = props.tabHeaders.map((header, id) => {
        return (
            <li key={id} className="active">
                <a 
                    className="nav-link"
                    // onClick={handleClick()}
                    >{header.title}</a>
            </li>
        )
    });

    return(
        <div className="container">
            <ul className="nav nav-tabs inline">
                {headers}
            </ul>
            {/* {
                tabHeaders.map(tab => {
                    <Panel 
                        key={tab.id}
                        panel={tab.panel}
                    />
                })
            } */}
        </div>
    )
}

export default Tab;