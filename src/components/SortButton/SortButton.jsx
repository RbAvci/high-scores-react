export default function SortButton({ toggleSort }) {
  return (
    <button data-testid="toggle-sort-button" className="button" onClick={toggleSort}>
      Toggle Sort
    </button>
  );
}
