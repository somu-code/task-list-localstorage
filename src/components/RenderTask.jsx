import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

export default function RenderTask({ handleCheck, handleDelete, element }) {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={element.checked}
            onChange={() => handleCheck(element.id)}
          />
        }
        label={
          <Typography
            sx={{
              fontWeight: 500,
              textDecoration: element.checked ? "line-through" : null,
            }}
            onDoubleClick={() => handleCheck(element.id)}
          >
            {element.task}
          </Typography>
        }
        sx={{ paddingLeft: 1 }}
      />
      <IconButton aria-label="delete" onClick={() => handleDelete(element.id)}>
        <DeleteIcon />
      </IconButton>
    </>
  );
}
