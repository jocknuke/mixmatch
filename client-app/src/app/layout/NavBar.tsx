import {Button, Container, Dropdown, Menu, Image, Grid, Icon, Header, Divider} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import RegsiterForm from "../../features/users/RegsiterForm";

export default observer(function NavBar() {
    const {userStore: {user, logout, isLoggedIn}} = useStore();
    const {  modalStore } = useStore();

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
                <Menu.Item as={NavLink} to='/' header >
                <Header inverted as='h3'>GameFlow</Header>
                   
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Find Events' />
                
                <Menu.Item as={NavLink} to='/createActivity' name='Create Event'/>



                <Menu.Item >
            
            <>
              
              <Dropdown pointing='top right' text='Help'>
                  <Dropdown.Menu>
                      <Dropdown.Item as={Link} to='/overview/mixandmatch' text='Showcase'  />
                      <Divider></Divider>
                      <Dropdown.Item as={Link} to='/contact' text='Leave your feedback'  />

                     
                   
                     
                     
                     
                  </Dropdown.Menu>
              </Dropdown>
              
              </>
              </Menu.Item>
                
                {isLoggedIn ? (
                <Menu.Item position='right'>
            
                  <>
                    <Image avatar spaced='right' src={user?.image || '/assets/user.png'} />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text='My Profile' icon='user' />

                           
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                           
                           
                           
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    </>
                    </Menu.Item>
                    ):(
                        <>   
                      <Menu.Item position='right' as={NavLink} to='/login' name='Login' />
                      <Menu.Item  onClick={() => modalStore.openModal(<RegsiterForm />)}  name='Register' />
                      </> 

                    
               
 )
}



               
            </Container>
        </Menu>
          </Container>
        </Grid>
        <Grid className="mobile only">
          <Menu inverted borderless size="huge" fixed="top">
            <Menu.Item header as="a">
            GameFlow
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
             
                <Menu.Item as={NavLink} to='/activities' name='Find Events' />
                
                <Menu.Item as={NavLink} to='/createActivity' name='Create Event'/>

                <Menu.Item  as={Link} to='/overview/mixandmatch' text='Showcase'  />
                      
                <Menu.Item  as={Link} to='/contact' text='Leave your feedback'  />
               

                {isLoggedIn ? (
                <Menu.Item>
                    <Image avatar spaced='right' src={user?.image || '/assets/user.png'} />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                ):(

                  <>   
                  <Menu.Item as={NavLink} to='/login' name='Login' />
                  <Menu.Item  onClick={() => modalStore.openModal(<RegsiterForm />)}  name='Register' />
                  </> 


                )}
            </Menu>
          </Menu>
        </Grid>





</>
       






    )
})