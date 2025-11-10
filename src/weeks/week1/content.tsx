function Week1Content({ goBack }: { goBack: () => void }) {
  return (
    <div>
      <button onClick={goBack}>← Back</button>
    </div>
  );
}

export default Week1Content;