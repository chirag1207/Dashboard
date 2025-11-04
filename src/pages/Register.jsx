import {React , useState} from 'react';


const Register = () => {

    const[values, setValues] = useState({
        firstname : '',
        lastname : '',
        email:'',
        gender:'',
        contact:'',
        subject:'',
        resume:'',
        image:'',
        about:''


    })

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]:[e.target.value]})

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(values)
    }

    return(
        <div className = 'container'>
            <div className = "form">
                <h1>Registration Form</h1>
                <form>
                    <label htmlFor='firstname'>First Name</label>
                    <input type ="text" placeholder ='Enter First Name' name ="firstname" onChange={(e) => handleChange(e)} required></input>

                    <label htmlFor='lastname'>Last Name</label>
                    <input type ="text" placeholder ='Enter last Name' name ="lastname" required></input>

                    <label htmlFor='email'>Email Id</label>
                    <input type ="email" placeholder ='Enter your valid Email Id' name ="email" required></input>

                    <label htmlFor='contact'>Contact no</label>
                    <input type ="text" placeholder ='Enter your contact no.' name ="contact" required></input>

                    <label htmlFor='gender'>Contact no</label>
                    <input type ="radio" name ="gender" required>Male</input>
                    <input type ="radio" name ="gender" required>Female</input>
                    <input type ="radio" name ="gender" required>Other</input>

                    <label htmlFor='subject'>Subject</label>
                    <select name ="subject" id="subject" required>
                        <option value ="maths" >Maths</option>
                        <option value ="english">English</option>
                        <option value ="physics">Physics</option>
                        <option value ="chemistry">Chemistry</option>
                        <option value ="biology">Biology</option>
                    </select>

                    <label htmlFor='resume'>Resume</label>
                    <input type ='file' placeholders="Select resume" name="resume" required></input>

                    <label htmlFor='image'>Profile Image</label>
                    <input type ='file' placeholders="Select Profile Image" name="image" required></input>

                    <label htmlFor='about'>About</label>
                    <textarea name ='about' id="about" cols = "30" rows ="10" placeholders="Enter Description "required ></textarea>

                    <button type ="button">Reset</button>
                    <button type="submit">Submit</button>

                    


                    
                   
                    
                </form>
            </div>
        </div>

    ) 

}



export default Register 