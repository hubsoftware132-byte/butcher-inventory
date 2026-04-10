import React, { useState } from 'react';

const App = () => {
  const [inventory, setInventory] = useState<{ id: number; name: string; quantity: number }[]>([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);

  const addItem = () => {
    const newItem = {
      id: inventory.length + 1,
      name: itemName,
      quantity: itemQuantity,
    };
    setInventory([...inventory, newItem]);
    setItemName('');
    setItemQuantity(0);
  };

  const removeItem = (id: number) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Butcher Inventory Management</h1>
      <input 
        type='text' 
        value={itemName} 
        onChange={(e) => setItemName(e.target.value)}
        placeholder='Item Name'
      />
      <input 
        type='number' 
        value={itemQuantity} 
        onChange={(e) => setItemQuantity(Number(e.target.value))}
        placeholder='Quantity'
      />
      <button onClick={addItem}>Add Item</button>

      <h2>Inventory List</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} 
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;