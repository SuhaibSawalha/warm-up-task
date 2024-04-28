import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Main />
    </div>
  );
}

function Main() {
  const [filteredText, setFilteredText] = useState("");

  const [activeMembers, setActiveMembers] = useState([]);
  const changeActiveMember = (index) => {
    if (activeMembers.includes(index)) {
      setActiveMembers(activeMembers.filter((member) => member !== index));
    } else {
      setActiveMembers([...activeMembers, index]);
    }
  };
  const removeActiveMembers = () => {
    setActiveMembers([]);
  };

  return (
    <main>
      <h4>Add members to Front-end development team</h4>
      <SearchTab setFilteredText={setFilteredText} />
      <MembersList
        filteredText={filteredText}
        activeMembers={activeMembers}
        changeActiveMember={changeActiveMember}
      />
      <Buttons removeActiveMembers={removeActiveMembers} />
    </main>
  );
}

function SearchTab(props) {
  return (
    <div className="searchTab">
      <div className="searchBox">
        <p>&#x1F50D;</p>
        <input
          type="text"
          placeholder="Find members"
          onChange={(e) => props.setFilteredText(e.target.value)}
        />
      </div>
      <div className="line"></div>
    </div>
  );
}

const members = [
  "Suhaib Sawalha",
  "Haytham Ibrahim",
  "Omar Dere",
  "Sudqi Jawabreh",
  "Mazen Amria",
  "Ahmad Abbas",
];

function MembersList(props) {
  return (
    <div className="membersList">
      {members.map(
        (member, index) =>
          member.toLowerCase().includes(props.filteredText.toLowerCase()) && (
            <Member
              key={index}
              name={member}
              isActive={props.activeMembers.includes(index)}
              id={index}
              changeActive={props.changeActiveMember}
            />
          )
      )}
    </div>
  );
}

function Member(props) {
  return (
    <button
      className={`member ${props.isActive ? "active" : ""}`}
      onClick={() => props.changeActive(props.id)}
    >
      <div>
        <div>
          <p>&#x1F464;</p>
          <p>{props.name}</p>
        </div>
        <div className="circle"></div>
      </div>
    </button>
  );
}

function Buttons(props) {
  return (
    <div className="buttons">
      <button className="btn cancel" onClick={props.removeActiveMembers}>
        Cancel
      </button>
      <button
        className="btn save"
        onClick={() =>
          alert("New members were added to the Front-end development team!")
        }
      >
        Save
      </button>
    </div>
  );
}

export default App;
