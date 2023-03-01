import './ModalTodo.css';

export const ModalTodo = ({listTodo, id, modalShow}) => {


    return(
        <div className='backdrop'>
                {listTodo && listTodo.map(item => {
                    if(item.id === id) {
                        return (
                            <div key={item.id} className='backdropForm'>
                            <h1 className='backdropTitle'>{item.title}</h1>
                            <p className='backdropText'>Description: </p>
                            <p className='backdropDesc'>{item.description}</p>
                            <label className='backdropStatus'>
                                <span className='backdropText'>Status: </span>
                            {item.status ? <input type="checkbox" defaultChecked className='backdropInput' onChange={()=> item.status = !item.status}/> : <input type="checkbox" className='backdropInput' onChange={()=> item.status = !item.status}/>}
                            </label>
                            <button type="button" onClick={()=>modalShow(prev=>!prev)} className='backdropBtn'>Close</button>
                            </div>
                        )
                    }
                    return ''
                })}
        </div>
    )
}