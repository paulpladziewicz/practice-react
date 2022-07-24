const TodoInput = () => {
    const handleOnChange = () => {
        console.log('text entered changed');
    }
    return (
        <div>
            <input type="text" onChange={handleOnChange}/>
            <button>Submit</button>
        </div>
    )
}

export default TodoInput;