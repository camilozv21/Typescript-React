import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuest([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>

      <ul>
        {guests.map((el, i) => (
          <li key={el + i}>{el}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
