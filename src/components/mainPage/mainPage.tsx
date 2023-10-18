import styles from './mainPage.module.css'
import {Link} from "react-router-dom";

const PATHS = ['/react', '/vue', '/next', '/angular']
export const MainPage = () => {

    return (
        <div className={styles.cardsWrapper}>
            {PATHS.map((path) => (
                <Link key={path} to={path}>
                    <div className={styles.testCard}>
                        <h2>Тестирование по {path}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MainPage
