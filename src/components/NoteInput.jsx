import React from 'react';
     
class NoteInput extends React.Component {

constructor(props) {
    super(props);
    
    // inisialisasi state
    this.state = {
        title: '',
        body: '',
        archived: false, // Inisialisasi archived
        createdAt: new Date().toISOString(),
    }
    
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onTitleChangeEventHandler(event) {
    this.setState(() => {
        return {
        title: event.target.value,
        }
    });
    }
    
    onBodyChangeEventHandler(event) {
    this.setState(() => {
        return {
        body: event.target.value,
        }
    });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();

      // Mendapatkan nilai timestamp untuk ID yang unik
      const timestamp = +new Date();

      const noteData = {
        id: timestamp,
        title: this.state.title,
        body: this.state.body,
        archived: this.state.archived,
        createdAt: this.state.createdAt,
      };
    this.props.addNote(noteData);
    console.log(noteData);
    }
 render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
       {/* <input type="text" placeholder="Nama" value={this.state.nama} onChange={this.onNameChangeEventHandler}/>
       <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}/> */}

       {/* Input */}
       <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
       <input type="text" placeholder="Isi" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
       <button type="submit">Tambah</button>
     </form>
   )
 }
}
 
export default NoteInput;