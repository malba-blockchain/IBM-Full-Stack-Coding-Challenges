function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, BUMBACLART!</h1>
      <h2>The time now is {currDate.toLocaleDateString()} Time to fuck off.</h2>
    </div>
  );
}

export default App;