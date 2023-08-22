import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { bindActionCreators } from 'redux';
const ThemeContext = createContext();

export function Provider(props) {
  let { store, children } = props;
  return (
    <ThemeContext.Provider value={{ store }}>{children}</ThemeContext.Provider>
  );
}

// connect: 获取上下文的store，然后把公共状态，要派发的方法等都基于属性传递给需要渲染的组件，把让组件更新的方法放在redux事件池中
export function connect(mapStateToProps, mapDispatchToProps) {
  // 处理默认值
  if (!mapStateToProps) {
    mapStateToProps = () => {
      return {};
    };
  }
  if (!mapDispatchToProps) {
    mapDispatchToProps = (dispatch) => {
      return {
        dispatch,
      };
    };
  }
  return function currying(Component) {
    // Component: 最终要渲染的组件
    // HOC: 我们最后基于export default导出的组件
    return function HOC(props) {
      // 获取上下文中的store
      const { store } = useContext(ThemeContext);
      const { getState, dispatch, subscribe } = store;
      // 向事件池当中加入让组件更新的方法
      const [, forceUpdate] = useState(0);
      useEffect(() => {
        const unsubscribe = subscribe(() => forceUpdate(+new Date()));
        return () => {
          // 组件释放的时候执行，把放在事件池中的函数移除掉
          unsubscribe();
        };
      }, []);

      // mapStateToProps/mapDispatchToProps，把执行的返回值，作为属性传递给组件
      const state = getState();
      const nextState = useMemo(() => {
        return mapStateToProps(state);
      }, [state]);

      let dispatchProps = {};
      if (typeof mapDispatchToProps === 'function') {
        // 是函数直接执行即可
        dispatchProps = mapDispatchToProps(dispatch);
      } else {
        // 是actionCreator对象，需要经过bindActionCreator处理
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      }

      return (
        <Component {...props} {...nextState} {...dispatchProps}></Component>
      );
    };
  };
}
