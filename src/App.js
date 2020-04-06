import React from 'react';
import Card from './Card';
import List from './List';

function App(props) {
  return (
    <main className='App'>
      <List header = {props.store.lists} cards = {props.store.allCards}/>
    </main>
  );

}

export default App;
