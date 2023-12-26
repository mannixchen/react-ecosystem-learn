import { useEffect, useReducer, useRef, useMemo, useCallback } from 'react';
import { getPerson } from './getPerson';
import { Reset } from './Reset';

function sillyExpensiveFunction() {
  console.log('Executing silly function');

  let sum = 0;

  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

export function PersonScore() {
  type State = {
    name: string | undefined;
    score: number;
    loading: boolean;
  };
  type Action =
    | {
        type: 'initialize';
        name: string;
      }
    | {
        type: 'add';
      }
    | {
        type: 'sub';
      }
    | {
        type: 'reset';
      };
  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'initialize':
        return { name: action.name, score: 0, loading: false };
      case 'add':
        return { ...state, score: state.score + 1 };
      case 'sub':
        return { ...state, score: state.score - 1 };
      case 'reset':
        return { ...state, score: 0 };
      default:
        return state;
    }
  }
  let [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });
  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  let addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    async function getThePerson() {
      const { name } = await getPerson();
      dispatch({ type: 'initialize', name });
    }

    getThePerson();
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);
  const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <h3>
        {name}, {score} {expensiveCalculation}
      </h3>
      <button ref={addButtonRef} onClick={() => dispatch({ type: 'add' })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'sub' })}>Subtract</button>
      <Reset onClick={handleReset}></Reset>
    </div>
  );
}
