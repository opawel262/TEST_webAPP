import { useEffect, useState } from "react";
import backendApi from "../api";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const getNote = () => {
    backendApi.get("api/users/notes/").then((response) => {
      setNotes(response.data).catch((error) => {
        console.error(error);
      });
    });
  };
  const createNote = () => {
    backendApi
      .post("api/users/notes/", {
        title: title,
        content: content,
      })
      .then((response) => {
        console.log(response.data);
        getNote();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getNote();
  }, []);
  return (
    <div>
      <h1>Your notes </h1>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={createNote}>Create Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title} - {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
