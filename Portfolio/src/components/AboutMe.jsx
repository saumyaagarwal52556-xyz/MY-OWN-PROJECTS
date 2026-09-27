import style from './aboutme.module.css'

const Aboutme = () => {
    return (
        <div className={style.aboutme}>
            <div className={style.content}>
                <h1> <b>ABOUT ME</b></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque, tempora tempore eligendi voluptates aut, sit totam veniam voluptas, sunt vitae quaerat non. Illum accusamus facilis, optio autem tenetur animi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ad fugiat aspernatur, nesciunt enim iusto. Beatae incidunt ea facere omnis deleniti sint temporibus rem dolores dolorum quaerat, sit, molestias quibusdam!
                    Dolorem ducs explicabo corrupti dolorum et numquam accusantium vitae sequi ducimus dolores exercitationem facilis rerum nemo eligendi rem earum obcaecati voluptatum. Velit voluptatibus ab nostrum accusantium placeat nesciunt sunt expedita.
                    Lorem ipsum dolor sit amet cam sequi molestias sunt nam id corrupti. Ea, eligendi ex! Quo perspiciatis reprehenderit accusantium porro expedita consectetur nobis exercitationem harum soluta, ipsam ea. Exercitationem quia enim ducimus. Minus, neque enim fugit delectus, et doloremque maxime beatae nihil nam vero aperiam. Eum, dolorem quae. Quas magnam nesciunt eum aliquid enim?
                </p>
            </div>
            <div className={style.imageWrapper}>
                <img className={style.image} src='https://images.unsplash.com/photo-1783595468354-7f5543c947b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D' />
            </div>

        </div>
    )
}


export default Aboutme;