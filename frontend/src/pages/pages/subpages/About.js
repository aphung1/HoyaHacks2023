export default function About({formData, setFormData}) {
    return(
        <div className="about-info-container">
            
            <input type="text" placeholder="Year..." 
                value={formData.year} 
                onChange={(event)=>setFormData({...formData, year: event.target.value })}
            />
    
            <input type="text" placeholder="Gender..." 
                value={formData.gender}
                onChange={(event)=>setFormData({...formData, gender: event.target.value})}
            />
    
            <input type="text" placeholder="Diet..."
                value={formData.diet}
                onChange={(event)=>setFormData({...formData, diet: event.target.value})}
            />
    
            <input type="text" placeholder="sleep..." 
                value={formData.sleep}
                onChange={(event)=>setFormData({...formData, sleep: event.target.value})}
            />
    
            <input type="text" placeholder="Study..." 
                value={formData.study}
                onChange={(event)=>setFormData({...formData, study: event.target.value})}
            />
    
            <input type="text" placeholder="Substance..." 
                value={formData.substance}
                onChange={(event)=>setFormData({...formData, substance: event.target.value})}
            />
    
            <input type="text" placeholder="Allergies..." 
                value={formData.allergies}
                onChange={(event)=>setFormData({...formData, allergies: event.target.value})}
            />
                
            <input type="text" placeholder="Cleaning..." 
                value={formData.clean}
                onChange={(event)=>setFormData({...formData, clean: event.target.value})}
            />
        </div>
    )
}