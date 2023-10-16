

import './App.css';
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import { Provider } from 'react-redux';
import 'default-passive-events';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ResultsPage from './components/ResultsPage';
import store from "./utils/store";
import LoginPage from './components/LoginPage';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "results",
        element: <ResultsPage />
      }
    ]
  },
  {
    path:"/login",
    element: <LoginPage />
  }
]);

function App() {
  return (
    <div className='App'>
      <Head />
      <Body />
    </div>
  );
}

export default App;
