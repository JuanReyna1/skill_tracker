import TeamMemberCard from "../components/TeamMemberCard";

const teamMembers = [
    {
        name: "Team Member 1",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
    },
    {
        name: "Team Member 2",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
    },
    {
        name: "Team Member 3",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
    },
    {
        name: "Team Member 4",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
    },
    ,
    {
        name: "Team Member 5",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
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
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default AboutUs;