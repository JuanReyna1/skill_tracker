import { useState, useEffect, useRef } from 'react';

const showcaseItems = [
    {
        id: 1,
        title: "Your Unique Learning Path",
        description: "We meet you exactly where you are. Forget one-size-fits-all courses—start new activities with less friction and build a personalized journey that fits your life.",
        category: "Personalized Journey",
        image: "Puzzle Piece 7588015.jpg"
    },
    {
        id: 2,
        title: "Build Your Achievement Portfolio",
        description: "Progress can be hard to notice day-to-day. Gather your scattered milestones, photos, and notes into one beautiful portfolio so you can truly see how far you've come.",
        category: "Track Progress",
        image: "Soccer Image from Pixabay.jpg"
    },
    {
        id: 3,
        title: "Find Your Accountability Coach",
        description: "Motivation is better together. Connect with friends, join Q/A threads, or find an accountability partner to check in on you and help you stay consistent.",
        category: "Community",
        image: "Recreational Activities Image.jpg"
    },
    {
        id: 4,
        title: "Get Expert Guidance",
        description: "Need a little extra help testing the waters? Browse our directory to find expert instructors, book sessions, and get the personalized feedback you need to level up.",
        category: "Support",
        image: "Guitar Music Image.jpg"
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
    const [leveledUp, setLeveledUp] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setLeveledUp(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        };
    }, []);

    return (
        <main className="home-layout">
            {leveledUp && (
                <div className="level-up-toast">
                    <div className="level-up-content">
                        <span className="level-up-icon">⭐</span>
                        <div className="level-up-text">
                            <h3>Level Up!</h3>
                            <p>You've explored the whole page. Time to start learning!</p>
                        </div>
                        <button className="level-up-close" onClick={() => setLeveledUp(false)}>×</button>
                    </div>
                </div>
            )}

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
                        SkillUp is a personalized skill-development platform designed to make learning more accessible, organized, engaging, and rewarding. Whether you're exploring a new hobby or developing professional skills, SkillUp helps you set personal goals, track your progress, and build a portfolio of your achievements.
                    </p>
                </div>
            </section>

            <section className="showcase-section">
                <div className="features-container">
                    {showcaseItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`feature-section ${index % 2 !== 0 ? 'reverse' : ''}`}
                        >
                            <div className="feature-content">
                                <span className="feature-category">{item.category}</span>
                                <h2 className="feature-title">{item.title}</h2>
                                <p className="feature-description">{item.description}</p>
                            </div>
                            <div className="feature-image-wrapper">
                                <img 
                                    src={`/skill_images/${item.image}`} 
                                    alt={item.title} 
                                    className="feature-image" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Invisible element at the bottom to trigger the easter egg */}
            <div ref={bottomRef} style={{ height: '10px', width: '100%' }}></div>
        </main>
    );
}
export default Home;