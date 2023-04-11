import React from 'react';

const Blog = () => {
    return (
        <div className='my-container mt-4'>
            <div className='border shadow-md rounded-md p-3'>
                <h1 className='text-center font-semibold text-2xl'>a. When should you use context API?</h1>
                <p><span className='font-bold'>Answer:</span>Usually , I will pass information from  a parent component to a child component via props. when we use context api then we can pass data easily from parent component to child component .At first we create context in parent component as like as tower . then we can distribute props all component on the app easily .Pass it to the UseContext() hook to read it in any child component. After that  Warp children into provider to provide it from a parent. at this reason easily send data one component to another component so we can use context api.</p>
            </div>
            <div className='border shadow-md rounded-md p-3 mt-3'>
            <h1 className='text-center font-semibold text-2xl'>b. what is a Custom hook?</h1>
            <p><span className='font-bold'>Answer:</span>A custom hook is a special javaScript function whose name starts with "use" and can be used to call other hooks. A custom hook does not require a specific signature. there are some rules of custom hook: 1.Don't call Hooks inside loops, conditions, or nested functions. 2.Don't call Hooks from regular JavaScript functions. </p>
            </div>
            <div className='border shadow-md rounded-md p-3 mt-3'>
                <h1 className='text-center font-semibold text-2xl'>c.What is useRef?</h1>
                <p><span className='font-bold'>Answer:</span>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. In this situation we use useRef(). useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).The useRef Hook can also be used to keep track of previous state values. This time We use a combination of useState useEffect and UseRef to keep track of the previous state.</p>


            </div>
            <div className='border shadow-md rounded-md p-3 mt-3'>
            <h1 className='text-center font-semibold text-2xl'>c.What is useMemo?</h1>  
            <p><span className='font-bold'>Answer:</span>The React useMemo() Hook returns a memoized value.The useMemo Hook only runs when one of its dependencies update.The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>

            </div>
        </div>
    );
};

export default Blog;