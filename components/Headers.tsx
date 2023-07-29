export function Header(props: { title: string }) {
  return <h1>{props.title ? props.title : "Default title"}</h1>;
}

export function Subheader1(props: { title: string }) {
  return <h2>{props.title ? props.title : "Default title"}</h2>;
}
