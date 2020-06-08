import React from 'react';
import PedidoFila from './PedidoFila';

const PedidosTabla = ({pedidos, setObjPedido}) => {
    return (
        <table className="table table-hover table-bordered table-striped mt-3">
            <thead>
                <tr>
                    <th><strong>#</strong></th>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Repartidor</th>
                    <th>Cliente</th>
                    <th>Entrega Inicio</th>
                    <th>Entrega Fin</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    pedidos.map((pedido, i) => 
                    {
                        return <PedidoFila numero={i} pedido={pedido} key={pedido.id} setObjPedido={setObjPedido}/>
                    })
                }
            </tbody>
        </table>
    );
}

export default PedidosTabla;
