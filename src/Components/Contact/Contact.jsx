import './Contact.css';

const Contact = () => {
    return <div className='contact'>
        <div className='contact-title'>
            <h1>Let`s Connect</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h2>Leave your info</h2>
                <form className='contact-form'>
                    <label>Name:</label>
                    <input type="text" />
                    <br />
                    <label>Email:</label>
                    <input type="email" />
                    <br />
                    <label>Message:</label>
                    <textarea />
                    <br />
                    <button type="submit">Send</button>
                </form>
              
            </div>

        </div>
       </div>;
};
export default Contact;
