## Redux

Es una biblioteca para la administración del estado en aplicaciones JavaScript, utilizada comúnmente con React, pero agnóstica de la UI.
   
* __Estado único__: Toda la información de la aplicación se almacena en un único objeto.
* __Solo lectura__: La única forma de modificar el estado es enviando una acción describiendo los cambios.
* __Funciones Puras__: Los cambios en el estado se realizan a través de funciones reducers.

### Tabla de Contenidos
 * [componentes](#componentes)
    * store
    * actions
    * reducers
 * [caracteristicas](#caracteristicas)
    * sincronicidad
    * asincronicidad
    * control de flujo
    * configuracion basica

### Componentes
   
* __Store__: Almacén central que contiene el estado de la aplicación. Solo debe haber una única store en una aplicación Redux.
    ```js
    import { createStore } from 'redux';
    const store = createStore(reducer);
    ```
* __Actions__: Las acciones son objetos que describen lo que sucedió. Son el único medio para modificar el estado en Redux.
    ```js
    const increment = () => ({ type: 'INCREMENT' })
    ```
* __Reducers__: Funciones puras que toman el _estado actual y una acción_, y devuelven un nuevo estado.
    ```js
    const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT': 
            return state - 1;
        default: 
            return state;
    } }
    ```

### Caracteristicas

* __Sincrónicidad__: Son las acciones que modifican el estado de manera inmediata.
    ```js
    const increment = () => ({ type: 'INCREMENT' });
    store.dispatch(increment());
    ```
* __Asincrónicidad__: Para manejar acciones que requieren tiempo, como solicitudes a servidores.
    ```js
    const fetchUser = () => (dispatch) => 
    fetch('/user')
    .then(response => response.json())
    .then(payload => dispatch({type:'FETCH_USER_SUCCESS', payload}))
    .catch(error => dispatch({type:'FETCH_USER_FAILURE', error}));
    ```  
* __Control de Flujo__: Los middlewares son funciones que interceptan las acciones enviadas antes de que lleguen al reducer.
    ```js
    import logger from 'redux-logger';
    const store = createStore(reducer, applyMiddleware(logger));
    ```
* __Configuracion basica__: Herramientas de desarrollo (_DevTools_) para depurar aplicaciones Redux.
    ```js
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    ```