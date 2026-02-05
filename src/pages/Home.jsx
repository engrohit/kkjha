import Hero from '../components/sections/Hero.jsx';
import ServiceOrbit from '../components/sections/ServiceOrbit.jsx';
import Resources from '../components/sections/Resources.jsx';
import Contact from '../components/sections/Contact.jsx';

const Home = () => {
    return (
        <main className="flex flex-col">
            <Hero />
            <ServiceOrbit />
            <Resources />
            <Contact />
        </main>
    );
};

export default Home;
