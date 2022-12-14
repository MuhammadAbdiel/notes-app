import React from "react";
import Empty from "./Empty";
import NotesItem from "./NotesItem";

const ActiveNotes = ({ notes, onDelete, onChangeArchive }) => {
  const activeNotes = !notes.length
    ? []
    : notes.filter((note) => note.archived === false);

  return (
    <>
      <h2>Active Notes</h2>
      {activeNotes.length === 0 ? (
        <Empty />
      ) : (
        <div className="notes-list">
          {activeNotes.map((note, idx) => {
            return (
              <NotesItem
                key={idx}
                note={note}
                onDelete={onDelete}
                onChangeArchive={onChangeArchive}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ActiveNotes;
