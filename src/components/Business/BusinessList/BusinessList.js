import React from 'react';
import BusinessList from './BusinessList.css';
import Business from '../Business/Business.js';

const BusinessList = () => {
    render() {
        return(
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}

export default BusinessList