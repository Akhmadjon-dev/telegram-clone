import React from 'react'
import {Avatar} from '@material-ui/core';
import './Thread.css'
const Thread = () => {
    return (
        <div className="thread">
            <div className="thread__header">
                <div className="thead__header__contents">
                    <Avatar />
                    <div className="thread__header__contents__info">
                        <h4>ThreadName</h4>
                        <h5>Last Seen</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thread
