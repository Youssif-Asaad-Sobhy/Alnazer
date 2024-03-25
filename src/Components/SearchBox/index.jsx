export default function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div className={"container mt-5 me-5"}>
      <div
        className="search-container mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          placeholder={"Search..."}
          className={"search"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          defaultValue={""}
        />
      </div>
    </div>
  );
}
