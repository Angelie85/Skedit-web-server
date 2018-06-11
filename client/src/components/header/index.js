import React from "react"
import Button from '@material-ui/core/Button';

class Header extends React.Component{

  render(){
    return(
      <div style ={{margin: "0px 0px 20px 10px", textAlign: "right"}}>
        <a href="/auth/google">
          <Button variant="outlined">
            Login / Sign Up
          </Button>
        </a>
      </div>
    )
  }
}

export default Header;