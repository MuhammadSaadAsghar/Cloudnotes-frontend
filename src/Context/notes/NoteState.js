import NoteContext from "./NoteContext";
import {useState} from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "695bba494c5349ae89d97e01",
      user: "6954b55a8b311d1798fc0ea8",
      title: "my notes",
      description: "please walk up",
      tag: "persnol",
      date: "2026-01-05T13:19:05.713Z",
      __v: 0,
    },
    {
      _id: "695bba624c5349ae89d97e03",
      user: "6954b55a8b311d1798fc0ea8",
      title: "my notes is best",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:30.362Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e05",
      user: "6954b55a8b311d1798fc0ea8",
      title: "my notes is best",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e05",
      user: "6954b55a8b311d1798fc0ea8",
      title: "my notes is best",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e05",
      user: "6954b55a8b311d1798fc0ea8",
      title: "my notes is best",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
    {
      _id: "695bba634c5349ae89d97e05",
      user: "6954b55a8b311d1798fc0ea8",
      title: "my notes is best",
      description: "please send me data",
      tag: "persnol",
      date: "2026-01-05T13:19:31.419Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial)

  return (
    <>
      <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
        </NoteContext.Provider>
    </>
  );
};

export default NoteState;
