function Hello({ person }) {
  // Destructuring person inside the component for clarity
  const { name, message, emoji, seatNumbers } = person;

  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name}{person.seatNumbers}
      </h1>
      
    </div>
  );
}

export default Hello;
