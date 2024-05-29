type Props = {
  children: React.ReactNode;
};

/* Einbindung:
<MyComponent>
  <h2>Hallöchen</h2>
</MyComponent>
*/

const MyComponent: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>MyComponent works!</h1>
      {children}
    </div>
  );
};

export default MyComponent;
