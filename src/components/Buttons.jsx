export default function Buttons() {
    const linkedIn = "https://www.linkedin.com/in/vijay-cpp/";
    const mail = "mailto:yourstrulyvijay12@gmail.com";

    return (
        <div>

            <button>
                <a href={linkedIn}><i className="fa-brands fa-linkedin fa-xl"></i>LinkedIn</a>
            </button>

            <button>
                <a href={mail}><i className="fa-xl fa-solid fa-envelope"></i>E-Mail</a>
            </button>

        </div>
    );
}