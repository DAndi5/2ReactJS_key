import { useEffect, useState } from "react";
import "./styles.css";

const Item = ({ text }) => {
  const [isAccent, setIsAccent] = useState(false);
  useEffect(() => {
    setIsAccent(true);
    setTimeout(() => setIsAccent(false), 1_000);
  }, [text]);

  return (
      <div className={isAccent ? "bg-yellow-300  px-3" : " px-3"}>{text}</div>
  );
};

export const KeyInList = () => {
  const [items, setItems] = useState(() => [
    { text: "item 1", id: Math.random() },
    { text: "item 2", id: Math.random() },
    { text: "item 3", id: Math.random() }
  ]);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setItems((prevItems) => {
      const newItem = { text: `item ${prevItems.length + 1}`, id: 10 };
      return [...prevItems.slice(0, index), newItem, ...prevItems.slice(index)];
    });
  };

  return (
      <div className="flex flex-col gap-2">
        <ul>
          {items.map(({ text, id }) => (
              <li className="my-2" key={id}>
                <Item text={text} />
              </li>
          ))}
        </ul>
        <input
            type="number"
            value={index}
            onChange={({ target }) => setIndex(target.valueAsNumber)}
        />
        <button type="button" onClick={handleClick}>
          Add item
        </button>
      </div>
  );
};

export default function App() {
  return (
      <div className="App">
        <KeyInList />
      </div>
  );
}
