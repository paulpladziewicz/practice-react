// use const for functions so that functions are not susceptible to change.
export const Todo = (props) => {
    return (
        <li>{ props.item } <button>Edit</button><button>Update</button><button>Delete</button> </li>
    )

 };

