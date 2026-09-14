function TeamMemberCard({ name, role, bio, ownership }) {
    return (
        <div className="team-card">
            <div className="team-card-avatar">
                {name.charAt(0)}
            </div>

            <h2 className="team-card-name">
                {name}
            </h2>

            <p className="team-card-role">
                {role}
            </p>

            <p className="team-card-bio">
                {bio}
            </p>

            <div className="team-card-ownership">
                <span>Project Ownership</span>
                <p>{ownership}</p>
            </div>
        </div>
    );
}

export default TeamMemberCard;