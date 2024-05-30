import { useRef } from 'react';

const Uncontrolled: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    // wert des Input ausgeben
    console.log(inputRef.current!.value);
  }

  return (
    <div>
      <label>
        Voranme: <input type="text" ref={inputRef} />
      </label>
      <button onClick={handleSubmit}>speichern</button>
    </div>
  );
};

export default Uncontrolled;
