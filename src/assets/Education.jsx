import React,{Component} from "react";

class Education extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            school:'',
            inputSchool:'',
            study:'',
            inputStudy:'',
            studyDate:'',
            inputStudyDate:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSchool = this.handleSchool.bind(this)
        this.handleStudy = this.handleStudy.bind(this)
        this.handleStudyDate = this.handleStudyDate.bind(this)
    }

    handleSchool(e){
        this.setState({
            inputSchool:e.target.value
        })
    }
    handleStudy(e){
        this.setState({
            inputStudy:e.target.value
        })
    }

    handleStudyDate(e){
        this.setState({
            inputStudyDate:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        alert("Educational Experience Submited Successfully")
        this.setState({
            school:this.state.inputSchool,
            study:this.state.inputStudy,
            studyDate:this.state.inputStudyDate
        })
    }

    render(){
        this.props.changeSchool(this.state.school)
        this.props.changeStudy(this.state.study)
        this.props.changeStudyDate(this.state.studyDate)
        return(
            <div className='container-fluid'>
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <h3 className="form-title text-center text-muted">Educational Experience</h3>
                    <label>School Name</label>
                    <input value={this.state.inputSchool} onChange={this.handleSchool} required className="form-control"/>
                    <label>Title of study</label>
                    <input value={this.state.inputStudy} onChange={this.handleStudy} required className="form-control"/>
                    <label>Date of study</label>
                    <input value={this.state.inputStudyDate} onChange={this.handleStudyDate} required className="form-control" type="date"/>
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

export default Education