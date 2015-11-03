import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import { connect } from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory';

import Home from './home';
import Gallery from './gallery';
import Phone from './phone';
import Map from './map';
import Layout from './layout';
import {getInfo} from './actions';

let history = createHashHistory();

class NoMatch extends React.Component {
  render() {
    return(<div>Not Found</div>);
  }
}

export default class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const {dispatch} = this.props;
    //dispatch 可以触发一个 action,action是一个普通的map
    // 也可以触发一个action,action是一个function.function 第一个参数是dispatch,第二个参数是state,常用来做异步数据获取。
    dispatch(getInfo());

  }

  render() {
    return (
      <Router history={history}>
      <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="gallery" component={Gallery} />
      <Route path="phone" component={Phone} />
      <Route path="map" component={Map} />
      </Route>
      <Route path="*" component={NoMatch} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);

//rootReducer 接受action，--> 改变state(即返回新的state,即改变了store里的state)，然后被Provider包装的 component 检测到（component从store里面取出它所关注的state（ 用connect方法）），渲染到页面
//reducers 是所需要关注的所有的 action 的列表
