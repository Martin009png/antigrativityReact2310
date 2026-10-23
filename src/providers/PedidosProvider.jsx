import React, {useState} from 'react'
import PedidosContext from './context';

function PedidosProvider(children) {
    const [pedidos, setPedidos] = useState([]);


    //TODO: exponer el crud, crearPedidos, obtener...
    
    return(
        <PedidosContext.Provider>{children}</PedidosContext.Provider>
    )
}

export default PedidosProvider
