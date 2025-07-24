import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/actions/authSlice";
import { Header, Footer, Mainroutes } from "./components/index";
import Preloader from "./components/Preloader";

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true); // handles the one-time preloader
  const [authChecked, setAuthChecked] = useState(false); // makes sure auth is done
  const dispatch = useDispatch();

  // One-time preloader logic (only on first mount)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500); // same as Preloader animation
    return () => clearTimeout(timer);
  }, []);

  // Auth check
  useEffect(() => {
    authService
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

  // Only show preloader on first mount
  if (initialLoading) return <Preloader />;

  // Don't render app until auth check is done
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
