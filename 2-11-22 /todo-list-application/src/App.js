import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ToDoListItem (props) {
  const { itemText, onDeleteItemHandler } = props;
  const [isItemChecked, setIsItemChecked] = useState(false);

  const onCheckboxChanged = () => {
    setIsItemChecked(!isItemChecked);
  }
  const checkboxStyle = isItemChecked ? { textDecoration: 'line-through' } : {}

  return (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={checkboxStyle}>{itemText}</div>
    <input type="checkbox" onChange={onCheckboxChanged}></input>
    {/* <button onClick={() => onDeleteItemHandler(itemText)}>Delete</button> */}
  </div>
  );
}

function ToDoList() {
  const [toDoItems, setToDoItems] = useState([]);
  const [input, setInput] = useState('');

  const onAddItemClicked = () => {
    // toDoItems = [...toDoItems, input];
    // Doesn't work! Because doesn't trigger re-rendering of the component

    setToDoItems([...toDoItems, input]);
    setInput('');
  }

  const onInputChangeMethod = (eventArgs) => {
    const currentInput = eventArgs.target.value;
    setInput(currentInput);
  }

  const onDeleteItem = (itemIndex) => {
    const toDoItemsDuplicate = [...toDoItems]
    toDoItemsDuplicate.splice(itemIndex, 1);
    setToDoItems(toDoItemsDuplicate);
  }

  const isEmptyToDoList = toDoItems.length === 0;

  return (<div>
    <h1>ToDo List</h1>
    <input id="my-input" onChange={onInputChangeMethod} value={input} />
    <button onClick={onAddItemClicked}>Add Item</button>
    <div id="Items">
      {isEmptyToDoList ? <div>No todo items</div> :
       toDoItems.map((item, index) => (
        <div>
          <ToDoListItem 
            key={index} 
            itemText={item} 
            onDeleteItemHandler={onDeleteItem} />
            <button onClick={() => onDeleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  </div>)
}

function App() {
  return (
    <div style={{ backgroundColor: '#0190FE', height: '100vh' }} className="App">
      <ToDoList />
    </div>
  
  );
}

export default App;

