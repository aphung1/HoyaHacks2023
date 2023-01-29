import React from 'react';
import {useState} from 'react'
import './PersonalInfo.css';

export default function PersonalInfo({formData, setFormData}) {
    
    const [state, setState] = useState('');
    const [race, setRace] = useState('');
    const [status, setStatus] = useState('');

    return(

    <div className="personal-info-container">
        
        <div class="wrapper"><h2>What's your name?</h2></div>

        <div class="wrapper">
            <input type="text" placeholder="Name..." 
                value={formData.name} 
                onChange={(event)=>setFormData({...formData, name: event.target.value })}
            />
        </div>

        <br></br>

        <div class="wrapper"><h2>What's your email?</h2></div>

        <div class="wrapper">
            <input type="text" placeholder="Email..."
                value={formData.email}
                onChange={(event)=>setFormData({...formData, email: event.target.value})}
            />
        </div>

        <br></br>

        <div class="wrapper"><h2>What's your Instagram handle?</h2></div>
        
        <div class="wrapper">
            <input type="text" placeholder="Instagram Handle..."
                value={formData.insthandle}
                onChange={(event)=>setFormData({...formData, insthandle: event.target.value})}
            />
        </div>

        <br></br>

        <div class="wrapper"><h2>What's your major?</h2></div>

        <div class="wrapper">
            <input type="text" placeholder="Major..." 
                value={formData.major}
                onChange={(event)=>setFormData({...formData, major: event.target.value})}
            />
        </div>
        
        <br></br>

        <div class="wrapper"><h2>How old are you?</h2></div>
        
        <div class="wrapper">
            <input type="number" placeholder="Age..." 
                value={formData.age}
                onChange={(event)=>setFormData({...formData, age: event.target.value})}
            />
        </div>

        <br></br>

        <div class="wrapper"><h2>Where are you from?</h2></div>

        <div class="wrapper">
            <select value={state} onChange={(e) => 
            {setFormData({...formData, location: e.target.value});
            setState(e.target.value);}}>

                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>

            </select>
        </div>

        <br></br>

        <div class="wrapper"><h2>Which program are you currently enrolled in?</h2></div>

        <div class="wrapper">
            <select value={status} onChange={(e) => 
            {setFormData({...formData, ethnicity: e.target.value});
            setStatus(e.target.value);}}>

                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                
            </select>
        </div>
        
        <br></br>

        <div class="wrapper"><h2>What is your race?</h2></div>

        <div class="wrapper">
            <select value={race} onChange={(e) => 
            {setFormData({...formData, ethnicity: e.target.value});
            setRace(e.target.value);}}>

                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Asian">Asian</option>
                <option value="Latio">Latino</option>
                <option value="PacificIslander">Pacific Islander</option>
                
            </select>
        </div>
        <br></br>    
        <br></br>  
        <br></br>  
        
    </div>
    )
}