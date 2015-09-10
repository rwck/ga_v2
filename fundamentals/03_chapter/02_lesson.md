**WDI Fundamentals Unit 3**

---

# Data, Operators, and Expressions

You've probably picked up a scientific calculator at some point in the past and
started playing around with it. You punch in a big number (for example, 9876435),
then `x`, and then another big number (say, 373848221), hit the `=` button, and
the calculator spits back a result (in this case, 3692287654572135).

![Calculator](../assets/chapter3/calculator.png)

That thing that we type into the calculator is called an **expression**: a
collection of values (*12345*) and operations (like **+** or **x**).

The process of reducing this expression down to a single value is called **evaluation**.

The repl.it console is similar in many ways to this calculator. It accepts an
expression (in JavaScript) from the user and attempts to evaluate that expression,
yielding a single value.

Before we tackle fully-fledged JavaScript expressions, let's first look at their
two components: data and operators.

<br>

## Data (a.k.a. Values)
Calculators can only operate on numbers, but computers can perform calculations
on many different kinds of data, including:

* **Numbers**: Pretty self-explanatory. Some languages draw a distinction between Integers (whole numbers) and Floating Point numbers (decimals), but in JavaScript they're considered the same.<br>
<u>Examples</u>: `20`, `-4.5`, `300`, `99.99`

* **Strings**: Strings are groups of characters (either letters, numbers, or special characters like punctuation, spaces, or parentheses). They come in two varieties, <code>'single-quote'</code> (also sometimes called 'string literals') and <code>"double-quote"</code>. Though there are some differences between the two, don't worry about them for now. Strings are typically used to store text for people to read.<br><u>Examples</u>: <code>'hello'</code>, <code>'goodbye'</code>, <code>'moc.liamg@gmail.com'</code>

* **Booleans**: This one's probably new for you. Boolean-type data only has two
possible values, `true` and `false`.

If you forget what type of data you're dealing with, you can run the `typeof`
command. Try typing the following lines into repl.it - what responses do you get?

* <code>typeof 'hello';</code>
* <code>typeof 24;</code>
* <code>typeof 3.45;</code>
* <code>typeof true;</code>

> **HINT**  You may have noticed that each of those lines ended in a `;` - in
> JavaScript, a semicolon is used to denote the end of a line. Although your code
> may execute without them, there are cases where a missing semicolon can cause
> unexpected results. Just get in the habit of using them.

### Test Yourself
Try to predict the types of each of the following bits of data. Check your answers
with `typeof` in repl.it - were you correct?

* <code>24</code>
* <code>'99'</code>
* <code>'true'</code>
* <code>false</code>


## Operators
Of course, simply having data sitting around isn't very useful. Operators take
values as their inputs (also known as **arguments**) and produce new data as output.
There are *many* different operators out there, but here are some of the common ones:

* **Arithmetic** (`+`, `-`, `*`, `/`): These all work like you'd expect. In the expression `2 + 2`, the `+` operator takes both `2`s as inputs, and causes that whole expression to evaluate to `4`.

>**Note** When given String arguments, the `+` operator actually behaves
differently - it 'concatenates' two strings together to make one big string.
<br><u>For example</u>: <code>'Hello' + ' ' + 'Bob'</code> will evaluate to <code>'Hello Bob'</code>.

* **Modulus** (`%`): Remember remainders? For example, `5` divided by `3` equals `1` with a remainder of `2`. The modulus operator takes two numbers as inputs and returns what's leftover from the division.
<br><u>For example</u>: `15 % 4` will evaluate to `3`.

* **Inequality** (<code>></code>, <code><</code>): These operators take two numbers as inputs, but unlike the previous operators, they give back *boolean* values.
<br><u>For example</u>: <code>5 > 1</code> will evaluate to `true`, while <code>10 < 5</code> will evaluate to `false`.

* **Equality** (`===`,`==`) : These operators will accept any two types of data as input, and (just like the Inequality operators) will also evaluate to a boolean value. The first of these is called a 'strict equality' - it will only evaluate `true` if both sides are completely identical in data type and value - while the second, the 'loose equality', has a little more wiggle room.
<br><u>For example</u>:

```javascript
5 === 5;
// => true

5 === '5';
// => false

5 == 5;
// => true

5 == '5';
// => true
```

* **Logical Operators** (`!`, `||`, <code>&&</code>): These operators both take and give back boolean values.
    * NOT (`!`) will reverse the value of any boolean.
        `!true` // `false`
    * OR  (`||`) takes in two boolean arguments; if at least one is `true`, then it will evaluate to `true`, but if both are `false` it will evaluate as `false`.
    * AND (<code>&&</code>) also takes in two boolean arguments; however, it will only evaluate as `true` if both of the arguments are `true`; otherwise, it will evaluate to `false`.

### Test Yourself
Can you predict what will the results of these operations will be? Check your answers against the console in repl.it.
* <code>true && false;</code>
* <code>45 % 6;</code>
* <code>8 === 8.0;</code>
* <code>'Hello' + ' ' + 'World';</code>

## Expressions
So, what happens when we bring several of these operators and values together?

Consider the following expression:

`(2 + 3) * (9 - 8)`

In order to perform the multiplication, we need to first know what we're multiplying – the `*` operator must wait until both of the expressions in parentheses have been evaluated before it can proceed.

We can represent this chain of dependencies using a logical structure called a `tree`.

![Expression Tree for (2 + 3) * (9 - 8)](../assets/chapter3/tree1.png)
<br>

To evaluate any point (or 'node') in the tree, you simply (1) evaluate that node's left 'child', and then (2) evaluate its right 'child'." In this case, to evaluate at the `*`, we first evaluate the `+` node, then the `-` node.

What happens if we're dealing with a more complicated expression? Say...

`((9 + 2) * 25) - 5`

Since the `-` requires ((9 + 2) * 25) to be evaluated in order to perform the subtraction, this means that `-` will be at the top of our expression tree. Here is the full tree - first we perform the addition, then the multiplication, and then finally the subtraction.

![Expression Tree for ((9 + 2) * 25) - 5](../assets/chapter3/tree2.png)
<br>

One last tricky one: `1 + 1 + 1 + 1`. Obviously, we know that this is equal to 4. But what does the tree look like?

In this case, we actually need to look to the rules of math (and anyone interested in some in-depth reading on that subject can [check out this wikipedia page](http://en.wikipedia.org/wiki/Operator_associativity)). As it turns out, mathematical expressions are actually evaluated ***from left to right***. In other words, given the expression `10 - 5 + 2`, we interpret this as being `(10 - 5) + 2`, or `7`, rather than `10 - (5 + 2)`, or `3`.

Following this rule, our expression of `1 + 1 + 1 + 1` could also be written `((((1) + 1) + 1) + 1)`. Is it easier to see the tree now?

![Expression Tree for 1 + 1 + 1 + 1](../assets/chapter3/tree3.png)
<br>

While we've covered what seems like a lot of math in this section, don't worry – you're not going to be doing calculus in this course. It's important that we review these concepts because there will be many times that you'll solve a problem by using one of these basic principles of math. When it comes down to it, computers operate on a pretty simple and straightforward logic.

---

Think you've got it? [Let's do an exercise to cement what we've learned.](04_exercise.md)
