import React from 'react';
     
function NoteItemBody({ title, body, archieved, createdAt }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__username">{body}</p>
     <p className="note-item__username">{archieved}</p>
     <p className="note-item__username">{createdAt}</p>
   </div>
 );
}
 
export default NoteItemBody;