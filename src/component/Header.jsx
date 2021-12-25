import { useContext } from "react"
import { JobContext } from "../context/JobContext";
import styles from "./Header.module.scss"
const Header = () => {

    const { filterKeyword, RemoveKeyword, ClearKeywords } = useContext(JobContext)
    return (
        <header className={styles.header}>

            <div className={`${filterKeyword.length > 0 ? "search" : null}`}>
                <div className={styles.filter_tags}>
                    {filterKeyword.map((tag, id) => {
                        return (
                            <div className={styles.filter} key={id}>
                                <span>{tag}</span>
                                <img src="./images/icon-remove.svg" alt="remove-icon" onClick={() => RemoveKeyword(tag)} />
                            </div>
                        );
                    })}
                </div>
                {filterKeyword.length > 0 && (
                    <button className={styles.clear} onClick={ClearKeywords}>
                        Clear
                    </button>
                )}
            </div>


        </header>
    )
}

export default Header