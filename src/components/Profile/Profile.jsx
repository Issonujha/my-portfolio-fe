import RotatingLogo from "../RotatingLogo/RotatingLogo";
import styles from "./Profile.module.css";

export function Profile() {
    return (
        <>
            <div className={styles.imageWrapper}>
                <RotatingLogo />
            </div>

            <h1 className={styles.heading}>
                Hi, I'm <span className="gradient-text">Sonu Jha</span>
            </h1>

            <p className={styles.subheading}>
                Java Developer with 2+ years of experience at Actolap Solutions, AI-driven expertise in Spring Boot, microservices, and cloud-based solutions.
            </p>
        </>
    )
}

