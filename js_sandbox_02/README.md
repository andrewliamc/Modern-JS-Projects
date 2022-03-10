# Using Var, Let, and Const Declarations

var
Declares a variable, optionally initializing it to a value.

let
Declares a block scope local variable, optionally initializing it to a value.

const
Declares a read-only named constant.


## Rules and conventions of `var`

1. Can only include these characters: letters, numbers, _, and $
2. They cannot start with a number
3. As an example `$name` will typically only be used with jQuery
4. Using an _, such as `var = _name`, is typically used for private variables

## Multi-word variable conventions
1. Use camelCase such as
`firstName` or
`lastName`

## Rules and conventions of `let`
1. Just like var, let can be created and re-assigned
2. You can initialize them as well `let name` without declaring a value.
3. The `let` statement declares a block-scoped local variable, optionally initializing it to a value.

## Rules and conventions of `const`
1. `const` stands for constant, which indicates that it cannot be changed.
2. Unable to reassign the const to a different value.
3. Have to declare some sort of value; cannot init a `const` without a value.


## When to use `var`, `let`, or `const`:
Use `const` unless you plan on the value changing, you need to initialize it, or using it in an iteration or loop. 


Using `const` lets you and anyone looking at your code know that this value should not be reassigned. It can mutate if it is an array or object, but it cannot reassigned as new primitive value. 

Makes code more robust, more secure, and more readable.