import logo from './logo.svg';
import './App.css';
import { Index } from './pages/Index';
import { Upload } from './pages/Upload';
import { Model} from './pages/Model';
import { Train} from './pages/Train';
import { Layout } from './components/layout/Layout';
import {Route, Switch,useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Slide from '@material-ui/core/Slide';
import { DataOverview } from './pages/DataOverView';

function App() {
  const location = useLocation();

  return (
    <Layout title = "Food Waste Prediction Project">
      <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => console.info("exit complete")}>
        <Switch location={location} key={location.pathname}> 
          <Route path="/upload" component={Upload}/>
          <Route path="/train" component={Train}/>
          <Route path="/dataOverview" component = {DataOverview}/>
          <Route path="/model" component={Model}/>
          <Route path="/" component={Index}/>
        </Switch>
      </AnimatePresence>
        
    </Layout>
  );
}

export default App;
