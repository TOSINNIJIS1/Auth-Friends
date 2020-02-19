import React from 'react';
import { axiosWithAuth } from './axiosWithAuth';

class NewForm extends React.Component {
    state = {
        New : {
            name: '',
            age: '',
            email: ''
        }, 
        isLoading: false
    }

    onChange = e => {
        this.setState({
            New: {
                ...this.state.New, [e.target.name]: e.target.value
            }
        })
    }    

    onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', this.state.New) 
        .then(res =>{
            console.log(res)
            this.setState({
                friends:[...res.data, res.data.payload]


            })
            this.props.history.push('/friends')
        })
        .catch(error => console.log('Error', error))
        this.setState({
            isLoading: true
        })
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label> Name </label>
                    <input type="text" name="name" value={this.state.New.name} onChange={this.onChange}/>


                    <label> Age </label>
                    <input type="number" name="age" value={this.state.New.age} onChange={this.onChange} />

                    <label> email </label>
                    <input type="email" name="email" value={this.state.New.email} onChange={this.onChange} />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}



export default NewForm