// @flow
import React, { useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
/*

const Root = styled.div`
  background-color: ${colors.B200};
  box-sizing: border-box;
  padding: ${grid * 2}px;
  min-height: 100vh;

  /!* flexbox *!/
  display: flex;
  flex-direction: column;
`;
*/

// fake data generator
const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
}));

// a little function to help us with reordering the result
const reorder =  (list, startIndex, endIndex) => {
    const result =[...list];
   // const [removed] = result.splice(startIndex, 1);
    const removed = result[startIndex];
    removed.id = removed.id+'a';
    result.splice(endIndex, 0, removed);

    return result;
};

const DND =() => {
    const [items, setItems] = useState(getItems(10));

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const newItems = reorder(
            items,
            result.source.index,
            result.destination.index
        );

        setItems([...newItems])
    }

    const grid = 8;

    const getItemStyle = (draggableStyle, isDragging) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey',

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250
    });

    useEffect(() => {
        console.log('useEffect');
    },[]);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {items.map((item, index) => (
                            <Draggable
                                id={item.id}
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div>
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            style={getItemStyle(
                                                provided.draggableProps.style,
                                                snapshot.isDragging
                                            )}
                                        >
                                            {item.content}
                                        </div>
                                       {/* {provided.placeholder}*/}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
export default DND;
