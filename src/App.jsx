import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from "./store/actions/authSlice";
import {Header, Footer, Mainroutes} from "./components/index";
import Preloader from "./components/Preloader";

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadApp = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        else dispatch(logout());
      } catch (error) {
        dispatch(logout());
      } finally {
        setTimeout(() => {
          setIsAppReady(true);
        }, 1500); // show preloader for 1.5 seconds
      }
    };

    loadApp();
  }, []);

  if (!isAppReady) return <Preloader />;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Mainroutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
