import "./MyJourney.css";
function MyJourney({ isDarkMode }) {
    const journies = [
        {
            icon: "microservices-icon.png",
            title: "Spring Boot Microservices",
            description: "Built scalable distributed systems for real-time data processing, API Gateways, and Service Discovery.",
            experience: "5+ Projects | 6+ Months of Experience"
        },
        {
            icon: "rest-api-icon.png",
            title: "REST API Development",
            description: "Developed RESTful APIs using Spring Boot, enabling seamless integration and efficient communication between services.",
            experience: "10+ Projects | 1 Year of Experience"
        },
        {
            icon: "hibernate-icon.png",
            title: "Hibernate ORM",
            description: "Implemented efficient database solutions using Hibernate for relational mapping, query optimization, and persistence.",
            experience: "8+ Projects | 1.5 Years of Experience"
        },
        {
            icon: "aws-icon.png",
            title: "Cloud Computing with AWS",
            description: "Deployed and managed applications on AWS, utilizing S3, EC2, and RDS to ensure scalability and reliability.",
            experience: "3+ Projects | 1 Year of Experience"
        },
        {
            icon: "security-icon.png",
            title: "Spring Security & Role-Based Access",
            description: "Configured secure endpoints with JWT-based authentication, OAuth2, and role-based access control for web applications.",
            experience: "4+ Projects | 9 Months of Experience"
        },
        {
            icon: "data-structures-icon.png",
            title: "Data Structures & Algorithms",
            description: "Designed and optimized algorithms for problem-solving using advanced data structures, improving system performance.",
            experience: "100+ Problems Solved | Competitive Programming"
        },
        {
            icon: "team-icon.png",
            title: "Leadership & Teamwork",
            description: "Collaborated with cross-functional teams to deliver high-quality projects, mentoring junior developers.",
            experience: "2+ Years of Collaborative Experience"
        },
        {
            icon: "devops-icon.png",
            title: "DevOps Practices",
            description: "Implemented CI/CD pipelines using Jenkins and Docker to automate builds, tests, and deployments.",
            experience: "3+ Projects | 6 Months of Experience"
        }
    ];
    return (
        <div className="journey-section">
            <h1 key="title">My Journey</h1>
            <div key="section" className={`timeline ${isDarkMode ? 'dark-mode' : ''}`}>
                {journies.map((journey, index) => (
                    <div className={`milestone ${isDarkMode ? 'dark-mode' : ''}`} key={journey.title}>
                        <div className={`icon-container ${isDarkMode ? 'dark-mode' : ''}`} >
                            <img src={journey.icon} alt="Microservices Icon" />
                        </div>
                        <div className={`milestone-content ${isDarkMode ? 'dark-mode' : ''}`}>
                            <h2>{journey.title}</h2>
                            <p>
                                {journey.description}
                            </p>
                            <span>{journey.experience}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default MyJourney;