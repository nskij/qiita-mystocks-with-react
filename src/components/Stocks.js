import React from "react";
import axios from "axios";

const URL = "https://qiita.com/api/v2/users/nskij/stocks";

class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      isLoading: true,
      isError: false
    };
    this.getStocks();
  }

  getStocks() {
    axios
      .get(URL)
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState({
          stocks: data,
          isLoading: false
        })
      })
      .catch(() => {
        this.setState({ isError: true });
        console.log("error!");
      });
  }

  render() {
    if(this.state.isLoading){
      return <p>Now Loading...</p>
    }
    if(this.state.isError){
      return <p>Error!</p>
    }
    return (
      <div className="stocks">
      <h1>My Qiita Stocks</h1>
        <ul>
          {this.state.stocks.map((item) => (
            <React.Fragment key={item.id}>
              <li>
                <a href={item.url} target="_blank">{item.title}</a>
              </li>
              <span>
                Likes: {item.likes_count}
              </span>
              <div>
                Tags: {item.tags.map((tag) =>(
                  <span key={tag.name}>
                    {tag.name}, 
                  </span>
                ))}
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}

export default Stocks;
