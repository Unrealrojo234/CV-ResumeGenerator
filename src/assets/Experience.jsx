import React, {Component} from "react";

class Experience extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            company:'',
            inputCompany:'',
            position:'',
            inputPosition:'',
            responsibility:'',
            inputResponsibility:'',
            practiceDate:'',
            inputPracticeDate:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCompany = this.handleCompany.bind(this)
        this.handlePosition = this.handlePosition.bind(this)
        this.handlePracticeDate = this.handlePracticeDate.bind(this)
    }   

    
    handleCompany(e){
        this.setState({
            inputCompany:e.target.value
        })
    }
    
    handlePosition(e){
        this.setState({
            inputPosition:e.target.value
        })
    }
    
    handleResponsibility(e){
        this.setState({
            inputResponsibility:e.target.value
        })
    }
    
    handlePracticeDate(e){
        this.setState({
            inputPracticeDate:e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault()
        alert("Practical Experience Submitted Successfully")
        this.setState({
            company:this.state.inputCompany,
            position:this.state.inputPosition,
            responsibility:this.state.inputResponsibility,
            practiceDate:this.state.inputPracticeDate
        })
    }
    render(){
        this.props.changeCompany(this.state.company)
        this.props.changePosition(this.state.position)
        this.props.changeResponsibility(this.state.responsibility)
        this.props.changePracticeDate(this.state.practiceDate)
        return(
            <div className="container-fluid">
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <h3 className="text-center text-muted form-title">Practical Experience</h3>
                    <label>Company Name</label>
                    <input value={this.state.inputCompany} onChange={this.handleCompany} className="form-control" type="text" required='true'/>
                    <label>Position Title</label>
                    <input value={this.inputPosition} onChange={this.handlePosition} className="form-control" type="text" required='true'/>
                    <label>Main Responsibility</label>
                    <input value={this.inputResponsibility} onChange={this.handleResponsibility} className="form-control"  required='true'/>
                    <label>Date</label>
                    <input value={this.inputPracticeDate} onChange={this.handlePracticeDate}  className="form-control"  type="date" required='true'/>
                    <br/><br/>
                    <div className="row text-center">
                        <div className="col"><button type="submit" className="btn btn-outline-primary">SUBMIT</button></div>
                        <div className="col"><button type="button" className="btn btn-outline-danger">EDIT</button></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Experience