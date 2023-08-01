import * as React from 'react';
import './style.css';
import explorer from './data';
import TreeView from './TreeView';

export default function App() {
  return (
    <div>
      <h1></h1>
      {explorer.map((row) => {
        return <TreeView data={row} />;
      })}
    </div>
  );
}
