export default function Task({ taskName }) {
  return (
    <div>
      <input type="checkbox" id="name" />
      <label htmlFor="name">{taskName}</label>
    </div>
  );
}
