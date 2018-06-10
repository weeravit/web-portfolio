export default () => (
    <div>
        <nav className="level" style={style.header}>
            <p className="level-item has-text-centered">
                <a className="link is-info" style={style.text}>Home</a>
            </p>
            <p className="level-item has-text-centered">
                <a className="link is-info" style={style.text}>Home</a>
            </p>
            <p className="level-item has-text-centered">
                <a className="link is-info" style={style.text}>Menu</a>
            </p>
            <p className="level-item has-text-centered">
                <a className="link is-info" style={style.text}>Reservations</a>
            </p>
            <p className="level-item has-text-centered">
                <a className="link is-info" style={style.text}>Contact</a>
            </p>
        </nav>
    </div>
)

const style = {
    header: {
        height: '6em',
        backgroundColor: '#3D5AFE'
    },
    text: {
        color: '#ffffff'
    }
}
