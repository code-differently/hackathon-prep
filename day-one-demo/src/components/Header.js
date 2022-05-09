
function Header(props){
    const {title, author} = props;
    return(
        <>
            <h1>Wutang Clan is For the Children</h1>
            <h2>{title}</h2> 
            <p>{author}</p>
        </>
    );
}

export default Header;