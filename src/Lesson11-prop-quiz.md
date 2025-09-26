1. What do props help us accomplish?
answer: Code reusability, using the same component by passing the different values through use of props

2. How do you pass a prop into a component? 
answer: to pass a prop into a component, first, the component must have an argument on the function (i.e. Contacts(prop)). Then on the App.jsx,  put the values you wish to use as if it is an html component on calling the componnet (e.g. image="image1.png" name ="name of yours"). Make sure to have it inside before closing the component
3. Can I pass a custom prop (e.g. `blahblahblah={true}`)to a native DOM element? (e.g. <div blahblahblah={true}> ) Why or why not?
Answer: No, because the OSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/ attributes speci fied in the HTML specification.
(Which doesn't include properties like s blahbIahb1ahS)

Custom props are for React components (your own functions/classes).
❌ Native DOM elements (like <div>, <img>, <p>) only accept valid HTML attributes.
If you need custom data on a DOM element, use the data-* attributes:

4. How do I receive props in a component?
    function Navbar() {
        return (
        <header>
        < / header >
        )
    }

Answer:
    function Navbar(props) {
        return (
        <header>
        < / header >
        )
    } 
5. What data type is `props` is when the component receives it?
Answer: Object