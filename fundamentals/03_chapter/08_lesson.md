**WDI Fundamentals Unit 3**

---

# Boolean Logic

At this point, we've covered most of what you should know about basic expressions. However, there are a few quirks and exceptions that we've (until now) glossed over, expecially related to boolean logic. Let's take a closer look at some of them.

### Undefined and Null
What happens if we try to evaluate a variable that we haven't created or assigned value to? The answer is that JavaScript will usually let us do this, but it will evaluate that variable to one of the following special values to indicate that something's gone wrong.
* **`undefined`** is returned when a variable has been declared, but doesn't have any value assigned to it.
* **`null`** is actually a value that you can assign to a variable as a representation of "no value."

### 'falsey' / 'truthy'
We've seen in the first few lessons that some operators can behave differently depending on the kind of values that they are operating on. For example, in the expression `1 + 2 + 3 + 4`, the `+` operator is performing addition; however, in the expression <code>'Happy birthday, ' + 'Tom'</code>, the `+` operator is working with strings, so it performs a concatenation instead.

Another example of this is the logical operators NOT(`!`), OR (`||`), and AND (<code>&&</code>); although they're primarily used with boolean values, they can also accept inputs that are strings, numbers... pretty much anything. When this happens, the logical operators categorize their inputs as being either 'falsey' and 'truthy'.

Here's a table to show you which kinds of values are considered truthy and falsey in JavaScript.

| 'Falsey'            |  'Truthy' |
|-                    |-          |
| `false`             | `true`    |
| 0                   | All numbers except 0, including 'Infinity' (what you get after dividing by 0) |
| Empty strings ('')  | All non-empty strings |
| Undefined, Null, and NaN ('Not A Number', a special type of numeric value) | Pretty much everything else |


In JavaScript, the boolean operators `!`, `||`, and <code>&&</code> follow the rules below to determine how to behave.
* NOT: If the input is "truthy", return `false`; if the input is "falsey", return `true`.
* OR: Return the first "truthy" value; if both values are "falsey", return the last "falsey" value.
* AND: Return the first "falsey" value; if both values are "truthy", return the last "truthy" value.

### Test Yourself
Can you predict how the following expressions will be evaluated? Check your answers in repl.it.
* `1 || true`
* `3 || null`
* <code>!('')</code>
* <code>false && undefined</code>
* <code>true && !0</code>
* `null || 3`

One of the most common use cases of this is when you're not sure if a variable has been assigned a value. Suppose that `x` represents some input that you've gotten from a user. If the user hasn't given any input, `x` might be `null`.

To compensate for this, we might write the expression `x = x || 10;`. If x has some 'truthy' value, the OR operator will evaluate to `x`, so it would be as if we wrote `x = x`. However, if x were `null`, the OR operator would evaluate to 10 (because `null` is 'falsey'). It's as if we've said "If x doesn't already have a value assigned, set it equal to 10". For that reason, this kind of operation is often called 'conditional assignment'.

---

[Here's another exercise for you](10_exercise.md) - give it a shot.