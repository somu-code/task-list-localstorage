import Typography from "@mui/material/Typography";
import RenderTask from "./RenderTask";

export default function Content({ tasks, handleCheck, handleDelete }) {
  return (
    <>
      {tasks.length ? (
        <div className="task-container mt-4">
          <h3 className="text-xl font-medium">Today's tasks</h3>

          <ul className="mt-4">
            {tasks.map((element) => (
              <li
                className="item bg-[#fcfbfc] my-4 rounded-full px-2 flex flex-row justify-between"
                key={element.id}
              >
                <RenderTask
                  element={element}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Typography variant="h6" sx={{ marginBlock: 2 }}>
          You have no task
        </Typography>
      )}
    </>
  );
}
