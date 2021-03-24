import './ControlledDemo.css';
import React, { Component } from 'react';

const options = [
    { label: 'IT', value: 'it'},
    { label: 'Engineer', value: 'engineer'},
    { label: 'Unemployed', value: 'unemployed'},
];

class ControlledDemo extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            age: '18',
            bio: 'Lorem ipsum!',
            occupation: 'unemployed',
            errors: {
                username: '',
                email: '',
            }
        };

        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if (this.state.username.length < 5) {
            console.log('asdad');
            this.setState(state => 
                ({errors: { ...state.errors, username: 'You name should be at least 5 characters long!'}}))
        } else {
            this.setState(state => ({errors: { ...state.errors, username: '' }}));
        }

        if (!this.emailInput.current.value.includes('@')) {
            this.setState(state => ({errors: { ...state.errors, email: 'There should be an @ sign' }}));
            this.emailInput.current.focus();
        } else {
            this.setState(state => ({errors: { ...state.errors, email: '' }}));
        }
    };

    onChangeHandler(e) {     
        /* [propName] - Dynamic property in object */   
        this.setState({[e.target.name]: e.target.value});
    };

    render() { 

        return(
            <div className="form-container">
                <h1>Controlled Demo Form</h1>
    
                <form>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={this.state.username} 
                        onChange={this.onChangeHandler}
                    />
                    {this.state.errors.username && 
                        <div className='input-validation'>{this.state.errors.username}</div>
                    }

                    <label htmlFor="email">Email</label>
                    <input 
                        ref={this.emailInput}
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                    />
                    {this.state.errors.email && 
                        <div className='input-validation'>{this.state.errors.email}</div>
                    }

                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age" 
                        value={this.state.age} 
                        onChange={this.onChangeHandler}
                    />

                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio" value={ this.state.bio } onChange={ this.onChangeHandler }/>

                    <label htmlFor="occupation">Occupation</label>
                    <select 
                        name="occupation" 
                        id="occupation" 
                        onChange={ this.onChangeHandler } 
                        value={this.state.occupation}
                    >
                        {options.map(x => 
                            <option key={x.value} value={x.value}>{x.label}</option>
                        )}
                    </select>

                    <input type="submit" value="Send" onClick={ this.onSubmitHandler }/>
                </form>
            </div>
        );
    }
}

export default ControlledDemo;