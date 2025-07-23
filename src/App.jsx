import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from "./store/actions/authSlice";
import {Header, Footer, Mainroutes} from "./components/index";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout(userData));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Mainroutes />
      </main>
      <Footer />
    </div>
  ) : null;
};

export default App;
