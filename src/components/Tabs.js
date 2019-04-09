
import React from 'react';
import Tab from './Tab';

const Tabs = (props) => {
    console.log(props);

    return(
        <div className="container">
            <ul className="nav nav-tabs">
               {
                   props.data.map((tab, index) => {
                       return (
                            <Tab 
                                key={index}
                                data={tab}
                                isActive={props.activeTab === tab}
                                handleClick={() => props.changeTab(tab)}
                            />
                       )
                   })
               }
            </ul>
        </div>
    )
}

export default Tabs;