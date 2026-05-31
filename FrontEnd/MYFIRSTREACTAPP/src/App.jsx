import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <Header/>
      <div id="abcd">My First React App</div>
      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        minus, autem fuga amet earum est libero explicabo dolorum odio non
        facilis error ea numquam. Debitis tempora totam ipsum mollitia
        doloribus!
      </p>
      <button>Click Here</button>
      <Footer />
    </>
  );
}

export default App;