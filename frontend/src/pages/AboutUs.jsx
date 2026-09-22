import TeamMemberCard from "../components/TeamMemberCard";

const teamMembers = [
    {
        name: "Isaac Padilla",
        role: "Project Manager",
        bio: "I am a full-stack software engineer with experience in web development and database management. I focus on building scalable and efficient software solutions.",
        ownership: "I am responsible for the front-end development, and business management.",
        image: "/profile_images/IsaacPadilla.jpeg",
    },
    {
        name: "Karina Rivera",
        role: "Software Engineer",
        bio: "I am a software engineer with a strong background in web development and user experience design. I enjoy creating intuitive and visually appealing interfaces.",
        ownership: "I am responsible for the front-end development and user experience design of the project.",
        image: "/profile_images/KarinaRivera.jpg",
    },
    {
        name: "Juan Reyna",
        role: "Market Researcher",
        bio: "I'm a software architect with a background in web development, database management, and some management. I focus on designing scalable, well structured systems that are reliable from development through launch.",
        ownership: "I am responsile for our software's technical direction, turning business needs into solid, scalable systems.",
        image: "/profile_images/JuanReyna.jpeg",
    },
    {
        name: "Jonathan Hernandez",
        role: "Market Researcher",
        bio: "Jonathan is a DevOps engineer with a background in web development and general management. He focuses on automating processes and streamlining workflows to ensure that software runs smoothly from development to launch.",
        ownership: "I am responsible for managing how our project is built and deployed, maintaining the servers, and making sure our code updates go live smoothly.",
        image: "/profile_images/JonathanHernandez.jpg",
    },
    {
        name: "Ricardo Morales Perez",
        role: "Tester & Checker",
        bio: "I'm a UTEP student pursuing a Bachelor's degree in Computer Science, with the possibility of pursuing a Ph.D. in Computer Science in the future. I'm interested in learning web development, and I enjoy traveling, reading, trying new things, and having fun.",
        ownership: "I'am responsible to make sure our webiste runs and works effectively and make sure there are no error and/or problems. If an eroor happens I tell one our members to fix that issue",
        image: "/profile_images/RickPhoto.jpg"
    },
];

function AboutUs() {
    return (
        <main className="page">
            <div className="page-content">
                <h1 className="page-title">About Us</h1>
                
                <p className="page-description">Every member needs a short bio here: who you are, your role on this team,and what part of the project you own.
                </p>


                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <TeamMemberCard
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            ownership={member.ownership}
                            image={member.image}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default AboutUs;