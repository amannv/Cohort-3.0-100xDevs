import { TODOS } from "./todos";
import { atomFamily } from "recoil";

export const todoAtomFamily = atomFamily({
   key: "todosAtomFmily",
   default: (id) => {
    return TODOS.find(x => x.id == id);
   },
});