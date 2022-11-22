import { Component } from "react";
import AddNinja from "./AddNinja";
import Ninja from "./Ninjas";

class AppClass extends Component {
    state = { 
        ninjas : [
            {name: 'Ryu', age: 30, belt: 'black', id: 1},
            {name: 'Yoshi', age: 20, belt: 'green', id: 2},
            {name: 'Crystal', age: 25, belt: 'pink', id: 3}, 
        ]
     } 

    addNinja = (ninja) => {
        ninja.id = Math.floor(Math.random()*1000)
        let ninjas = [...this.state.ninjas, ninja]
        this.setState({
            ninjas: ninjas
        })
    }

    deleteNinja = (id) => {
        console.log(id)
        let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id)
        this.setState({
            ninjas: ninjas
        })
    }

    componentDidMount(){
        console.log('component mounted')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component update')
        console.log(prevProps, prevState)
    }

    render() { 
        return (
            <div className="appClass">
                <h1>Hallo</h1>
                <Ninja ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
                <AddNinja addNinja={this.addNinja} />
            </div>
        );
    }
}

export default AppClass;