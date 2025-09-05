import { RecoilRoot, useRecoilState } from "recoil"
import { todoAtomFamily } from "./atoms"


function App() {
  return (
    <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    </RecoilRoot>
  )
}

function Todo({id}) {
  const [todo , setTodo] = useRecoilState(todoAtomFamily(id));

  return (
    <>
    {todo.title}
    <br />
    {todo.description}
    <br />
    </>
  )
}

export default App