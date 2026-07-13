import Button from '../Sidebar/Button';
import style from './home.module.css';

const Home = () => {
    return (
        <div className={style.side}>
            <div className={style.left}>
                <Button/>
            </div>
            <div>
                <h1 className={style.heading}>PORTFOLIO</h1>
            </div>
        </div>
    )
}


export default Home;