import { useEffect, useState } from "react";
import GroupnameIcon from "../GroupnameIcon";
import "./Notes.css";
import { IoMdSend } from "react-icons/io";
import dateTime from "../DateTime";
import { GoDotFill } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";

const Notes = ({ selectedGroup, setSelectedGroup }) => {
  const [input, setInput] = useState({
    text: "",
    timestamp: "",
  });
  const [storedNotes, setStoredNotes] = useState([]);

  const handleInputChange = (event) => {
    const currentTime = new Date().toLocaleString();
    setInput({
      text: event.target.value,
      timestamp: currentTime,
    });
  };

  const handleSubmitNotes = () => {
    if (!selectedGroup || !selectedGroup.groupName) return;
    const grpName = selectedGroup.groupName;
    const existingNotes = JSON.parse(localStorage.getItem(grpName)) || [];
    const updatedNotes = [...existingNotes, input];
    localStorage.setItem(grpName, JSON.stringify(updatedNotes));
    setStoredNotes(updatedNotes);
    setInput({ text: "", timestamp: "" });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmitNotes();
    }
  };

  useEffect(() => {
    if (selectedGroup && selectedGroup.groupName) {
      const grpName = selectedGroup.groupName;
      const notes = localStorage.getItem(grpName);
      if (notes) {
        setStoredNotes(JSON.parse(notes));
      } else {
        setStoredNotes([]);
      }
    }
  }, [selectedGroup]);

  return (
    <div className="box">
      <header className="header">
        <button className="closeBtn" onClick={() => setSelectedGroup(null)}>
          <FaArrowLeftLong />
        </button>
        <span
          className="groupIcon"
          style={{ backgroundColor: selectedGroup.color }}
        >
          <div className="Icon">
            <GroupnameIcon groupName={selectedGroup.groupName} />
          </div>
        </span>
        <h1 className="groupName">{selectedGroup.groupName}</h1>
      </header>

      <div className="notes">
        {storedNotes.map((notes, index) => {
          const { date, time } = dateTime(notes.timestamp);
          return (
            <div className="note" key={index}>
              <p>{notes.text}</p>
              <span className="datetime">
                {date} <GoDotFill /> {time}
              </span>
            </div>
          );
        })}
      </div>

      <div className="textarea-box">
        <textarea
          className="textarea"
          value={input.text}
          placeholder="Enter your text here..........."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button
          type="button"
          className="sendIcon"
          style={{
            cursor: `${input.text === "" ? "not-allowed" : "pointer"}`,
            color: `${input.text === "" ? "#b9bbc0" : "#001f8b"}`,
          }}
          onClick={() => handleSubmitNotes()}
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Notes;
