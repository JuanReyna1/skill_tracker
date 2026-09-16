import { useState, useEffect, useRef } from 'react';

const showcaseItems = [
    {
        id: 1,
        title: "Culinary Arts & Cooking",
        description: "Master new recipes, track your cooking milestones, and level up your kitchen skills from amateur to chef.",
        category: "Casual Hobbies"
    },
    {
        id: 2,
        title: "Daily Reading Habits",
        description: "Set reading goals, log your completed books, and build a consistent habit of learning and exploring new worlds.",
        category: "Personal Growth"
    },
    {
        id: 3,
        title: "Business Management Qualifications",
        description: "Advance your career with structured professional programs, track certifications, and validate your leadership skills.",
        category: "Professional Development"
    },
    {
        id: 4,
        title: "Tech & Institutional Certifications",
        description: "Partner with top institutions to earn recognized tech certifications. Level up your coding, design, and data analysis abilities.",
        category: "Career Advancement"
    }
];

const backgroundImages = [
    "Badminton Image from Pixabay.jpg",
    "Crochet Yarn Image.jpg",
    "Fishing Sunset Fishermen.jpg",
    "Guitar Music Image.jpg",
    "Puzzle Piece 7588015.jpg",
    "Recreational Activities Image.jpg",
    "Restaurant Image from Pixabay.jpg",
    "Soccer Image from Pixabay.jpg"
];

function Home() {
    const [activeLevel, setActiveLevel] = useState(1);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = itemRefs.current.indexOf(entry.target);
                        if (index !== -1) {
                            setActiveLevel(index + 1);
                        }
                    }
                });
            },
            {
                // Trigger when an item is somewhat central on the screen
                rootMargin: '-30% 0px -30% 0px',
                threshold: 0
            }
        );

        const currentRefs = itemRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <main className="home-layout">
            <section className="hero-section">
                <div className="hero-background-grid">
                    {backgroundImages.map((img, i) => (
                        <div 
                            key={i} 
                            className="hero-grid-item" 
                            style={{ backgroundImage: `url('/skill_images/${img}')` }}
                        ></div>
                    ))}
                </div>
                
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1 className="page-title hero-title">
                        <img src="/title-logo.png" alt="Skill Up" className="hero-title-img" />
                    </h1>
                    <p className="page-description hero-description">
                        SkillUp helps you track your progress on whatever you want to learn. Whether that's everyday hobbies like cooking and reading, or career goals like learning new tools and earning certifications, SkillUp keeps you motivated and on track.
                    </p>
                </div>
            </section>

            <section className="showcase-section">
                <div className="page-content">

                <div className="showcase-container">
                    <div className="showcase-sidebar">
                        <div className="level-indicator-container">
                            <h2 className="level-text">Level {activeLevel}</h2>
                            <div className="level-progress-bar">
                                <div 
                                    className="level-progress-fill" 
                                    style={{ height: `${(activeLevel / showcaseItems.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="showcase-content">
                        {showcaseItems.map((item, index) => (
                            <div 
                                key={item.id} 
                                className={`showcase-card ${activeLevel === index + 1 ? 'active' : ''}`}
                                ref={(el) => (itemRefs.current[index] = el)}
                            >
                                <span className="showcase-card-category">{item.category}</span>
                                <h3 className="showcase-card-title">{item.title}</h3>
                                <p className="showcase-card-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </section>
        </main>
    );
}
export default Home;