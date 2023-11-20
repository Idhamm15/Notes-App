import React from 'react';
import NoteItemBody from './NoteItemBody';
// import NoteItemImage from './NoteItemImage';
import DeleteButton from './DeleteButton';
 
function NoteItem({ id, title, body, archieved, createdAt, onDelete }) {
 return (
   <div className="note-item">
     {/* <NoteItemImage imageUrl={imageUrl} /> */}
     <NoteItemBody title={title} body={body} archieved={archieved} createdAt={createdAt} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NoteItem;