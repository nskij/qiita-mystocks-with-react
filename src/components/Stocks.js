import React from "react";
import axios from "axios";

const URL = "https://qiita.com/api/v2/users/nskij/stocks";

class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: []
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
          stock: data
        })
      })
      .catch(() => {
        console.log("error!");
      });
  }

  render() {
    return (
      <div className="stocks">
        <ul>
          {this.state.stock.map((item) => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Stocks;
