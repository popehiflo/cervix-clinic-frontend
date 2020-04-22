import React, { useState } from 'react'

const useSelectPais = (stateInicial, opciones) => {

    // state del custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectPais = () => (
        <select className="browser-default" value={state} onChange={e => actualizarState(e.target.value)}>
            {opciones.map( opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectPais]
}

export default useSelectPais;