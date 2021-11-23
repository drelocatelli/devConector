import NavbarPrimary from './components/NavbarPrimary';
import Container from './components/Container';

function App() {
  return (
    <>
      <NavbarPrimary />
        <Container title={"hello world"}>
            Create a developer profile/portfolio, <br />
            Share posts and get help from other developers, <br />
            Show your github repos,
            <br /> and more.
            <br /><br />
            <a href="/tour">Take a tour</a> or <a href="/join">Join now</a>
        </Container>
    </>
  );
}

export default App;
