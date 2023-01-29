import {useState} from 'react'

import PersonalInfo from './subpages/PersonalInfo'
import About from './subpages/About'
import Interests from './subpages/Interests'
import Photo from './subpages/Photo'
import 'bootstrap/dist/css/bootstrap.min.css';

import {MultiStepProgressBar} from './components/MultiStepProgressBar'
import { Container, Row, Col } from "react-bootstrap"; 
import './Form.css'

export default function Form() {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        email:'',
        major:'',
        location: '',
        status: '',
        ethnicity: '',
        insthandle: '',
        year: '',
        gender:'',
        diet: '',
        sleep: '',
        study: '',
        substance: '',
        allergies: '',
        clean: '',
        photo: ''
    })

    const FormTitles = ["Personal Information", "About Me", "Living Habits", "Photos"]

    //render out the right page
    const PageDisplay = () => {
        if (page === 0){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        } else if (page === 1) {
            return <About formData={formData} setFormData={setFormData}/>
        } else if(page === 2) {
            return <Interests />
        } else if(page === 3) {
            return <Photo />
        }
    }
    return <div className="form">

            <br></br>
            
            <Container className="h-100" >
                <Row className="h-100">
                    <Col className='align-self-center'>
                        <MultiStepProgressBar step={page + 1} />
                    </Col>
                </Row>
            </Container>
            
            <br></br>
            <br></br>

            <div className="form-container">
                
                
                
                <div className="body">
                    {PageDisplay()}
                </div>
                
                <div className="footer">
                    
                    <button
                        disabled={page === 0} 
                        onClick={() => {
                        setPage((currPage) => currPage - 1)}}>Prev
                    </button>
                    
                    <button
                        
                        onClick={(e) => {
                        if(page === FormTitles.length - 1) {
                            console.log(JSON.stringify(formData));
                            e.preventDefault();
                            fetch('http://localhost:80/users', {
                                method: 'POST',
                                // We convert the React state to JSON and send it as the POST body
                                body: JSON.stringify(formData),
                                headers: {
                                    'Content-Type': 'application/json'
                                  }
                            }).then(function(response) {
                                console.log(response)
                                return response.json();
                            });
                        } else {
                            setPage((currPage) => currPage + 1)}}
                        }
                        
                        > {page === FormTitles.length - 1 ? "Submit" : "Next" }
                    </button>

                </div>
                
            </div>
            </div>
}