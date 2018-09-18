import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {saveDay} from '../actions/dailyLogs';
import {required, nonEmpty, isTrimmed} from '../validators';


export class DayForm extends React.Component {
    onSubmit(values) {
        this.props.values = values;
        this.props.dispatch(saveDay(values));
        return this.props.history.push("/dashboard");
        };


    render() {
        console.log(this.props.values);
        return(
            
            <form className="day-form"
            onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
            )}>
            <legend class="form-title">Log Meals</legend>
            <fieldset>
                <div className="general-inputs">
                    <div className="field-container">
                        <label htmlFor="date">Date:</label>
                        <Field component={Input} type="date" name="date"
                        validate={[required, nonEmpty, isTrimmed]}/>
                    </div>
                    
                    <div className="field-container">
                        <label htmlFor="meal1">Meal #1:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="meal1"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>

                    <div className="field-container">
                        <label htmlFor="meal2">Meal #2:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="meal2"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>
                    
                    <div className="field-container">
                        <label htmlFor="meal3">Meal #3:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="meal3"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>

                    <div className="field-container">
                        <label htmlFor="snack">Snacks/Other:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="snack"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>
                </div>
                <div className="submit-btn-box">
                    <button
                        className="submit-btn"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </div>
            </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'dayForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('date','meal1', 'meal2', 'meal3', 'snack'))
})(DayForm);






    
    
    // 'x-app-id': "90ca78fe",
    // 'x-app-key': "dacc0f95110653085d49f04c0a2be0b1",
    // 'Content-Type': 'application/json',