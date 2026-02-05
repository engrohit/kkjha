import { motion } from 'framer-motion';
import Section from '../ui/Section.jsx';
import FloatingCard from '../ui/FloatingCard.jsx';
import { FaPenNib, FaFilm, FaLayerGroup } from 'react-icons/fa';

const services = [
    {
        icon: <FaPenNib />,
        title: "Script Writing",
        description: "Creating compelling narratives for audio shows, microdramas, and features.",
    },
    {
        icon: <FaFilm />,
        title: "Visual Storytelling",
        description: "Structuring scenes with cinematic pacing tailored for vertical video formats.",
    },
    {
        icon: <FaLayerGroup />,
        title: "Dialogue & Supervision",
        description: "Crafting crisp, emotionally resonant dialogue and overseeing script execution.",
    }
];

const ServiceOrbit = () => {
    return (
        <Section id="services" className="section-primary">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary-enhanced mb-4">Service Orbit</h2>
                <p className="text-secondary-enhanced">Nodes of expertise revolving around your needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <FloatingCard key={index} delay={index * 0.5} className="card-elevated transition-all duration-300">
                        <div className="flex flex-col items-center text-center p-6">
                            <div
                                className="text-5xl mb-6 transition-all duration-300"
                                style={{
                                    color: 'var(--accent-primary)',
                                    filter: 'drop-shadow(0 0 10px var(--accent-glow))'
                                }}
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-enhanced mb-3">{service.title}</h3>
                            <p className="text-secondary-enhanced text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </FloatingCard>
                ))}
            </div>
        </Section>
    );
};

export default ServiceOrbit;

