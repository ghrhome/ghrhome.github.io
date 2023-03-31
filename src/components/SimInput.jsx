import React, {useEffect,useState} from 'react';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const SimInput = (props) => {
    const [text, setText] =useState('')

    async function test(str) {
        let strArray = str.split('');
        let styping ="";
        for(let i =0; i<strArray.length; i++){
            styping += strArray[i]
            setText(styping+"  ")
            await sleep(300);
            setText(styping+" |")
            await sleep(200)

           /* for(let j=0;j<=1;j++){
                setText(styping+"  ")
                await sleep(200);
                setText(styping+" |")
                await sleep(150)
            }*/
        }
        setText(styping+"  ")
    }

    useEffect(()=>{
            test('hello world')
        },[])

    return (
        <div style={{textAlign:'left',fontSize:18}}>
            {text}
        </div>
    );
};
