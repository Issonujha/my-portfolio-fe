import "./Profile.css"
import MyJourney from "../MyJourney/MyJourney";
import PerformanceMetrix from "../PerformanceMetrix/PerformanceMetrix";

function Profile({ isDarkMode }) {

    return (
        <>
            <div className="profile">
                <div className={`${isDarkMode ? "dark-mode" : ""}`}>
                    <span className="profile_internal_handler">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQF01zztSQcV-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688377578139?e=1744243200&v=beta&t=JemEpDQQ42k70PxSGIJp5YnNddm4QUOoSP8RpDQVbo4"
                            className="profile_page" alt="Profile" />
                    </span>
                    <span className={`profile_text ${isDarkMode ? "dark-mode" : ""}`} title="Sonu Jha">
                        It's me,<br />
                        <a href="#data" className="cta-button" type="button" disabled>
                            Sonu Jha!
                        </a>
                    </span>
                </div>
            </div>
            <div className={`all-center ${isDarkMode ? " dark-mode" : ""}`}>
                <h1>Building Scalable Microservices and AI-Powered Solutions</h1>
                <p>
                    Specializing in distributed systems, real-time data processing, and cutting-edge AI integrations.<br />
                    Leveraging the power of Spring Boot to drive business success.
                </p>
                <a href="#all" className="cta-button">Explore My Work</a>
                <MyJourney isDarkMode={isDarkMode} />
                <PerformanceMetrix />
            </div >
        </>
    );

}

export default Profile;