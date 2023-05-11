import React, { useEffect,useRef } from 'react'
import {fromEvent, scan,  Observable }  from 'rxjs'
const Page = () =>{
    const btnRef = useRef('button')

    const observable = new Observable((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.error('error');
            subscriber.complete();
        }, 1000);
    });

    useEffect(()=>{
        fromEvent(btnRef.current,'click')
            .pipe(scan(count=>count+1,0))
            .subscribe((count)=>{
                console.log(`${count} clicks`)
            }
        )
    },[])
    //toso: observable
    const observer = {
        next: x => console.log('Observer got a next value: ' + x),
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
    };

    useEffect(()=>{
        observable.subscribe(observer)
    },[])

    return (<>
        <h1>Rxjs</h1>

        <button ref={btnRef}>test</button>
    </>)
}

export default Page;