import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../stores/store';
import { FC, useEffect } from 'react';
import LoadingComponent from './LoadingComponent';
import ModalContainer from '../common/modals/ModalContainer';
import Footer from './Footer';

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

 

 interface MessageProps {
  message: string;
}

const Message: FC<MessageProps> = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <>


    <ScrollRestoration/>
      <ModalContainer />
      <NavBar/>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      {location.pathname === '/' ? <HomePage /> :location.pathname === '/register' ? (
        <>
          
         
            <Outlet />
         
        </>
      ):(<>
          
        <Container style={{ marginTop: '5em' }}>
          <Outlet />
        </Container>
      </>)}

  
    </>
  );
}

export default observer(App);
