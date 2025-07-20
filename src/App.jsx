import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from "./store/actions/authSlice";
import {Header , Footer , Mainroutes} from "./components/index"
import Home from "./Home";

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
    <div className="min-h-screen flex flex-wrap content-between ">
      <div className="w-full block">
        <Header />
        <main>
          <Mainroutes />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
};

export default App;
