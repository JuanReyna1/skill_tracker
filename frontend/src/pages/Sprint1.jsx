function Sprint1() {
    return (
        <main className="sprint-page">
            {/* Sprint 1 Sub-Navigation */}
            <nav className="sprint-subnav">
                <a href="#market-research">Market Research</a>
                <a href="#business-strategy">Business Strategy</a>
                <a href="#project-charter">Project Charter</a>
                
            </nav>
            <div className="sprint-header">
                <h1>Sprint 1</h1>
                <p>
                    Explore our market research, business strategy, and
                    project charter for Sprint 1.
                </p>
            </div>

            <div className="sprint-content">

                {/* Market Research */}
                <section id="market-research" className="sprint-section">
                    <div className="section-heading">
                        <h2>Market Research</h2>
                        <a
                            href="/"
                            download
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>
                
                    <div className="sprint-topic">
                        <h3>Aggregate Findings</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>

                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Top Pick: Deep Dive</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Donec sed odio dui. Integer
                            posuere erat a ante venenatis dapibus posuere velit
                            aliquet.
                        </p>

                        <p>
                            Maecenas faucibus mollis interdum. Cras mattis
                            consectetur purus sit amet fermentum. Vestibulum id
                            ligula porta felis euismod semper.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>What Didn't Work / What We Pivoted From</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam quis risus eget urna mollis ornare vel
                            eu leo. Aenean lacinia bibendum nulla sed
                            consectetur.
                        </p>

                        <p>
                            Curabitur blandit tempus porttitor. Etiam porta sem
                            malesuada magna mollis euismod. Donec ullamcorper
                            nulla non metus auctor fringilla.
                        </p>
                    </div>
                </section>

                {/* Business Strategy */}
                <section id="business-strategy" className="sprint-section">
                    <div className="section-heading">
                        <h2>Business Strategy</h2>
                        <a
                            href="/"
                            download
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>The Strategy-to-Project Chain</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed posuere consectetur est at lobortis.
                            Maecenas sed diam eget risus varius blandit sit amet
                            non magna.
                        </p>

                        <p>
                            Aenean eu leo quam. Pellentesque ornare sem lacinia
                            quam venenatis vestibulum. Cras justo odio, dapibus
                            ac facilisis in, egestas eget quam.
                        </p>
                    </div>
                </section>

                {/* Project Charter */}
                <section id="project-charter" className="sprint-section">
                    <div className="section-heading">
                        <h2>Project Charter</h2>
                        <a
                            href="/"
                            download
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>Business Objective</h3>
                        <p>
                            The project addresses several challenges people face when trying to learn or improve a skill, including lack of motivation, difficulty getting started, limited access to resources or instructors, lack of feedback, difficulty tracking progress, and limited opportunities to connect with others who share similar goals. It also creates an opportunity to provide users with a clearer path for developing skills and discovering new recreational activities or professional interests. 
                        </p>
                        <p>
                            The platform is expected to provide value through skill development, certifications, progress tracking, access to learning resources, guidance, community interaction, and increased motivation. It can also create opportunities for instructors to offer paid services, users to discover relevant products and resources, and institutions to provide certifications or educational programs. Overall, the platform aims to make skill development more accessible, organized, social, and rewarding. 
                        </p>
                        <p>
                            The project supports multiple stakeholder groups. Users can track their skills, earn certifications, learn new things, connect with communities, access instructors and resources, receive feedback and motivation, and discover recreational activities. Instructors can teach a larger audience, earn income or receive donations, build their reputation, and potentially obtain certifications through institutions. Product suppliers can promote relevant products, improve visibility, and reach interested customers. Institutions can provide certifications, offer educational opportunities, promote their programs, and gain insight into user progress. Investors can receive recognition and potentially benefit from platform revenue. Developers can gain experience and grow professional community, while organizations such as UTEP Computer Science Department can use the project to support student learning and skill development. 
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Scope Boundary</h3>
                        <div class="scope_cols">
                            <div class="col">
                            <h4>In</h4>
                            <ul>
                                <li>Accountability Partner</li>
                                <li>Q/A Threads</li>
                                <li>Progress Tracking</li>
                                <li>Earn and Obtain Certificates</li>
                                <li>Learning Resources</li>
                                <li>Social media posting</li>
                                <li>Log Activities</li>
                                <li>Goal settings</li>
                                <li>Instructor search directory</li>
                                <li>Instructor profiles</li>
                                <li>Instructor booking/request</li>
                            </ul>
                            </div>
                            <div class="col">
                            <h4>Out</h4>
                            <ul>
                                <li>Cost estimator for classes/gear</li>
                                <li>Expense log per activity</li>
                                <li>Spending analytics dashboard</li>
                                <li>Membership/subscription tracker</li>
                                <li>Monthly budget alerts</li>
                                <li>Price comparison for instructors/gear</li>
                                <li>Savings goal for upcoming events</li>
                            </ul>
                            </div>
                            <div class="col">
                            <h4>Deferred</h4>
                            <ul>
                                <li>Sharable progression cards</li>
                                <li>Activity Feed</li>
                                <li>Integration with wearable fitness</li>
                                <li>Activity Leaderboards</li>
                                <li>Activity Quests</li>
                                <li>Activity Event posting (Local/Non-Local)</li>
                                <li>Local businesses tied to community hubs</li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sprint-topic">
                        <h3>Constraints</h3>
                        <p>
                             <ul>
                                <li>
                                    Budget: Everything is free for now
                                </li>
                                <li>
                                    Timeline/schedule constraints: The project needs to be delivered within the project timeline set by the due date which restricts the time available for implementing and testing all the features.
                                </li>
                                <li>
                                    Resource/technology constraints: There could be constraints relating to the programming skills, time, hardware, software, and use of external resources of the development team. 
                                </li>
                                <li>
                                    Development team availability: The development must be done based on the availability of the development team.
                                </li>
                                <li>
                                    Features constraints: All the features may not be available in the first version of SkillUp and some features will need to be deferred to a future release.
                                </li>
                                <li>
                                    Content/data constraints: Learning materials, certifications, instructors, and activity details could be limited to what is available to the development team.
                                </li>
                                <li>
                                    User privacy and security: The app must ensure that user accounts and progress data is secure. 
                                </li>
                                <li>
                                    Third-party resource constraints: The features relying on third-party platforms will be subject to their availability and any changes in those services.
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Assumptions</h3>
                        <p>
                            <ul>
                                <li>
                                    Users have different methods for measuring progress depending on the type of recreational activity.
                                </li>
                                <li>
                                    Users may participate in multiple recreational activities at once.  
                                </li>
                                <li>
                                    Users will have varying experience levels across activities. 
                                </li>
                                <li>
                                    Users will benefit from having recreational activities, goals, and progress organized within a centralized system. 
                                </li>
                                <li>
                                    Social support, reminders, or accountability may help some users remain engaged with their activities. 
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Stakeholder Register</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent commodo cursus magna, vel scelerisque
                            nisl consectetur et. Nullam id dolor id nibh
                            ultricies vehicula ut id elit.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Sprint1;