import TeamMemberCard from "../components/TeamMemberCard";

const teamMembers = [
    {
        name: "Isaac Padilla",
        role: "Software Engineer",
        bio: "Isaac is a full-stack software engineer with experience in web development, database management, and cloud computing. He is passionate about building scalable and efficient software solutions.",
        ownership: "I am responsible for the front-end development, database management, and cloud computing aspects of the project.",
        image: "/profile_images/IsaacPadilla.jpeg",
    },
    {
        name: "Team Member 2",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
        image: null,
    },
    {
        name: "Team Member 3",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
        image: null,
    },
    {
        name: "Team Member 4",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
        image: null,
    },
    {
        name: "Ricardo Morales Perez",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
        image: null,
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