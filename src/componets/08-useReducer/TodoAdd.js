import { useForm } from "../../hooks/useForm"

export const TodoAdd = ({handleAddTodo}) => {

  
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo);
    reset();
  }
  
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete='off'
          value={description}
          onChange={handleInputChange}
        />
        <div className="d-grid gap-2">
          <button className="btn btn-primary mt-1"
            type="submit"
          >Agregar</button>
        </div>
      </form>
    </>
  )
}