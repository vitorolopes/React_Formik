import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useThemeContext } from '../context/ThemeContextProvider';
import { Link } from 'react-router-dom';

const Users = () => {

  const {theme, usersURL} = useThemeContext();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(usersURL)
    .then( res => {
        setUsers(res.data);
        setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])

  console.log(users)
  
  return (
   <div className='container'>
      <h1 className="display-4">Users</h1>
      <div className="row">
          { loading 
            ?
             (<div className='display-5'>Loading ...</div>) 
            :
             (
               users.map( user => {
                const {id,name,phone,username,email} = user
            
                return(
                  <div className="col-md-4 my-2" key={id}>
                    <div className={`card bg-${theme}`}>

                      <div className="w-100">
                        <img className="card-img-top"
                             src="https://images.unsplash.com/photo-1642425149819-af1b803b2b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                             alt="Users Photos"
                        />
                      </div>

                      <div className="card-body">
                        <h5 className="pl-2 card-title">{name}</h5>
                        <ul className='list-group my-3'>
                          <li>
                            <strong>Username: </strong>
                                {username}
                          </li>
                          <li>
                              <strong>Email: </strong>
                              {email}
                            </li>
                            <li>
                              <strong>Phone: </strong>
                              {phone}
                            </li>

                        </ul>
                        <Link to={`/user/${id}`} className='btn btn-outline-primary'>
                          Show more details
                        </Link>
                      </div>

                    </div>
                  </div>
                )
               })  
            
             
            ) 
          }
      </div>
   </div>
  )
}

export default Users