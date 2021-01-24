import rhinoImage from "./rhino.png";

function Rhino(props) {
	return (
		<div
			className="rhino"
            style={{ top: props.rhino.top, left: props.rhino.left }}
            title={props.rhino.id}
		>
			<button onClick={() => props.removeRhino(props.rhino.id)}>remove</button>
			<img src={rhinoImage} alt="rhino" />
		</div>
	);
}

export default Rhino;
