import { useEffect, useRef, useState } from "react";
import "./CreateGroup.css";

const CreateGroup = ({ setOpenModal, setGroupData }) => {
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({ groupName: "", color: "" });
  const [active, setActive] = useState("");
  const [error, setError] = useState({});
  const color = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
  const validate = () => {
    const newErrors = {};
    if (!formData.groupName) {
      newErrors.groupName = "Group Name is required";
    }
    if (!formData.color) {
      newErrors.color = "Please select a color";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleModalClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  }

  const handleColorChange = (color) => {
    setFormData({ ...formData, color });
    setActive(color)
    setError((prevErrors) => ({ ...prevErrors, color: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    if (!error.groupName || !error.color) {
      setGroupData(formData);
      setError({});
      setOpenModal(false)
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])
  return (
    <>
      <div
        className="cgOverlay"
        onClick={handleModalClose}
      >
        <form className="cgBox" ref={modalRef} onSubmit={handleSubmit}>
          <p className="cgHeading">Create New Group</p>
          <div className="formGroup">
            <label className="modalGrp">Group Name</label>
            <input
              ref={inputRef}
              type="text"
              className="cgText"
              name="groupName"
              placeholder="Enter group name"
              onChange={handleChange}

            />
          </div>
          {error.groupName && <p style={{ color: 'red' }} className="error">{error.groupName}</p>}
          <div className="formGroup">
            <label className="cgColor">Choose Colour</label>
            {color.map((color, index) => (
              <button
                className="buttonColor"
                name="color"
                key={index}
                style={{
                  background: color,
                  border: `${active == color ? "2px solid black" : "none"}`
                }}
                onClick={() => handleColorChange(color)}
                type="button"
              ></button>
            ))}
          </div>
          {error.color && <p style={{ color: 'red' }} className="error">{error.color}</p>}
          <button type="submit" className="createGroup">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateGroup
