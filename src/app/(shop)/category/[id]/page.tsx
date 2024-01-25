
interface Props {
  params:{
    id:string
  }
}
export default function({params}: Props) {
  
  const {id} = params; 

  return (
    <div>
      <h1>Categorias Page {id}</h1>
    </div>
  );
}