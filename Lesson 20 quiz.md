1. What does the . map()' array method do?
Answer: the .map method allows for copying and modifying an existing array
Correct Answer: Vanilla js method that returns an array. Whatever gets returned from the call back function provided (OG array items will pass through a callback function)is placed on the same index in the array.

Usually, we take the items from the Original array and modify them in some some way


2. What do we usually use map() for in React?
Answer: ~~To handle data from another source~~. 

Answer was close.
Correction: In react, map converts raw data to an array of JSX elements that can be displayed in the page 

3. Critical thinking: why is using . map()'better than just creating the components manually by typing them out?
Answer: One, it allows for cleaner code. Two, it allows for reusability of components. Three, usually the data will come from somewhere.

Correction: One, we don't usually know the data beforehand. 2. It makes the code self sustaining since whatever data changes, we are not required to do any additional changes.