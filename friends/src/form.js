import React from 'react';
import './App.css';
import axios from 'axios'

class Form extends React.Component {
    state = {
        userInfo: { 
            username: '',
            password: ''
        }
    }

    onChange = e => {
        this.setState({
        userInfo: {
            ...this.state.userInfo, [e.target.name]: e.target.value
        }
        })
    }

    onSubmit = e => {
        e.preventDefault()

        axios.post('http://localhost:5000/api/login', this.state.userInfo)
        .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/friends')
        console.log(res.data)
        })
        .catch(err => console.log(err))
        
    }

    render() {
        return (
        <div className="App-header">
            <h1> Tosinnijis Friends </h1>

            <form onSubmit={this.onSubmit}>
            <label> Username </label>
            <input name="username" type="text" value={this.state.userInfo.name} onChange={this.onChange}/>

            <label> Password </label>
            <input name="password" type="password" value={this.state.userInfo.password} onChange={this.onChange} />

            <input type="submit" />

            </form>
        </div>
        )
    }

}

export default Form;
