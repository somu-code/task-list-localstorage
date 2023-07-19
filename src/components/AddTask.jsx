import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useRef } from "react";

export default function AddTask({ handleSubmit, newTask, setNewTask }) {
  const inputRef = useRef();
  return (
    <form
      className="flex flex-row justify-between items-center px-2 my-4"
      onSubmit={(event) => handleSubmit(event)}
    >
      <TextField
        inputRef={inputRef}
        id="standard-basic"
        label="Add Task"
        variant="standard"
        sx={{ flexGrow: 1, marginRight: 1 }}
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <IconButton
        type="submit"
        aria-label="Submit"
        onClick={() => inputRef.current.focus()}
      >
        <AddIcon
          sx={{
            fontSize: 24,
            backgroundColor: "#58518e",
            color: "white",
            borderRadius: 5,
            fontWeight: 300,
          }}
        />
      </IconButton>
    </form>
  );
}
