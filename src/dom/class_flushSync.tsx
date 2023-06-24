import { flushSync } from 'react-dom';
import '../App.css';
import { Component } from "react"

interface State {
  count: number
}

export default class SyncButton extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increase = () => {
    const { count } = this.state
    // setTimeout(() => {
    //   this.setState({
    //     count: count + 1
    //   })
    // })
    flushSync(() => {
      this.setState({
        count: count + 1
      })
    });
    console.log('change count', this.state);
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>
          <button onClick={this.increase}>Increase Count: {count}</button>
        </div>
      </>
    );
  }

}
