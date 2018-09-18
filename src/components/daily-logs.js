//REACT
import React from 'react';
import {connect} from 'react-redux';

import DayForm from './day-form';

import './daily-logs.css';


export class DailyLogs extends React.Component {
    render() {
        return(
            <section className="day-container">
                <div className="day-form-box">
                    <DayForm history={this.props.history}/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(DailyLogs);