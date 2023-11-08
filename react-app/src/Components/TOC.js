import React, {Component} from 'react';

class TOC extends Component {
    render() {
      console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}>
          <a 
          href={"/content/"+data[i].id}
          //if) data-something={data[i].id}
          data-id= {data[i].id}
          onClick={function(e){
            e.preventDefault();
            //console.log(e.target.dataset.id); 몇 번 째 content인지 확인
            this.props.onChangePage(e.target.dataset.id);
            //this.props.onChangePage(e.target.dataset.something);
          }.bind(this)}
          >{data[i].title}</a>
          </li>);
        i += 1;
      }
      return (
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

  export default TOC;