function Button(){

    const styles = {
        backgroundColor:" hsl(200, 100%, 50%)",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
    }
    return(<button style={styles}>Click Me</button>);
}
export default Button