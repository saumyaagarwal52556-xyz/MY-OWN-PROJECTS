import style from './aboutme.module.css'

const Aboutme =()=>{
    return(
        <div className={style.aboutme}>
            <div >
                <h1> <b>ABOUT ME</b></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque, tempora tempore eligendi voluptates aut, sit totam veniam voluptas, sunt vitae quaerat non. Illum accusamus facilis, optio autem tenetur animi!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ad fugiat aspernatur, nesciunt enim iusto. Beatae incidunt ea facere omnis deleniti sint temporibus rem dolores dolorum quaerat, sit, molestias quibusdam!
                Dolorem ducimus earum dolores aliquid adipisci accusantium repellat qui saepe expedita nisi veritatis, illum nostrum tempora sequi enim rem labore! Officia consequatur delectus reiciendis sint quod eos id magni eligendi.
                Quia consectetur minus est voluptas, harum asperiores quod tempore sunt similique facilis esse adipisci beatae rerum, facere nemo necessitatibus molestias? Repellat officia blanditiis perferendis pariatur vel dolorem! Numquam, hic reiciendis!
                Aliquid, itaque! Totam rem blanditiis laborum consequuntur voluptatem possimus praesentium laboriosam, quae molestias cum esse dolorem laudantium, repellendus facere corporis eius quibusdam iste animi, sunt a dicta dignissimos. Consectetur, repellat?
                Neque, perspiciatis explicabo corrupti dolorum et numquam accusantium vitae sequi ducimus dolores exercitationem facilis rerum nemo eligendi rem earum obcaecati voluptatum. Velit voluptatibus ab nostrum accusantium placeat nesciunt sunt expedita.

                </p>
            </div>
            <div>
                <img className={style.image} src='https://images.unsplash.com/photo-1783595468354-7f5543c947b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D' />
            </div>
            
        </div>
    )
}


export default Aboutme;