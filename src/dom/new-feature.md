# react-18
## react-dom/client
### createRoot
```ts
import Component form './component'

// 原先的做法是: 
ReactDom.render(<Component/>, document.getElementById('root'))

// 现在的做法是: 
// 抽离root部分,实现复用
const root = createRoot(document.getElementById('root'))
root.render(<Component/>)
root.render(<Component2/>)
```

### 自动批量处理
react-18之后不在支持setTimeout实现setState的同步效果
可以使用flushSync (非特定情况还是使用异步, 仅限类组件)
```ts
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
```
