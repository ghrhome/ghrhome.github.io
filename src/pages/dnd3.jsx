import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialItems = [
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
];

const TaskItem = ({ task, index, deleteTask }) => {
    return (
        <div className="task-item">
            <div className="task-content">{task.content}</div>
            <button className="delete-button" onClick={() => deleteTask(index)}>删除</button>
        </div>
    );
};

const App = () => {
    const [items1] = useState(initialItems);
    const [items2, setItems2] = useState([]);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorderList(
                getItemList(source.droppableId),
                source.index,
                destination.index
            );
            setItemList(source.droppableId, items);
        } else {
            const sourceItems = getItemList(source.droppableId);
            const destItems = getItemList(destination.droppableId);

            if (source.droppableId === "list1") {
                const item = sourceItems[source.index];
                const newItem = { ...item, id: uuidv4() };
                setItems2((items) => [...items, newItem]);
            } else {
                const result = moveItem(sourceItems, destItems, source, destination);
                setItemList(source.droppableId, result[source.droppableId]);
                setItemList(destination.droppableId, result[destination.droppableId]);
            }
        }
    };

    const onDelete = (item) => {
        setItems2((items) => items.filter((i) => i.id !== item.id));
    };

    const getItemList = (id) => {
        return id === "list1" ? items1 : items2;
    };

    const setItemList = (id, items) => {
        if (id === "list1") {
            return;
        }
        setItems2(items);
    };

    const reorderList = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const moveItem = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);

    }

        const onDeleteAll = () => {
            setItems2([]);
        };

        return (
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Droppable droppableId="list1">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    border: "1px solid gray",
                                    padding: "10px",
                                    width: "40%",
                                    minHeight: "200px",
                                }}
                            >
                                <h2>List 1</h2>
                                {items1.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    userSelect: "none",
                                                    padding: "16px",
                                                    margin: "0 0 8px 0",
                                                    minHeight: "50px",
                                                    backgroundColor: "#f2f2f2",
                                                    border: "1px solid gray",
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
                    <Droppable droppableId="list2">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    border: "1px solid gray",
                                    padding: "10px",
                                    width: "40%",
                                    minHeight: "200px",
                                    backgroundColor: snapshot.isDraggingOver ? "#e6e6e6" : "inherit",
                                }}
                            >
                                <h2>List 2</h2>
                                {items2.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    userSelect: "none",
                                                    padding: "16px",
                                                    margin: "0 0 8px 0",
                                                    minHeight: "50px",
                                                    backgroundColor: snapshot.isDragging
                                                        ? "#263B4A"
                                                        : "#f2f2f2",
                                                    color: snapshot.isDragging ? "#fff" : "#000",
                                                    border: "1px solid gray",
                                                    ...provided.draggableProps.style,
                                                }}
                                            >
                                               {/* {item.content}*/}
                                                <TaskItem task={item} index={index} deleteTask={onDelete} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                                <button onClick={onDeleteAll}>Delete All</button>
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        );
    };


export default App;
