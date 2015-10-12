# react-dnd-multi-backend

Laptops with touchscreens exist, so it's nice to be able to support both mouse and touch
interaction on such devices, instead of just one or the other.  This enables you to
support both mouse and touch interaction with React DnD.

## Usage

Simply pass the desired backends as arguments to `MultiBackend`.

## Example

```jsx
import React, {Component} from 'react';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import TouchBackend from 'react-dnd-touch-backend';
import {DragDropContext} from 'react-dnd';

@DragDropContext(MultiBackend(HTML5Backend, TouchBackend))
export default class AppShell extends Component {
  ...
}
```
