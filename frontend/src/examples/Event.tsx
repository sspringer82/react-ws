import { MouseEvent } from 'react';

const Event: React.FC = () => {
  function handleClick(clickEvent: MouseEvent<HTMLButtonElement>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log((clickEvent.target as any).id);
    console.log('you clicked the button');
  }

  function removeElement(id: number): void {
    console.log(id);
  }

  return (
    <div>
      <button id="42" onClick={handleClick}>
        click me
      </button>
      <button onClick={() => removeElement(42)}>click me</button>
    </div>
  );
};

export default Event;
