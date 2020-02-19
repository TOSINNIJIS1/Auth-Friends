import React from 'react'
import { axiosWithAuth } from './axiosWithAuth';

class FriendsList extends React.Component {


    state = {
        List : []
    }

    componentDidMount() {
        this.getData();

    }

    getData = () => {
        axiosWithAuth() 
        .get('/api/friends')
        .then(res => {
            console.log(res.data)
            this.setState({
                ...this.state, List: res.data
            })
        // .catch(err => console.log('error', err))
        })

    }

    render() {
        return (
            <div className="List">
                {this.state.List.map(e => {
                    return (
                        <div className="list" key={e.id}> 
                            <h1> Name: {e.name} </h1> 
                            <h1> Age: {e.age} </h1> 
                            <h1> Email: {e.email} </h1>
                        </div>
                    )
                }
                )}

            </div>

        )
    }

} 

export default FriendsList