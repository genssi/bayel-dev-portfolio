import { Header } from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Cases from "./sections/Cases/Cases";
import ContactForm from "./sections/ContactForm/ContactForm";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <div style={{ paddingTop: "80px" }}>
                <main>
                    <Hero />
                    <About />
                    <Cases />
                    <ContactForm />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
