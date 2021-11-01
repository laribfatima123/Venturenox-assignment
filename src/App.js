/* eslint-disable */
import './App.css';
// import { Route, Link, BrowserRouter } from 'react-router-dom';
import Blog from "./Components/Blog";
import BlogSingle from "./Components/BlogSingle";
function App() {
  return (
    <div className="App">



        {/*<Router>*/}
        {/*    <div>*/}
        {/*        <Route exact path="/" component={Blog} />*/}
        {/*        <Route path="/BlogSingle" component={BlogSingle} />*/}
        {/*       */}
        {/*    </div>*/}
        {/*</Router>*/}
        <Blog/>
        <BlogSingle/>

    </div>
  );
}

export default App;
