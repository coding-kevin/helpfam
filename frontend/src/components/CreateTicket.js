import { useForm } from "react-hook-form";
import "../App.css";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  return (
    <section className="create-ticket">
<div>
<form className="ui segment centered form" onSubmit={handleSubmit(onSubmit)} >
  <div className="field">
    <label>Person</label>
    <input type="text" name="name" placeholder="Enter a name" {...register("name", { required: true, pattern: { value: /^[A-Za-z]+$/i, message: "invalid entry"}, maxLength: 30 })}/>
    {errors.name && <span>Name required</span>} 
  </div>
  <div className="field">
    <label>Title</label>
    <input type="text" name="title" placeholder="Create title for ticket" {...register("title", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 60 })} />
    {errors.title && <span>Title required</span>} 
  </div>
  <div className="field">
    <label>Description</label>
    <input type="text" name="description" placeholder="Describe the problem" {...register("description", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 500 })} />
    {errors.description && <span style={{backgroundColor: '#FF7F7F', padding: '2px'}}>Description required</span>} 
  </div>

  <button className="ui button" type="submit">Save</button>
</form>
</div>
</section>
  );
}