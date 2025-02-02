import "./Performance.css";
function PerformanceMetrix() {
    const skills = [
        {
            id: 1,
            feature: "Structured + Problem Solving Based (or DSA)",
            available: true,
            star: "★★★★★"
        },
        {
            id: 2,
            feature: "Spring Boot & java",
            available: true,
            star: "★★★★★"
        },
        {
            id: 3,
            feature: "Spring Security",
            available: true,
            star: "★★★★★"
        },
        {
            id: 4,
            feature: "OpenAI or Chat GPT",
            available: true,
            star: "★★★★★"
        },
        {
            id: 5,
            feature: "Frontend Framework Like : React JS, JS HTML, CSS",
            available: true,
            star: "★★★★★"
        },
        {
            id: 6,
            feature: "Python",
            available: false,
            star: "★★"
        },
        {
            id: 7,
            feature: "C or C++",
            available: false,
            star: "★★★"
        }
    ];

    return (
        <div className="performance-section">
            <h1>The Performance Advantage</h1>
            <table className="comparison-table">
                <thead>
                    <tr>
                        <th>Skills</th>
                        <th>Currently working On</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((comparision, index) => (
                        <tr key={comparision.id}>
                            <td>{comparision.feature}</td>
                            {comparision.available && <td><span className="checkmark">✔</span></td>}
                            {!comparision.available && <td><span className="cross">✖</span></td>}
                            <td><span className="cross">{comparision.star}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PerformanceMetrix;