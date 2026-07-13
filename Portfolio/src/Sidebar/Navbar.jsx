import style from './Navbar.module.css'
const Navbar =()=>{
    return(
        <div className={style.Nav}>
            <ul>
                <li>
                    home
                </li>
                <li>
                    aboutme
                </li>
                <li>
                    projects
                </li>
            </ul>
        </div>

    )

}

export default Navbar;