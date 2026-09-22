const individualContributions = [
    {
        name: "Isaac Padilla",
        role: "Software Engineer",
        date: "09/21/26",
        categories: [
            {
                title: "Business Strategy",
                items: [
                    "Wrote the Strategy-to-Project Chain section.",
                    {
                        text: "Collaborated with team to brainstorm Project Charter’s Business Objective section.",
                        subItems: [
                            "Gathered and organized the team’s ideas into a structured Business Objective section for the Project Charter.",
                        ],
                    },
                ],
            },
            {
                title: "Front-End Development",
                items: [
                    "Developed the Home Page for the SkillUp Living Project Portal based on my initial design ideas.",
                    {
                        text: "Added my assigned sections to their corresponding website pages.",
                        subItems: [
                            "Added Strategy-to-Project Chain and Market Research content to site.",
                        ],
                    },
                    "Added my information on the About Us page.",
                    "Added individual contributions section.",
                ],
            },
            {
                title: "Market Research",
                items: [
                    "Collaborated with the team to develop interview questions for the Recreational Activity Tracker project.",
                    "Five interviews with potential users about recreational activities, motivation, progress tracking, and personal development.",
                    "Five interviews for the Picture Exploration project.",
                    "Wrote the “What Didn’t Work / What You Pivoted From” section, documenting abandoned ideas, findings and changes to original SkillUp project.",
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "Assigned tasks and responsibilities to team members.",
                    "Reviewed the Sprint 1 requirements to find necessary deliverables and website content.",
                ],
            },
        ],
    },
    {
        name: "Karina Rivera",
        role: "Software Engineer",
        date: "09/21/26",
        categories: [
            {
                title: "Front-End Development",
                items: [
                    "Initialized the file structure and established the overall structure of the website.",
                    "Created the navigation bar and the pages accessible through it.",
                    "Structured the Sprint 1 page to include all the necessary sections and files."
                ],
            },
            {
                title: "User Experience Design",
                items: [
                    "Created a website with a clean and modern interface that allows users to switch between light and dark modes based on their preferences.",
                    "Contributed to the initial layout of the About Us page to display information about all team members.",
                    "To improve the overall user experience, I organized all sprint pages into a dropdown menu within the navigation bar to prevent the navigation bar from becoming too crowded. This makes it easier for users to navigate to their desired sprint page while keeping all sprint pages easily accessible.",
                    "For the Sprint 1 page, I added a secondary navigation bar to make it easier for users to navigate between the different sections within the page. "
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "During the market research phase, I contributed to developing interview questions for our second highest-ranked project idea, the Budget Simulator.",
                    "I also conducted 10 different interviews and analyzed the responses to help the team make a final project selection."
                ],
            }
        ],
    },
    {
        name: "Juan Reyna",
        role: "Software Architect",
        date: "09/21/26",
        categories: [
            {
                title: "Business Strategy",
                items: [],
            },
            {
                title: "Front-End Development",
                items: [],
            },
            {
                title: "Market Research",
                items: [],
            },
            {
                title: "Additional Contributions",
                items: [],
            },
        ],
    },
    {
        name: "Jonathan Hernandez",
        role: "DevOps",
        date: "09/21/26",
        categories: [
            {
                title: "Business Strategy",
                items: [],
            },
            {
                title: "Front-End Development",
                items: [],
            },
            {
                title: "Market Research",
                items: [],
            },
            {
                title: "Additional Contributions",
                items: [],
            },
        ],
    },
    {
        name: "Ricardo Morales Perez",
        role: "Tester & Checker",
        date: "09/20/26",
        categories: [
            {
                title: "Website Testing",
                items: [
                    "I tested the website to make sure the website works perfectly by visiting every page of every section, making sure that no error occurs when going to a specific page.",
                ],
            },
            {
                title: "Issue Identification and Reporting",
                items: [
                    "For now, there aren’t any errors I detected that were on the website, but if the website does contain any errors, I make sure to tell my team to fix them.",
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "I oversaw doing the constraints part of Sprint 1 and adding any constraints about our website.",
                ],
            },
        ],
        reviewResponsibilities: [
            "I reviewed that all the constraints were there and made sure there weren't any errors in the work.",
        ],
        aiDisclosure: {
            toolUsed: "ChatGPT",
            stage: "Constraints",
            purpose: "Just to get more ideas to add for the constraints part of the assignment but the work is my own.",
            changesOrRejected: "I improved my Constraints part because I felt it was short. So, I just used ChatGPT in order just to get more ideas and then I come up with my own ideas with example ChatGPT gave me.",
        },
    },
];

function Sprint1() {
    return (
        <main className="sprint-page">
            {/* Sprint 1 Sub-Navigation */}
            <nav className="sprint-subnav">
                <a href="#market-research">Market Research</a>
                <a href="#business-strategy">Business Strategy</a>
                <a href="#project-charter">Project Charter</a>
                <a href="#individual-contributions">Individual Contributions</a>
            </nav>
            <div className="sprint-header">
                <h1>Sprint 1</h1>
                <p>
                    Explore our market research, business strategy,
                    project charter, and individual contributions for Sprint 1.
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
                            During our initial research phase, our team explored several project ideas such as Budget Simulation, Picture Exploration, Item Holder, Planning and Scheduling with Forceful Pictures, and Recreational Activity Tracker. Through interviews and team discussions, we analyzed the problems each project could resolve and development challenges.
                        </p>

                        <h4>Budget Simulation</h4>
                        <p>
                            Budget Simulation was our team’s second choice. The concept focused on helping individuals evaluate purchases and predict purchase effects to make better financial decisions.
                        </p>
                        <p>
                            Our interviews showed that participants had challenges related to budgeting, unexpected expenses, and determining if purchases were affordable. However, the responses did not give us a clear direction for creating a solution that could solve these problems.
                        </p>
                        <p>
                            After discussing potential functionality, we decided to go with SkillUp instead. Although Budget Simulation would target an existing problem, we were missing a clear direction on how to provide a solution.
                        </p>

                        <h4>Picture Exploration</h4>
                        <p>
                            Our Picture Exploration project focused on helping users update and view recent images for locations they might want to explore. During our interviews, we found that most participants were already able to find recent information about places just by using Google.
                        </p>
                        <p>
                            Even though some participants did find some outdated or inaccurate information, most were able to find the information through other services. Our research showed that there is no significant problem that requires a new platform from where to find updated information. As a result, we decided to abandon Picture Exploration.
                        </p>

                        <h4>Item Holder</h4>
                        <p>
                            Our Item Holder concept focused on providing a service that would allow individuals to reserve items they were interested in purchasing but could not immediately afford and obtain. Our interviews gave us useful insights into purchasing decisions and provided potential services that could help in these situations.
                        </p>
                        <p>
                            After we evaluated the concept, we determined that there were significant financial and operational risks with potential fraudulent transactions, scams, and financial losses with reserving and holding items. Although the research found potential opportunities, we decided to abandon Item Holder due to financial risks.
                        </p>

                        <h4>Planning and Scheduling with Forceful Pictures</h4>
                        <p>
                            Our Planning and Scheduling with Forceful Pictures concept focused on helping individuals improve their time management and be accountable for completing their scheduled activities.
                        </p>
                        <p>
                            After evaluating the concept and reviewing the interviews, we noticed that requiring users to provide photo evidence could become frustrating and inconvenient instead of encouraging. Our interviews also did not show a need for the system we wanted to work with. There was also no business potential, and as a result we decided to abandon this idea.
                        </p>

                        <h4>Pivots in Our Recreational Activity Tracker</h4>
                        <p>
                            Our original concept focused on providing users with a place to record recreational activities and personal accomplishments, such as books they read, recipes cooked, or progress on any recreational activity.
                        </p>
                        <p>
                            Throughout interviews and discussions, we expanded the concept to include learning resources, instructor feedback, skill recognition, and opportunities to share with friends.
                        </p>
                        <p>
                            We also reconsidered our original competitive approach after learning that some individuals preferred enjoying recreational activities without the pressure of comparing themselves to others. Instead, we focused on personalized progress tracking, individual achievements, and community support.
                        </p>
                    </div>
                </section>

                {/* Business Strategy */}
                <section id="business-strategy" className="sprint-section">
                    <div className="section-heading">
                        <h2>Business Strategy</h2>
                        <a
                            href="/documents/sprint1/Strategy_to_Project_Chain.pdf"
                            download="Strategy_to_Project_Chain.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>The Strategy-to-Project Chain</h3>

                        <h4>1. The Business Need</h4>
                        <p>
                            Learning new skills is an important part of personal and professional development. Unfortunately individuals may find difficulties when trying to start a new activity to maintain motivation, organize their resources and track their progress over time.
                        </p>
                        <p>
                            Our team’s research has found several challenges that individuals encounter when starting new recreational activities and personal learning goals. Interviewed participants described difficulties in finding relevant resources, remaining persistent and tracking their activities and achievements. Some participants depended on tracking by memory and lacked a formal tracking method. Other participants described that having limited time, financial constraints, and lack of experience prevented them from starting or continuing activities.
                        </p>
                        <p>
                            The findings suggest an opportunity to develop a centralized platform that helps individuals organize their recreational activities, establish goals, track achievements, and access relevant resources.
                        </p>

                        <h4>2. Existing Learning Platforms</h4>
                        <p>
                            Existing platforms do show how digital services can combine resources, personal development, and community participation. For example, Skillshare provides access to classes, practical projects, certificates and opportunities for learners to share their work and receive feedback.
                        </p>
                        <p>
                            Unlike platforms that primarily organize learning around predefined courses, SkillUp focuses on personalized skill development. Users can establish their own goals, track activities, and document achievements through a portfolio that reflects their development over time.
                        </p>
                        <p>
                            Users are not required to follow a specific course or pursue a certification to benefit from the platform. They can track recreational activities, develop professional skills and record accomplishments based on their individual interests.
                        </p>
                        <p>
                            SkillUp aims to provide a centralized environment where learning is treated as a continuous process rather than a series of completed courses. The platform serves as both a tool for developing skills, and a lasting record of users’ experiences, achievements, and growth.
                        </p>

                        <h4>3. The Business Objective</h4>
                        <p>
                            The primary business objective of SkillUp is to develop a centralized platform that makes skill development more accessible, organized, engaging, and rewarding.
                        </p>
                        <p>
                            SkillUp aims to help users create personal learning goals, track their development across multiple activities, document their accomplishments, and discover relevant resources.
                        </p>
                        <p>
                            The platform also intends to create an environment where users can connect with others who share similar interests, exchange knowledge, receive feedback and maintain motivation. SkillUp aims to support users from the initial exploration of a new activity through continued participation.
                        </p>
                        <p>
                            The platform creates opportunities for additional stakeholder groups. Instructors may use SkillUp to reach interested learners and offer their services, while educational institutions and organizations may provide learning opportunities and certifications.
                        </p>

                        <h4>4. Expected Business Value</h4>
                        <p>
                            SkillUp's proposed business value extends beyond providing users with a tool for recording their activities.
                        </p>
                        <p>
                            For individual users, the platform aims to provide greater visibility into their learning progress, easier access to educational resources, and opportunities to receive support from other learners.
                        </p>
                        <p>
                            For instructors, SkillUp may provide a way to connect with individuals interested in developing specific skills and create opportunities to offer paid instructional services.
                        </p>
                        <p>
                            For educational institutions and organizations, the platform may create opportunities to provide learning programs, certifications, and additional resources to interested users.
                        </p>
                        <p>
                            Over time, these capabilities could support a business model based on connecting learners with instructors and other educational services. However, revenue generation, instructor participation, and user adoption remain potential outcomes rather than established results.
                        </p>
                        <p>
                            The overall strategic objective is to create a platform that supports continued skill development while establishing opportunities for users, instructors, and educational organizations to participate in a shared learning environment.
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
                        <h3>Success Criteria</h3>
                        <p>
                            <ul>
                                <li>
                                    Successful launch resulting in an influx of new users joining the platform, active user engagement across the platform, and a continuous expansion of the user base.
                                </li>

                                <li>
                                    Successful execution of the instructor marketplace, resulting in an active user booking paid session and having sustainable revenue through the platform.
                                </li>

                                <li>
                                    Users have a measurable improvement in their skills development, as well as evidence of their goal setting, progress tracking, and successful attainment of certificates.
                                </li>

                                <li>
                                    The milestones for the project and other deliverables are completed within schedule, with any unexpected delays being managed correctly to minimize the possible consequences of a delay.
                                </li>

                                <li>
                                    High retention rates, where users consistently log activities and users provide enough feedback for future improvements for the platform.
                                </li>

                                <li>
                                    Platform has a good influx of instructors willing to work for the platform and organization willing to give certifications for the users to obtain.
                                </li>
                            </ul>
                        </p>    
                    </div>
                </section>

                {/* Individual Contributions */}
                <section id="individual-contributions" className="sprint-section">
                    <div className="section-heading">
                        <h2>Individual Contributions</h2>
                        <a
                            href="/"
                            download
                            className="pdf-button"
                        >
                            [PDF]
                        </a>
                    </div>

                    <div className="contributions-list">
                        {individualContributions.map((member, index) => (
                            <div key={member.name} className="contribution-card sprint-topic">
                                <div className="contribution-header">
                                    <h3>{`${index + 1}. ${member.name}`}</h3>
                                    <div className="contribution-meta">
                                        <span className="contribution-meta-item">
                                            <strong>Role:</strong> {member.role}
                                        </span>
                                        <span className="contribution-meta-item">
                                            <strong>Date:</strong> {member.date}
                                        </span>
                                    </div>
                                </div>

                                <div className="contribution-body">
                                    <h4>Individual Contributions (What I Owned)</h4>

                                    {member.categories.map((category) => (
                                        <div key={category.title} className="contribution-category">
                                            <h5>{category.title}:</h5>

                                            {category.items && category.items.length > 0 ? (
                                                <ul className="contribution-bullets">
                                                    {category.items.map((item, i) => (
                                                        <li key={i}>
                                                            {typeof item === "string" ? (
                                                                item
                                                            ) : (
                                                                <>
                                                                    {item.text}
                                                                    {item.subItems && item.subItems.length > 0 && (
                                                                        <ul className="contribution-subbullets">
                                                                            {item.subItems.map((subItem, j) => (
                                                                                <li key={j}>{subItem}</li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="contribution-pending">
                                                    <em>Pending member contribution...</em>
                                                </p>
                                            )}
                                        </div>
                                    ))}

                                    {member.reviewResponsibilities && member.reviewResponsibilities.length > 0 && (
                                        <div className="contribution-section">
                                            <h4>Review Responsibilities (What I Reviewed)</h4>
                                            <ul className="contribution-bullets">
                                                {member.reviewResponsibilities.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {member.aiDisclosure && (
                                        <div className="contribution-section">
                                            <h4>AI Use Disclosure</h4>
                                            <div className="ai-disclosure-details">
                                                <p><strong>AI Tool Used:</strong> {member.aiDisclosure.toolUsed}</p>
                                                <p><strong>PM AI Protocol Stage:</strong> {member.aiDisclosure.stage}</p>
                                                <p><strong>Purpose of AI Use:</strong> {member.aiDisclosure.purpose}</p>
                                                <p><strong>Changes or Rejected Output:</strong> {member.aiDisclosure.changesOrRejected}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Sprint1;