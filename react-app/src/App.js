import React ,{Component} from 'react';
import TOC from "./Components/TOC"
import Content from "./Components/Content"
import Subject from "./Components/Subject"
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        React
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    )
  }
}

export default App;
