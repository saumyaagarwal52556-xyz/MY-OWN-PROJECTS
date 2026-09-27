import style from './contacts.module.css'

const Contact =()=>{
    return(
        <div className={style.contact}>
            <div className={style.imageWrapper}>
                <img src='https://plus.unsplash.com/premium_photo-1782338104841-f2093100dbb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D' />
            </div>
            <div className={style.content}>
                <h1>CONTACTS</h1>
                <hr/>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum facere voluptas suscipit quisquam non, ut voluptatem ab ipsam minus quas eaque, at nisi placeat vel nihil obcaecati deserunt? Cumque, excepturi?
                    <br />
                    <br/>

                    <b>Email:</b> <a href='mailto:saumyaagarwal52556@gmail.com'> saumyaagarwal52556@gmail.com</a><br/>

                    <b> Github:</b><a href='https://github.com/saumyaagarwal52556-xyz' target="_blank" rel="noopener noreferrer"> abc1234.azx </a><br/>

                    <b>Linkin:</b><a href='https://www.linkedin.com/in/saumya-agarwal-591175418/' target='_blank' rel='noopenernoreferrer'> know more about me </a><br/>

                    <b>Phone No:</b> <a href='tel:+918433178448'>call me</a> <br/>
                    
                </p>
                <br/>
                <hr/>
                <h3>I design and develop experiences that make people's lives <b>simple</b> </h3>
            </div>
        </div>
    )
}

export default Contact;