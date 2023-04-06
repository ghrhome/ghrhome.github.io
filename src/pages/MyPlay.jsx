// pages/index.js

import React from 'react';
import {useEffect, useState} from 'react';
import {Typography, Paper, Grid,IconButton} from '@mui/material';
import {Howl, Howler} from 'howler';
import {VolumeUp,Face6} from '@mui/icons-material';

//todo：https://github.com/ghrhome/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js
//todo：https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/
//todo：https://mdn.github.io/dom-examples/web-speech-api/phrase-matcher/

export default function MyPlay() {
    let voices = [];
    const [sound,setSound] = useState(null);
    const [voice,setVoice] = useState(null);
    const [volume,setVolume] = useState(1);
    const [speed,setSpeed] = useState(1);
    const [rate,setRate] = useState(1);
    const [pitch,setPitch] = useState(1);
    const [inputTxt,setInputTxt] = useState(null);
    const synth = window.speechSynthesis;
    useEffect(()=>{
        console.log(synth.getVoices())
    },[]);

    const playSound = () => {
        console.log("playSound");
        const sound = new Howl({
            src: [require('./media/hello.m4a')],
            onplay: function(){
                console.log('onplay');
            },
            onend: function(){
                console.log('Finished!');
            }
        });
        sound.play();
        setSound(sound);
    }

    const speak = () => {
        if (synth.speaking) {
            console.error("speechSynthesis.speaking");
            return;
        }

        if (inputTxt.value !== "") {
            const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

            utterThis.onend = function (event) {
                console.log("SpeechSynthesisUtterance.onend");
            };

            utterThis.onerror = function (event) {
                console.error("SpeechSynthesisUtterance.onerror");
            };

            //todo:选择声音
           /* const selectedOption =
                voiceSelect.selectedOptions[0].getAttribute("data-name");

            for (let i = 0; i < voices.length; i++) {
                if (voices[i].name === selectedOption) {
                    utterThis.voice = voices[i];
                    break;
                }
            }*/
            utterThis.pitch = pitch.value;
            utterThis.rate = rate.value;
            synth.speak(utterThis);
        }
    }

    const playTrans = () => {
        console.log("playTrans");
        //根据浏览器支持情况，选择不同的语音合成接口
        if (synth.speaking) {
            console.error('speechSynthesis.speaking');
            return;
        }
        if (synth.paused && synth.resume) {
            return synth.resume();
        }
        const utterThis = new SpeechSynthesisUtterance('你好');
        utterThis.onend = function (event) {
            console.log('SpeechSynthesisUtterance.onend');
        }
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror');
        }
        //utterThis.voice = synth.getVoices()['default'];
        //voice选择中文男声
        utterThis.voice = synth.getVoices()[65];

        utterThis.pitch = pitch;
        utterThis.rate = rate;
        utterThis.volume = volume;
        synth.speak(utterThis);
        //setVoice(utterThis);

    }

    return (
        <div style={{margin: "0 auto", width: "800px"}}>
            <Typography variant="h5" align="center">Play</Typography>

            <div>
                <IconButton color="primary" aria-label="voice"  onClick={playSound}>
                    <Face6></Face6>
                </IconButton>
                <IconButton color="primary" aria-label="trans" onClick={playTrans}>
                    <VolumeUp></VolumeUp>
                </IconButton>
            </div>
        </div>
    );
}
