import React from "react"
import { initialState, SecurityCodeActionTypes, securityCodeReducer } from "./reducer"

export default function UseReducer() {
  const [state, dispatch] = React.useReducer(securityCodeReducer, initialState);

  function onCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: SecurityCodeActionTypes.SET_CODE,
      payload: e.target.value
    });
  }

  function onCheck(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      type: SecurityCodeActionTypes.SET_LOADING,
    });
  }

  function onTryAgain() {
    dispatch({
      type: SecurityCodeActionTypes.SET_RESET,
    });
  }

  function onConfirm() {
    dispatch({
      type: SecurityCodeActionTypes.SET_REMOVED,
    });
  }

  React.useEffect(() => {
    if (!state.loading) {
      return;
    }

    setTimeout(() => {
      if (state.code === '1234') {
        dispatch({
          type: SecurityCodeActionTypes.SET_SHOULD_CONFIRM,
        });
      }
      else {
        dispatch({
          type: SecurityCodeActionTypes.SET_ERROR,
        });
      }
    }, 3000);
  }, [state.loading]);

  if (state.shouldConfirm) {
    return (
      <div>
        <h2>Eliminar con Use Reducer</h2>

        <p>Por favor, confirma que deseas eliminar tu cuenta.</p>

        <button type="button" onClick={onConfirm}> Confirmar </button>
        <button type="button" onClick={onTryAgain}> Cancelar </button>
      </div>
    )
  } else if (state.loading) {
    return (
      <div>
        <h2>Eliminar con Use Reducer</h2>

        <p>Verificando código de seguridad...</p>
      </div>
    )
  } else if (state.error) {
    return (
      <div>
        <h2>Eliminar con Use Reducer</h2>

        <p>El código de seguridad es incorrecto. Por favor, inténtalo de nuevo.</p>
        <button type="button" onClick={onTryAgain}>Volver a intentar</button>
      </div>
    )
  } else if (state.isRemoved) {
    return (
      <div>
        <h2>Eliminar con Use Reducer</h2>

        <p>¡Tu cuenta ha sido eliminada! 😢</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Eliminar con Use Reducer</h2>

        <p>Por favor, escribe el código de seguridad 🔒.</p>

        <form onSubmit={onCheck}>
          <input
            type="text"
            placeholder="código de seguridad"
            value={state.code}
            onChange={onCodeChange}
            disabled={state.loading}
          />
          <button type="submit" disabled={state.loading}> Comprobar </button>
        </form>
      </div>
    )
  }

}
