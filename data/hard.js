const hard = [
    {
      "question": "Which of the following is correct about JavaScript closures?",
      "options": ["Closures are variables", "Closures are functions", "Closures are statements", "All of the above"],
      "answer": "Closures are functions"
    },
    {
      "question": "Which of the following is true about React state?",
      "options": ["State is read-only", "State is mutable", "State can only be used in class components", "State cannot be used in function components"],
      "answer": "State is mutable"
    },
    {
      "question": "Which lifecycle method is invoked immediately after a React component is mounted?",
      "options": ["componentDidMount", "componentWillMount", "render", "constructor"],
      "answer": "componentDidMount"
    },
    {
      "question": "How do you bind the 'this' keyword inside a class method in React?",
      "options": ["Using the bind method in the constructor", "Using the arrow function syntax", "Both of the above", "None of the above"],
      "answer": "Both of the above"
    },
    {
      "question": "What is the correct way to import a CSS file in a React component?",
      "options": ["import styles from './App.css'", "import './App.css'", "import css from './App.css'", "import './App.styles'"],
      "answer": "import './App.css'"
    },
    {
      "question": "Which of the following is correct about keys in React?",
      "options": ["Keys help React identify which items have changed", "Keys should be unique among siblings", "Keys are used to improve performance", "All of the above"],
      "answer": "All of the above"
    },
    {
      "question": "How do you lift state up in React?",
      "options": ["By passing state as props to child components", "By passing a callback to child components", "Both of the above", "None of the above"],
      "answer": "Both of the above"
    },
    {
      "question": "What is the correct way to update the state in a functional component using hooks?",
      "options": ["this.setState", "useState", "useReducer", "stateUpdater"],
      "answer": "useState"
    },
    {
      "question": "How do you conditionally render a component in React?",
      "options": ["Using if-else statements", "Using ternary operators", "Using && operator", "All of the above"],
      "answer": "All of the above"
    },
    {
      "question": "Which of the following methods is used to access the DOM nodes in React?",
      "options": ["ref", "querySelector", "getElementById", "getElementByClassName"],
      "answer": "ref"
    },
    {
      "question": "What is the purpose of propTypes in React?",
      "options": ["To validate the props passed to a component", "To define default props for a component", "To define the state structure", "To specify the component's CSS classes"],
      "answer": "To validate the props passed to a component"
    },
    {
      "question": "What is the difference between state and props in React?",
      "options": ["State is read-only, props are mutable", "State is mutable, props are read-only", "Both are mutable", "Both are read-only"],
      "answer": "State is mutable, props are read-only"
    },
    {
      "question": "Which method is used to handle side effects in a functional component using hooks?",
      "options": ["useEffect", "useState", "useReducer", "useSideEffects"],
      "answer": "useEffect"
    },
    {
      "question": "How do you handle events in React?",
      "options": ["Using inline JavaScript", "Using event handlers", "Using event listeners", "Using both event handlers and listeners"],
      "answer": "Using event handlers"
    },
    {
      "question": "Which of the following is the correct way to update state based on previous state?",
      "options": ["this.setState({count: this.state.count + 1})", "this.setState(prevState => ({count: prevState.count + 1}))", "Both of the above", "None of the above"],
      "answer": "this.setState(prevState => ({count: prevState.count + 1}))"
    },
    {
      "question": "What is the correct syntax for creating a context in React?",
      "options": ["const MyContext = React.createContext()", "const MyContext = React.createContext({})", "Both of the above", "None of the above"],
      "answer": "Both of the above"
    },
    {
      "question": "How do you consume a context in a functional component?",
      "options": ["Using useContext hook", "Using Context.Consumer", "Both of the above", "None of the above"],
      "answer": "Both of the above"
    },
    {
      "question": "Which hook is used to manage state in a functional component?",
      "options": ["useEffect", "useReducer", "useState", "useMemo"],
      "answer": "useState"
    },
    {
      "question": "How do you handle asynchronous operations in React?",
      "options": ["Using promises", "Using async/await", "Using useEffect hook", "All of the above"],
      "answer": "All of the above"
    },
    {
      "question": "What is the correct way to pass props to a component?",
      "options": ["<Component {...props} />", "<Component props={props} />", "<Component {props} />", "<Component />"],
      "answer": "<Component {...props} />"
    },
    {
      "question": "What is the correct way to use useReducer hook?",
      "options": ["const [state, dispatch] = useReducer(reducer, initialState)", "const [state, dispatch] = useReducer(initialState, reducer)", "const [dispatch, state] = useReducer(reducer, initialState)", "const [state, dispatch] = useState(reducer, initialState)"],
      "answer": "const [state, dispatch] = useReducer(reducer, initialState)"
    },
    {
      "question": "How do you create a ref in a functional component?",
      "options": ["Using useRef hook", "Using createRef method", "Both of the above", "None of the above"],
      "answer": "Using useRef hook"
    },
    {
      "question": "How do you perform side effects in a class component?",
      "options": ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "All of the above"],
      "answer": "All of the above"
    },
    {
        "question": "Which HTML attribute is used to define inline styles?",
        "options": ["class", "style", "id", "css"],
        "answer": "style"
      },
      {
        "question": "Which CSS property is used to change the text color of an element?",
        "options": ["font-color", "text-color", "color", "text-style"],
        "answer": "color"
      },
      {
        "question": "In JavaScript, which method is used to add an element to the end of an array?",
        "options": ["push()", "pop()", "shift()", "unshift()"],
        "answer": "push()"
      },
      {
        "question": "Which HTML element is used to specify a footer for a document or section?",
        "options": ["bottom", "footer", "section", "foot"],
        "answer": "footer"
      },
      {
        "question": "How can you apply a CSS class to an HTML element?",
        "options": ["id='classname'", "class='classname'", "style='classname'", "apply='classname'"],
        "answer": "class='classname'"
      },
      {
        "question": "In JavaScript, which method is used to access HTML elements by their ID?",
        "options": ["getElementById()", "getElementByClass()", "getElementByTagName()", "querySelector()"],
        "answer": "getElementById()"
      },
      {
        "question": "Which CSS property controls the text size?",
        "options": ["font-style", "text-size", "font-size", "text-style"],
        "answer": "font-size"
      }
]

export default hard