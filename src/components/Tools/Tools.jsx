import { ChromeIcon, FolderIcon, CodeIcon, FileTextIcon } from "lucide-react"
import styles from "./Tools.module.css"

export function Tools({onTabChange}) {
    return (
        <div className={styles.commonTools}>
            <div className={styles.container}>
                <div className={styles.tool}>
                    <ChromeIcon size={20} />
                </div>
                <div className={styles.tool} onClick={() => onTabChange("resume")}>
                    <FolderIcon size={20} />
                </div>
                <div className={styles.tool}>
                    <CodeIcon size={20} onClick={() => onTabChange("login")}/>
                </div>
                <div className={styles.tool}>
                    <FileTextIcon size={20} onClick={() => onTabChange("skills")} />
                </div>
            </div>
        </div>
    )
}

