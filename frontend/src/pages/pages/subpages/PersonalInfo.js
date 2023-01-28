export default function PersonalInfo({formData, setFormData}) {
    return(
    <div className="personal-info-container">
        <input type="text" placeholder="Email..." 
            value={formData.email} 
            onChange={(event)=>setFormData({...formData, email: event.target.value })}/>
        <input type="text"placeholder="Password..."
            value={formData.password}
            onChange={(event)=>setFormData({...formData, password: event.target.value})} />
        <input type="text"placeholder="Confirm..." 
            value={formData.confirm}
            onChange={(event)=>setFormData({...formData, confirm:event.target.value})}/>
        <input 
            type="radio"
            id="male"
            name="gender"
            value="male"
            //hecked={formData.gender ===}
        />
    </div>)
}