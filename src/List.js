import React from 'react';



function List(props) {
  const headers = props.header.map()
  return (
    <section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
          <div class="Card">
            <button type="button">delete</button>
            <h3>First card</h3>
            <p>lorem ipsum</p>
          </div>
          <div class="Card">
            <button type="button">delete</button>
            <h3>Second card</h3>
            <p>lorem ipsum</p>
          </div>
          <div class="Card">
            <button type="button">delete</button>
            <h3>Fifth card</h3>
            <p>lorem ipsum</p>
          </div>
          <div class="Card">
            <button type="button">delete</button>
            <h3>Sixth card</h3>
            <p>lorem ipsum</p>
          </div>
          <div class="Card">
            <button type="button">delete</button>
            <h3>Seventh card</h3>
            <p>lorem ipsum</p>
          </div>
          <div class="Card">
            <button type="button">delete</button>
            <h3>Tenth card</h3>
            <p>lorem ipsum</p>
          </div>
          <div class="Card">
            <button type="button">delete</button>
            <h3>Twelfth card</h3>
            <p>lorem ipsum</p>
          </div>
          <div class="Card">
            <button type="button">delete</button>
            <h3>Thirteenth card</h3>
            <p>lorem ipsum</p>
          </div>
            <button type="button" class="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
  );
}

export default List;