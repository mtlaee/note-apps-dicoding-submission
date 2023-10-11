import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      title: "",
      body: "",
      currentChar: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onSetBodyHandler = this.onSetBodyHandler.bind(this);
    this.onSubmitEvenHandler = this.onSubmitEvenHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const limitcharacter = 50;
    const length = event.target.value.length;
    const current_char = limitcharacter - length;
    if (length <= limitcharacter) {
      this.setState({
        title: event.target.value,
        currentChar: current_char,
      });
    }
  }

  onSetBodyHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEvenHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="notes_input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEvenHandler}>
          <p className="notes_char_limit">
            Sisa Karakter Sisa karakter: {this.state.currentChar}
          </p>
          <input
            className="notes_title_input"
            type="text"
            placeholder="Ini adalah judul..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            required
          />
          <textarea
            className="notes_body_input"
            placeholder="Tuliskan catatanmu disini..."
            value={this.state.body}
            onChange={this.onSetBodyHandler}
            required
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
export default NoteInput;
