function Button(props) {
  return (
    <button className={`${props.color} ${props.fontWeight} text-white px-5 py-2 rounded-full`}>
      {props.text}
    </button>
  );
}

export default Button;
