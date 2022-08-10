import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useThemeContext } from '../context/ThemeContextProvider';
import {useParams} from 'react-router-dom'

const User = () => {

  const {theme, usersURL} = useThemeContext();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
  

  useEffect(() => {
    axios.get(`${usersURL}/${id}`)
    .then( res => {
        setUser(res.data);
        setLoading(false);
    })
    .catch(err => console.log(err))
  }, [])

  console.log(user);

  const { username, name, email, phone, 
    // address:{street, suite, city, zipcode}, 
    address,
    website, 
    company
    // company:{ catchPhrase, bs }, 
    } = user;
console.log(username);
// --> "undefined" in the first render because the axios call has not yet been made (and responsed) but does not give an error
console.log(address);
// --> "undefined" in the first render because the axios call has not yet been made (and responsed) but does not give an error
console.log(company);
// --> "undefined" in the first render because the axios call has not yet been made (and responsed) but does not give an error
//! SEE User_Destruct-Not-Working-Version.js

  return (
    <div className='container row '>
        <h1 className="d-flex justify-content-center">User Details</h1> 
        {loading 
         ?
          ( <div>Loading...</div> )  
        :
          (<div className='container row '>
            <div className="col-md-6 my-2">
              <div className={`card bg-${theme}`}>
                <div className="card-body">
                  <h5 className="pl-2 card-title" >{name}</h5>
                  <ul className='list-group my-3'>
                    <li>
                      <strong>Username: </strong>
                      {username}
                    </li>
                    <li>
                      <strong>Email: </strong>
                      {email}
                    </li>
                    <ul className="list-group my-3">
                    <strong>Address Details: </strong>
                    <li className="mx-2">
                      <strong>Street: </strong>
                      {address.street}
                    </li>
                    <li className="mx-2">
                      <strong>Suite </strong>
                      {address.suite}
                    </li>
                    <li className="mx-2">
                      <strong>City: </strong>
                      {address.city}
                    </li>
                    <li className="mx-2">
                      <strong>Zipcode: </strong>
                      {address.zipcode}
                    </li>
                  </ul>
                  <li>
                    <strong>Phone: </strong>({phone})
                  </li>
                  <li>
                    <strong>Website: </strong>
                    {website}
                  </li>
                  <ul className="list-group mt-2">
                    <strong>Company Details: </strong>
                    <li className="mx-2">
                      <strong>Name: </strong>
                      {company.name}
                    </li>
                    <li className="mx-2">
                      <strong>Catch Phrase: </strong>
                      {company.catchPhrase}
                    </li>
                    <li className="mx-2">
                      <strong>BS: </strong>
                      {company.bs}
                    </li>
                  </ul>

                  </ul>
                </div>
                
              </div>
            </div>

            <div className="col-md-6 my-2">
              <div className={`img-thumbnail bg-${theme}`}>
                <img
                  className="card-img-top"
                  src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Users Photos"
                />
                <p className="text-center lead mt-2">{name}'s Photo</p>
              </div>
            </div>

          </div>)
        }
    </div>
  )
}

export default User