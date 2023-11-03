import React, {Component} from 'react';
import TOC from "./Components/TOC"
import Content from "./Components/Content"
import Subject from "./Components/Subject"
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'}
    }
  }
  render(){
    return (
      <div className="App">
        React
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    )
  }
}

export default App;
