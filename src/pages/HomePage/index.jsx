import React from "react";
import { NotesDrawer } from "../../shared/Notes/NotesDrawer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const HomePage = () => {

    const queryClient = useQueryClient()

    const query = useQuery({ queryKey: ["todos"], queryFin: getTodos})

    const mutation = useMutation({mutationFn: postTodo,
    onSuccess: ()=> {
        queryClient.invalidateQueries({queryKey: ['todos']})
    }})
// testing
    return (
        <div>
            <ul>
                {query.data?.map((todo)=> <li key= {todo.id}>{todo.title}</li>)}
            </ul>
              <button
            onClick={()=>{
            mutation.mutate({
                id: Date.now(),
                title: 'Do Laundry',
            })
        }}>
            Add Todo
        </button>

        <h1>Home Page</h1>
        <NotesDrawer/>
        </div>
    );
}
