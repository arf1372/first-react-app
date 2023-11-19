function MyButton(props: {counts: number, onClick: () => void}) {
    return (
        <button onClick={props.onClick}title='Click to reset'>I&#39;m a button!<br /> clicked: {props.counts} <br/>Click me to reset!</button>
    );
}

export default MyButton;