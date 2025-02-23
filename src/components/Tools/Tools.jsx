import { ChromeIcon, FolderIcon, CodeIcon, FileTextIcon } from "lucide-react"
import styles from "./Tools.module.css"

export function Tools() {
    return (
        <div className={styles.commonTools}>
            <div className={styles.container}>
                <div className={styles.tool}>
                    <ChromeIcon size={20} />
                </div>
                <div className={styles.tool}>
                    <FolderIcon size={20} />
                </div>
                <div className={styles.tool}>
                    <CodeIcon size={20} />
                </div>
                <div className={styles.tool}>
                    <FileTextIcon size={20} />
                </div>
            </div>
        </div>
    )
}

