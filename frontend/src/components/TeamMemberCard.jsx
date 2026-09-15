import { useState } from "react";

function TeamMemberCard({ name, role, bio, ownership, image }) {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="team-card">
            <div className="team-card-avatar">
                {image && !hasError ? (
                    <img
                        src={image}
                        alt={name}
                        className="team-card-avatar-img"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    name.charAt(0)
                )}
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