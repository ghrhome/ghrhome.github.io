import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items1 = [
    { id: 'item1', content: 'Item 1' },
    { id: 'item2', content: 'Item 2' },
    { id: 'item3', content: 'Item 3' },
];

const items2 = [
    { id: 'item4', content: 'Item 4' },
    { id: 'item5', content: 'Item 5' },
    { id: 'item6', content: 'Item 6' },
];

const Container = ({ items, droppableId }) => {
    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                        display: 'flex',
                        padding: 10,
                        minHeight: 100,
                    }}
                >
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 8px 0 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color: 'white',
                                        ...provided.draggableProps.style,
                                    }}
                                >
                                    {item.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

const Example = () => {
    const [state, setState] = useState({ items1, items2 });

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = [...state[source.droppableId]];
            const [removed] = items.splice(source.index, 1);
            items.splice(destination.index, 0, removed);
            setState({ ...state, [source.droppableId]: items });
        } else {
            const sourceItems = [...state[source.droppableId]];
            const destItems = [...state[destination.droppableId]];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setState({ ...state, [source.droppableId]: sourceItems, [destination.droppableId]: destItems });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container items={state.items1} droppableId="items1" />
            <Container items={state.items2} droppableId="items2" />
        </DragDropContext>
    );
};

export default Example;
