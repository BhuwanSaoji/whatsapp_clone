import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AccountProvider } from './components/context/AccountProvider';
const CLIENT_ID = "146627636908-su6t521okbhn9el6l9r7f53tgnb24e33.apps.googleusercontent.com"
function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
