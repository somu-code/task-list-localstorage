import TextField from "@mui/material/TextField";

export default function SearchTask({ search, setSearch }) {
  return (
    <form className="searchForm mt-2" onSubmit={(event) => event.preventDefault()}>
      <TextField
      sx={{width: "90%"}}
        variant="standard"
        id="search"
        type="text"
        role="searchbox"
        label="Search Task"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}
