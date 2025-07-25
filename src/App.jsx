import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "./store/actions/authSlice";
import { Header, Footer, Mainroutes } from "./components/index";
import Preloader from "./components/Preloader";
import authSer from "./services/authSer";

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    authSer
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setAuthChecked(true));
  }, [dispatch]);

  if (initialLoading) return <Preloader />;
  if (!authChecked) return null;

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
