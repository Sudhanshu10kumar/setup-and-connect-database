import React from 'react'

const UserStatus = ({loggedIn,isAdmin}) => {
     if(loggedIn && isAdmin){
        return <h1>Welcome Admin</h1>
     }
     else{
        return <h1>You are not loggedin</h1>
     }
}

export default UserStatus;
