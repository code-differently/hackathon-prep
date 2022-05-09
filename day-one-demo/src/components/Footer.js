function Footer(props){
    const {firstName, lastName} = props;
    return(
        <>
            <p>{firstName} {lastName}</p>
        </>
    )
}

export default Footer;