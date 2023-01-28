import {useState} from 'react'
import PersonalInfo from './subpages/PersonalInfo'
import Interests from './subpages/Interests'
import Photo from './subpages/Photo'

export default function Form() {

    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        confirm:'',
        fullname:'',
        gender:'',
        age:0,
        ethnicity:'',
        major:'',
        year:'',
        in_state:false,
        study_habit:'',
        sleeping_habit:'',
        drugssss:'',
        interests:'',
        photo:''
    })

    const FormTitles = ["Personal Info", "Interests", "Photos"]

    //render out the right page
    const PageDisplay = () => {
        if (page == 0){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        } else if (page == 1) {
            return <Interests />
        } else if(page == 2) {
            return <Photo />
        }
    }
    return <div className="form">
            <div className="progressbar"><div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div></div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">
                    {PageDisplay()}
                </div>
                <div className="footer">
                    <button
                        disabled={page == 0} 
                        onClick={() => {
                        setPage((currPage) => currPage - 1)}}>
                            Prev</button>
                    <button
                        
                        onClick={() => {
                        if(page === FormTitles.length - 1) {
                            console.log(formData)
                        } else {
                            setPage((currPage) => currPage + 1)}}
                        }
                        
                    > {page == FormTitles.length - 1 ? "Submit" : "Next" }</button>
                </div>
                
            </div>
            </div>
}