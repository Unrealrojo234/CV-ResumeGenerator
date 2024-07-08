import React, {Component} from "react";

class General extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
            first:'',
            last:'',
            phone:'',
            email:'',
            inputFirst:'',
            inputLast:'',
            inputPhone:'',
            inputEmail:'',
           
        }

        this.handleChange = this.handleChange.bind(this)
        this.handlePhone= this.handlePhone.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleLast = this.handleLast.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleLast(e){
        this.setState({
            last:e.target.value,
        })
    }

    handleEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    handlePhone(e){
        this.setState({
            phone:e.target.value
        })
    }

    handleChange(e){
        this.setState({
            first:e.target.value,
        })
    }
    
    handleSubmit(e){
        e.preventDefault()
        alert("Personal Information Submitted Successfully")
        this.setState({
            inputFirst:this.state.first,
            inputLast:this.state.last,
            inputEmail:this.state.email,
            inputPhone:this.state.phone
        })

        
    }

    
    
    render(){
        this.props.changeName(this.state.inputFirst)
        this.props.changeLastName(this.state.inputLast)
        this.props.changePhone(this.state.inputPhone)
        this.props.changeEmail(this.state.inputEmail)

            
        
        return(
            <div className="container-fluid" onSubmit={this.handleSubmit}>
                <form className="form-control">
                    <h3 className="text-center text-muted form-title">Personal Information</h3>
                    <label>First Name</label>
                    <input isDisabled value={this.state.first} onChange={this.handleChange} className="form-control" placeholder="e.g John" type="text" required='true'/>
                    <label>Last Name</label>
                    <input className="form-control" value={this.state.last} onChange={this.handleLast} placeholder="e.g Doe" type="text" required='true'/>
                    <label>Phone Number</label>
                    <input className="form-control" value={this.state.phone} onChange={this.handlePhone} placeholder="e.g 07********" type="number" required='true'/>
                    <label>Email</label>
                    <input  className="form-control" value={this.state.email} onChange={this.handleEmail} placeholder="e.g johndoe@gmail.com" type="email" required='true'/>
                    <br/><br/>
                    
                    <div className="row text-center">
                        <div className="col"><button  type="submit" className="btn btn-outline-primary">SUBMIT</button></div>
                        <div className="col"><button type="button" className="btn btn-outline-danger">EDIT</button></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default General