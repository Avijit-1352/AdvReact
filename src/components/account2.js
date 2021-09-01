import React from 'react'
import { Link } from 'react-router-dom';
import "./account.css"
function Account2() {
    return (
        <>
          <div className="account-page">
              <div className="container">
                  <div className="row">
                      <div className="col-2">
                          <div className="form-container">
                              <div className="form-btn">
                                  <span >Sign In</span>
                                   <hr id="Indicator"/>
                              </div>
                              <form id="RegForm">
                              <input type="text" placeholder="Username"/>
                                  <input type="password" placeholder="password"/>
                                  <button type="submit" class="btn">Sing In</button>
                                  <Link to="">Forgot Password</Link>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </>
        
    )
}

export default Account2