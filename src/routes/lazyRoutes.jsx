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