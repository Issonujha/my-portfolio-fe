import { GithubIcon, LinkedinIcon, MailIcon, MessageCircleIcon } from "lucide-react"
import styles from "./Social.module.css"

export function Social() {
    return (
        <div className={styles.container}>
            <a href="/" className={styles.link} aria-label="WhatsApp">
                <MessageCircleIcon size={24} />
            </a>
            <a href="/" className={styles.link} aria-label="GitHub">
                <GithubIcon size={24} />
            </a>
            <a href="/" className={styles.link} aria-label="LinkedIn">
                <LinkedinIcon size={24} />
            </a>
            <a href="/" className={styles.link} aria-label="Email">
                <MailIcon size={24} />
            </a>
        </div>
    )
}

