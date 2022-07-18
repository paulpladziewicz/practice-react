// use const for functions so that functions are not susceptible to change.
export const Todo = (props) => {
    // practice destructuring props

    const handleOnChange = () => {
        console.log('checked');
    }

    return (
        <li>
            { props.item }
            <input type='checkbox' checked={false} onChange={handleOnChange}/>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
 };

