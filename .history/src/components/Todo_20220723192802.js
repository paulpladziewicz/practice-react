// use const for function to prevent inadvertent changes.
// export const Todo = (props) => {
//     return (
//         <li>{props.item} <button>Edit</button><button>Update</button> <button>Delete</button> </li>
//     )

// };



const Todo = (props) => {
    return (
        <li>{props.item}
            <button>Edit</button>
            <button>Update</button>
            <button>Delete</button>
        </li>
    )

};

export default Todo