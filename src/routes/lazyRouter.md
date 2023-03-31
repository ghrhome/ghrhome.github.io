react18中发现嵌套路由的活儿框架已经干了。勤劳的框架，我们直接使用就好了
````
npm install react-router-dom react-router --save
````
###创建src/routers.tsx
````
import React, {lazy, Suspense} from 'react';
import {RouteObject, useRoutes} from 'react-router'
import Loading from '@/component/loading/loading';
import Home from '@/component/home/home'

let Page1 = lazy(()=>import('./component/page/page1'));
const routes:RouteObject[]=[{
path:'/',
element:<Home/>,
children:[{
path:'/page1'
element:<Suspense fallback={<Spin/>}><Page1/></Suspense>
}]
}];

export default function Routers(){
let element = useRoutes(routes);
return element;
}
````

###修改src/index.tsx
````
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import Routers from './routers';

const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);

root.render(
<Recat.strictMode>
<BrowserRouter>
<Routers/>
</BrowserRouter>
</Recat.strictMode>
)
````