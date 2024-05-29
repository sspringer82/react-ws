const LoopsConditions: React.FC = () => {
  const condition1 = true;
  const condition2 = true;
  const condition3 = true;

  let content: string | React.ReactNode = '';
  if (condition3) {
    content = <div>condition 3</div>;
  }

  const data = ['Brot', 'Eier', 'Milch', 'Milch'];

  const elements: React.ReactNode = [
    <div key="1">adsf</div>,
    <div key="2">jklö</div>,
  ];

  return (
    <div>
      <h1>Conditions</h1>
      {condition1 && <div>condition 1</div>} {/* entweder rendern oder nicht */}
      <hr />
      {condition2 ? <div>condition 2</div> : ''} {/* alternative rendern */}
      <hr />
      {content} {/* komplexere Bedingungen auslagern */}
      <hr />
      <h1>Loops</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <hr />
        {elements}
      </ul>
    </div>
  );
};

export default LoopsConditions;
