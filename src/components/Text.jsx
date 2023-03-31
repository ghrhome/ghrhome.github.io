import React, {useCallback, useState, useEffect} from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import {Slider, FormControl, FormLabel} from "@mui/material";

// components/user/Text.js
export const Text = ({text, fontSize}) => {
    const { connectors: {connect, drag},
        hasSelectedNode, hasDraggedNode,
        actions: {setProp} } = useNode((state) =>{
            console.dir(state)
            console.log(state.events.selected)
            return ({
                hasSelectedNode: state.events.selected,
                hasDraggedNode: state.events.dragged
            })
        }
    );

    const [editable, setEditable] = useState(false);

    useEffect(() => {
        !hasSelectedNode && setEditable(false)
    }, [hasSelectedNode]);

    return (
        <div
            ref={ref => connect(drag(ref))}
            onDoubleClick={e => setEditable(true)}
            style={{textAlign:'left'}}
        >
            {/*<p style={{fontSize}}>{text}</p>*/}
            <ContentEditable
                html={text}
                disabled={!editable}
                onChange={e =>
                    setProp(props =>
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                    )
                }
                tagName="p"
                style={{fontSize: `${fontSize}px`, textAlign:'left'}}
            />
            {
                hasSelectedNode ?  <FormControl className="text-additional-settings" size="small">
                    <FormLabel component="legend">Font size</FormLabel>
                    <Slider
                        defaultValue={fontSize}
                        step={1}
                        min={7}
                        max={50}
                        valueLabelDisplay="auto"
                        onChange={(_, value) => {
                            setProp(props => props.fontSize = value);
                        }}
                    />
                </FormControl>
                    : <p>no select</p>
            }

        </div>
    )
}

const TextSettings = () => {
    const { actions: {setProp}, fontSize } = useNode((node) => ({
        fontSize: node.data.props.fontSize
    }));

    return (
        <>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">Font size</FormLabel>
                <Slider
                    value={fontSize || 7}
                    step={7}
                    min={1}
                    max={50}
                    onChange={(_, value) => {
                        setProp(props => props.fontSize = value);
                    }}
                />
            </FormControl>
        </>
    )
}

Text.craft = {
    props: {
        text: "Hi",
        fontSize: 20
    },
    related: {
        settings: TextSettings
    }
}
