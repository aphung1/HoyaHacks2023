export default function PersonalInfo({formData, setFormData}) {
    return(
    <div className="personal-info-container">
        <input type="text" placeholder="Email..." 
            value={formData.email} 
            onChange={(event)=>setFormData({...formData, email: event.target.value })}/>
        <input type="text"placeholder="Password..." />
        <input type="text"placeholder="Confirm..." />
    </div>)
}