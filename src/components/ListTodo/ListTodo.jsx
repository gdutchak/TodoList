import './ListTodo.css';

export const ListTodo = ({listTodo, idTodo, modalShow}) => {


return (
    <table>
        <thead>
            <tr>
                <td className='tableHead'>ID</td>
                <td className='tableHead'>TITLE</td>
                <td className='tableHead'>DESCRIPTION</td>
                <td className='tableHead'>STATUS</td>
            </tr>
        </thead>
        <tbody>
            {listTodo && listTodo.map(item => {
                return(
                    <tr key={item.id} onClick={(e)=>{modalShow(prev=>!prev); idTodo(item.id)}}>
                        <td className='tableBody'>{item.id}</td>
                        <td className='tableBody'>{item.title.length > 10 ? `${item.title.slice(0, 10)}...` : item.title}</td>
                        <td className='tableBody'>{item.description.length > 20 ? `${item.description.slice(0, 20)}...` : item.description}</td>
                        <td className='tableBody'>
                            <input type='checkbox' onChange={()=> item.status = !item.status} onClick={(e)=> e.stopPropagation()} className='inputTable'/>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
)
}