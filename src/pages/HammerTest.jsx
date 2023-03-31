import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Hammer from 'hammerjs';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 10,
    },
    dropzone: {
        width: 200,
        height: 200,
        backgroundColor: 'gray',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const App = () => {
    const buttonRef = useRef(null);
    const dropzoneRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const dropzone = dropzoneRef.current;

        const mc = new Hammer.Manager(button);
        const pan = new Hammer.Pan();
        mc.add(pan);

        mc.on('panstart', (ev) => {
            button.style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px)`;
        });

        mc.on('panmove', (ev) => {
            button.style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px)`;
        });

        mc.on('panend', (ev) => {
            const buttonRect = button.getBoundingClientRect();
            const dropzoneRect = dropzone.getBoundingClientRect();

            if (buttonRect.left >= dropzoneRect.left && buttonRect.right <= dropzoneRect.right && buttonRect.top >= dropzoneRect.top && buttonRect.bottom <= dropzoneRect.bottom) {
                onDrop();
            } else {
                button.style.transform = 'none';
            }
        });

        return () => {
            mc.destroy();
        };
    }, []);

    const onDrop = () => {
        console.log('Button dropped');
    };

    return (
        <View style={styles.container}>
            <View ref={buttonRef} style={styles.button}>
                <Text style={styles.text}>Drag me!</Text>
            </View>
            <View ref={dropzoneRef} style={styles.dropzone}>
                <Text style={styles.text}>Drop here!</Text>
            </View>
        </View>
    );
};

export default Page;
