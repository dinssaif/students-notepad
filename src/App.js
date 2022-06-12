import { useEffect, useState } from "react";
import Button from "./components/Button";
import CardList from "./components/CardList";
import EmptyCard from "./components/EmptyCard";
import Input from "./components/Input";
import Alert from "./components/Alert";
import { createNode, getNotes, deleteNotes } from "./utils/api";

function App() {
  const [addData, setAddData] = useState(false);
  const [smode, setMode] = useState(true);
  const [alert, setAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [newData, setNewData] = useState([]);

  function changeData() {
    setAddData((prev) => {
      return !prev;
    });
    setTitle("");
    setNotes("");
  }
  function titleValue(event) {
    setTitle(event.target.value);
  }
  function notesValue(event) {
    setNotes(event.target.value);
  }
  async function submitForm(event) {
    event.preventDefault();
    try {
      const res = await createNode({
        title: title,
        note: notes,
      });
      getNotesHandler();
    } catch (error) {
      console.log(error);
    }

    setAlert(() => {
      if (title === "" && notes === "") {
        return true;
      }
    });
  }
  function removeAlert() {
    setAlert((prev) => {
      return !prev;
    });
  }

  const getNotesHandler = async () => {
    try {
      const res = await getNotes();
      setNewData([...res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotesHandler();
    alert &&
      setTimeout(() => {
        setAlert(false);
      }, 3000);
  }, []);

  async function deleteItems(key) {
    try {
      const res = await deleteNotes({ id: key });
      setNewData([...res.data]);
    } catch (error) {
      console.log(error);
    }
  }

  function changemode() {
    setMode((prev) => {
      return !prev;
    });
  }

  let emptyState = <EmptyCard />;
  if (newData.length > 0) {
    emptyState = <CardList newData={newData} deleteItems={deleteItems} />;
  }
  return (
    <div className={`App ${smode ? "dark" : ""}`}>
      {alert && <Alert alert={removeAlert} />}
      <Button changeState={changeData} changemode={changemode} smode={smode} />
      {addData && (
        <Input
          submitForm={submitForm}
          titleValue={titleValue}
          notesValue={notesValue}
        />
      )}
      {emptyState}
    </div>
  );
}

export default App;
