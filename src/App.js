import "./App.css";
import Home from "./pages/Home";
import AppRouter from "./routers/AppRouter";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <AppRouter>
        <Home/>
      </AppRouter>
    </div>
  );
}

export default withAuthenticator(App);
