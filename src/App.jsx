import { useState } from 'react'
import Header from './assets/Header'
import General from './assets/General'
import Education from './assets/Education'
import Experience from './assets/Experience'
import Footer from './assets/Footer'


const App = ()=>{    
   
/* Getting General info from user using hook */
    const [name,setName]= useState(0)
    const [lastName,setLastName]= useState(1)
    const [phone,setPhone] = useState(2)
    const [email,setEmail] = useState(3)

/* Getting Educational Experience from user */
    const [school,setSchool] = useState(4)
    const [study,setStudy] = useState(5)
    const [studyDate,setStudyDate] = useState(6)

/* Getting practical experience from user */
    const [company,setCompany] = useState(7)
    const [position, setPosition] = useState(8)
    const [responsibility, setResponsibility] = useState(9)
    const [practiceDate, setPracticeDate] = useState(10)


/* Displaying generated resume on click */
    const [display,setDisplay] = useState('none')
    function handleClick(){
        setDisplay('block')
    }


          return(
            <>
                <Header/>
                <General changeName = {name=>setName(name)}
                    changeLastName = {lastName=>setLastName(lastName)}
                    changePhone = {phone=>setPhone(phone)}
                    changeEmail = {email=>setEmail(email)}
                />

                <br/>
                <Education
                    changeSchool = {school=>setSchool(school)}
                    changeStudy = {study=>setStudy(study)}
                    changeStudyDate = {studyDate=>setStudyDate(studyDate)}
                />

                <br/>
                <Experience 
                    changeCompany = {company=>setCompany(company)}
                    changePosition = {position=>setPosition(position)}
                    changeResponsibility = {responsibility=>setResponsibility(responsibility)}
                    changePracticeDate = {practiceDate=>setPracticeDate(practiceDate)}
                />
                <br/>
                <div className='d-grid container-fluid text-center'>
                    <button onClick={handleClick} className='btn btn-success'>Generate</button>
                </div>
                <br/>
                <div style={{display:display}} className='card container-fluid text-start'>
                    <p>Name: {name} {lastName}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                    <br/>
                    <h3 className='text-muted'>EDUCATION</h3>
                    <p>{school}</p>
                    <p>{study}</p>
                    <p>{studyDate}</p>
                    <br/>
                    <h3 className='text-muted'>WORK EXPERIENCE</h3>
                    <p>I worked at {company} in {practiceDate} as a {position}.
                    I did my work woth diligence and led my team to success as my main role was {responsibility}</p>

                </div>
                
                <Footer/>
            </>
        )
    
}

export default App

