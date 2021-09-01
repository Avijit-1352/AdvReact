import React from 'react'
import "./account.css"
function Account() {
    return (
        <>
          <div className="account-page">
              <div className="container">
                  <div className="row">
                      <div className="col-2">
                          <div className="form-container">
                              <div className="form-btn">
                                  <span >Sign Up</span>
                                   <hr id="Indicator"/>
                              </div>
                              <form id="RegForm">
                                  <input type="text" placeholder="Username"/>
                                  <input type="text" placeholder="Email"/>
                                  <input type="password" placeholder="password"/>
                                  <button type="submit" class="btn">Sign Up</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </>
        
    )
}

export default Account
