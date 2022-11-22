import { Component } from "react";

class AddNinja extends Component {
    state = { 
        name: null,
        age: null,
        belt: null
     }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {addNinja} = this.props
        addNinja(this.state)
        e.target.reset()
    }

    render() { 
        return (
            <div className="AddNinja">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age : </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt">Belt : </label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Sumbit</button>
                </form>
            </div>
        );
    }
}
 
export default AddNinja;