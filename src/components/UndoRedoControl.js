import React from 'react'

const UndoResetControl = ({ onSave, onUndo, onRedo }) => {
  
  const save = (item) =>{
    onSave(item);
  }

  const undo = (item) =>{
    onUndo(item);
  }

  const redo = (item) =>{
    onRedo(item);
  }

  return (
    <div className ='flex-container'>
      <div className='flex-right'>
        <button type='button' onClick={save}>
          Save
        </button>
      </div>
      <div>
        <button type='button' onClick={redo}>
          Redo
        </button>
      </div>
      <div>
        <button type='button' onClick={undo}>
          Undo
        </button>
      </div>
    </div>
  );
};

export default UndoResetControl;