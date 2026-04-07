- Array
- Accessing Values
- Arrays are mutable
- typeOf array is an object
- Array methods
  - length
  - toString()
  - join()
  - pop()
  - push()
  - shift()
  - unshift()
  - delete()
  - concat()
  - sort()
  - splice()
  - slice()
  - reverse()
- Looping through Arrays
  - forEach loop
  - forIn loop
    - let parent = { x: 10 };
      let obj = Object.create(parent);
      obj.y = 20;

      for (let key in obj) {
      console.log(key);
      }

      Result:
      y
      x ❌ (comes from parent)

      for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
      console.log(key);
      }
      }

      Result:
      y ✅ only own property

  - forOf loop
  - Map
  - Filter
  - Reduce (reduce() internally loops for you)
    - arr.reduce((acc,curr))
      acc -> accumulator
      👉 stores the result so far
      curr → current value
  - Array.from
