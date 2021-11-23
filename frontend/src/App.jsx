import NavbarPrimary from './components/NavbarPrimary';

function App() {
  return (
    <>
      <NavbarPrimary />
      <div class={'box text-center'} style={{margin:'50px 10%'}}>
        <p className="title is-5">
          Hello world! <br /><br />
          Create a developer profile/portfolio, <br />
          Share posts and get help from other developers, <br />
          Show your github repos,
          <br /> and more.
        </p>
      </div>
    </>
  );
}

export default App;
