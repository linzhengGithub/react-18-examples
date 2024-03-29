# react-18

## concurrent - 并发
### 特点(任务优先级)
1. 渲染是可中断的 (以前React中的update是同步渲染)
   如何做到任务中断 - fiber
2. 被遗弃的任务(不重要的update可被遗弃)
3. 状态复用(offScreen)

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
## Suspense
```ts
function Suspense_page() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Component />
    </Suspense>
  );
}
```
### transition
react的update分两种

* urgent updates - 紧急更新(用户的直接交互)
* transition - 过渡更新(一个视图到领一个视图)

startTransition 是立即执行的与suseetTimeout不同

hook api(useTransition) 可以获取到过渡(transition)的实时状态
```ts
import { useTransition } from 'react';
const [isPending, startTransition] = useTransition();
```
#### Suspense和transition结合

#### useDeferredValue
帮助实现防抖和节流,接口一个变量 useDeferredValue(value)

## 新的Hooks
### useId

### useSyncExternalStore
可用于外部数据的读取与订阅;
代替手动实现状态的管理

### useInsertionEffect
它会在DOM变更前同步触发
