import { useEffect, useState } from "react";
import Button from "./components/Button";
import CardList from "./components/CardList";
import EmptyCard from "./components/EmptyCard";
import Input from "./components/Input";
import Alert from "./components/Alert";

function App() {
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(newData));
    localStorage.setItem("mode", JSON.stringify(smode));
  });
  const x = JSON.parse(localStorage.getItem("items"));
  function checkMode() {
    const y = localStorage.getItem("mode");
    if (y === "false") {
      return false;
    } else {
      return true;
    }
  }
  const [addData, setAddData] = useState(false);
  const [smode, setMode] = useState(checkMode());
  const [alert, setAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [newData, setNewData] = useState(
    x
      ? x
      : [
          {
            key: "n1",
            title: "Javascript",
            notes:
              "Javascript is a multi-paradigm, high-level web programming language. It supports both declarative and imperative object-oriented programming techniques. Text data, regular expressions, and standard data structures are all supported by Javascript's application programming interfaces (API). It is one of the three essential technologies that power the internet, together with HTML and CSS.",
          },
          {
            key: "n2",
            title: "Python",
            notes:
              "Python is at the top of the list when it comes to the best programming languages. In all of its grandeur, Python is extremely popular among developers and data scientists due to its simplicity and adaptability. Python may be used to create web and desktop apps. Desktop applications with a graphical user interface, ML models, network servers, and much more.",
          },
        ]
  );

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
  function submitForm(event) {
    event.preventDefault();
    setNewData((prev) => {
      if (title === "" && notes === "") {
        return [...prev];
      } else
        return [
          {
            key: `${title.slice(1, 2)}${Math.random(10)}`,
            title: title,
            notes: notes,
          },
          ...prev,
        ];
    });

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

  useEffect(() => {
    alert &&
      setTimeout(() => {
        setAlert(false);
      }, 3000);
  });

  function deleteItems(key) {
    const filterData = newData.filter((item) => {
      return item.key !== key;
    });
    setNewData([...filterData]);
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
