import React, { useState } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import TestUseCallbackUseMemo from './test/test-usecallback-usememo'
import TestUseRef from './test/test-useRef'
import TestCustomHooks from './test/custom-hooks'
import TestUseDebounce from './test/use-debounce'
import TestUseThrottle from './test/use-throttle'
import TestUseIntersectionObserver from './test/use-intersectionObserver'
import TestUseImperativeHandle from './test/use-imperativeHandle'

interface ITitle {
  borderColor?: string;
  backgroundColor?: string;
  [propName: string]: any;
}

const ReactComponnet = (props: any) => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const delayConsole = () => {
    setTimeout(() => {
      console.log(count);
    }, 4000)
  }

  const clear = () => {
    setCount(0)
  }

  const getData = () => {

  }

  return (
    <ReactHooks>
      <div style={{margin: '20px 0 40px 0'}}>
        <a href="https://juejin.cn/post/6887132776512880654" target="__blank">自定义hooks博客链接</a>
      </div>
      <div style={{ border: '1px solid black', padding: '14px', margin: '14px 0' }}>
        <UseStateCopmonnet>
          <Title borderColor="#67ce00" backgroundColor="#F6FFED">useState</Title>
          <br /><p>{count}</p><br />
          <Button onClick={add}>Add</Button> &nbsp;
        <Button onClick={delayConsole}>延时console</Button>  &nbsp;
        <Button onClick={clear}>清零</Button><br />
          <Phenomenon>现象：点击add5次后，点击console，再点击add两次，显示5，而不是7，每次延时console.log显示的是，那一次的count值，每次渲染都是独立分开的</Phenomenon>
        </UseStateCopmonnet>
        <UseFetchComponent>
          <Title borderColor="#e821ff" backgroundColor="#fdf2ff">useFetch</Title><br />
          <Button onClick={getData}>useFetch请求测试</Button> &nbsp;
        </UseFetchComponent>
        <LinkOther>
          <Title borderColor="#ff533d" backgroundColor="#FFF2F0">资料</Title>
          <div>
            <a href="https://juejin.im/post/6844904132164190221">useState资料</a>
          </div>
        </LinkOther>
      </div>

      <TestUseCallbackUseMemo />
      <TestUseRef />
      <TestUseImperativeHandle />
      <TestCustomHooks />
      <TestUseDebounce />
      <TestUseThrottle />
      <TestUseIntersectionObserver />
    </ReactHooks>
  )
}

const ReactHooks = styled.div`
  `;

const UseStateCopmonnet = styled.div`
    background: #fff;
    margin: 10px 0;
  `

const Phenomenon = styled.div`
    font-size: 12px;
    line-height: 18px;
    padding-top: 20px;
  `

const Title = styled.div`
    display: inline-block;
    padding: 10px 30px;
    margin-bottom: 30px;
    background: ${(props: ITitle) => props.backgroundColor};
    border: 1px solid ${(props: ITitle) => props.borderColor};
    border-radius: 2px;
  }
  `

const LinkOther = styled(UseStateCopmonnet)`
  margin-top: 10px;
`


const UseFetchComponent = styled(UseStateCopmonnet)`
  
`


export default ReactComponnet
