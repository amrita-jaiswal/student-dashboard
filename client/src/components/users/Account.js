import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Button from '@material-ui/core/Button';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';



class Account extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            open: true
        }
    }
    // tokens are sending to server
    componentDidMount() {
        axios.get('http://localhost:3005/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const user = response.data
                this.setState({ user }) //when our current value doesn't depend on previous value, that time 

            })
    }

    render() {
        const classes = this.state;

        return (

            <div>
                <h2>Welcome  {this.state.user.username}</h2>
                <h3>Email-{this.state.user.email}</h3>
                <h3>First Name-{this.state.user.firstName}</h3>
                {/* <h3>Last Name-{this.state.user.lastName}</h3> */}
                <h3>Phone Number-{this.state.user.phoneNumber}</h3>
                <br />

                <Link to={`/users/edit/${this.state.user._id}`}>Edit user details </Link>
                <br />
                <br />
                <h2>Student Dashboard</h2>
                <p>Course Structure for Every Week</p>

                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                12 Weeks
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Week 1
                                {/* {open ? <ExpandLess /> : <ExpandMoress />} */}
                                </MenuItem>
                                {/* <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                            <ListItemText primary="Starred" />
                                        </ListItem>
                                    </List>
                                </Collapse> */}

                                <MenuItem onClick={popupState.close}>Week 2</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 3</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 4</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 5</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 6</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 7</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 8</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 9</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 10</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 11</MenuItem>
                                <MenuItem onClick={popupState.close}>Week 12</MenuItem>


                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>


            </div >
        )
    }
}
export default Account