import style from './project.module.css'
const Project =()=>{
    return(
        <>
    <div className={style.box}>
        <h1>PROJECTS</h1>
        <div className={style.images}>
            <img src="https://images.unsplash.com/photo-1777873167728-b0d09526d3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1777720871398-ee7a22a72f78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D" />
            
        </div>
    </div>
        </>
    )
}

export default Project;