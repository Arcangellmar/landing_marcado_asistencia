function Titulo({titulo, isUnderLine}) {
  return (
    <div className="titulo">
      <p style={{ textDecoration: isUnderLine ? "underline" : "none" }}>{titulo}</p>
    </div>
  );
}

export default Titulo;
