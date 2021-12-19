import styles from "./styles";

function Inline(props) {
    return (
        <div>
            <div style={styles.whiteOnRedDynamic(props.type)}>Hello Inline!</div>
        </div>
    )
}

export default Inline;
