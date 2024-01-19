import {Button, Container, Dropdown, Menu, Image, Grid, Icon} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { useState } from "react";

export default observer(function NavBar() {
    const {userStore: {user, logout}} = useStore();

    type State = {
        dropdownMenuStyle: {
          display: string;
        };
      };
      
      let state: State = {
        dropdownMenuStyle: {
          display: "none"
        }
      };

      const [stateMenu, setSateMenu] = useState(state);
      
      const handleToggleDropdownMenu: React.MouseEventHandler<HTMLButtonElement> = (e) => {
 
        e.preventDefault();
       

    
        let newState: State = {

            dropdownMenuStyle: {
                display: "none"
              }

        }
        if (stateMenu.dropdownMenuStyle.display === "none") {
          newState.dropdownMenuStyle = { display: "flex" };
        } else {
          newState.dropdownMenuStyle = { display: "none" };
        }
      
        setSateMenu(newState);
       
        
    };
      
    return (
<>

        <Grid padded className="tablet computer only">
          <Container>
          <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: 10}}/>
                    Mix And Match
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Events' />
                
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image avatar spaced='right' src={user?.image || '/assets/user.png'} />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
          </Container>
        </Grid>
        <Grid className="mobile only">
          <Menu inverted borderless size="huge" fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic
                  inverted
                  toggle
                  onClick={handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              inverted
              fluid
              style={stateMenu.dropdownMenuStyle}
            >
             
                <Menu.Item as={NavLink} to='/activities' name='Events' />
                
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Event' />
                </Menu.Item>
                <Menu.Item>
                    <Image avatar spaced='right' src={user?.image || '/assets/user.png'} />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
          </Menu>
        </Grid>





</>
       






    )
})