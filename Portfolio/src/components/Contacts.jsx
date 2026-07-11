import style from './contacts.module.css'

const Contact =()=>{
    return(
        <div className={style.contact}>
            <div>
                <img src='https://plus.unsplash.com/premium_photo-1782338104841-f2093100dbb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D' />
            </div>
            <div>
                <h1>CONTACTS</h1>
                <hr/>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum facere voluptas suscipit quisquam non, ut voluptatem ab ipsam minus quas eaque, at nisi placeat vel nihil obcaecati deserunt? Cumque, excepturi?
                    <br />
                    <br/>
                    <b>Email:</b> abc12345.xyz.com <br/>
                    <b> Github:</b> abc1234.azx <br/>
                    <b>Linkin:</b> asdf.123 <br/>
                    <b>TikTok:</b> asdf.123 <br/>
                </p>
                <br/>
                <hr/>
                <h3>I design and develop experiences that make people's lives <b>simple</b> </h3>
                

            </div>
        </div>
    )
}

export default Contact;