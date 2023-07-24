import { Container } from "./styles";

export const Header = ({ setInputSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquise uma música"
          onChange={(event) => {
            setInputSearch(event.target.value);
          }}
        />
        <button type="submit">Buscar</button>
      </form>
    </Container>
  );
};
