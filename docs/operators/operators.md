---
sidebar_position: 6
---

# Operators

## Arithmentic Operators

```kotlin
fun main() {
    // Sum
    println(10 + 5)

    // Subtraction
    println(10 - 5)

    // Multiplication
    println(3 * 3)

    // Division
    println(15 / 5)

    // Modulo
    println(15 % 4)
}
```


## Types Conversions

```kotlin

fun main(){
	val a = 10
	val b = 3
	println(a / b)
	// The result is 3
	
	// Int does not accept decimal results

	println(10/3)
	// The result is 3
	
	// To fix this I need to set the type before
	val c: Double = 20.0
	val d = Double = 3.0
	println(30 / 3)

	// If I mix the numbers, Kotlin langue takes the most embracing
}

```

---


## Relational operators

```kotlin

fun main(){
	// As results relational operators returns an boolean
	println(10 == 10)
	// Reply: True
}

```

---

## Logic Operators

```kotlin

fun main(){
	
	println("T and F ${true && false}"
	// Reply: T AND F false 	
}

```


## Assignment Operators

```kotlin

fun main(){
	// It is like Java
	// Add link
}

```
## Exercise about even and ODD
> I can add only the type of a variable then afterwards assign value into it
---

## If as a values returning expression
The result from the last truthy expression inside the if block decision go into the variable **"r"**

**Obs:** It only works when I have the **"else"** block
```kotlin
	
	fun main(){
		val n = 10
		
		// The values from the If have to be from the same type
		var r = if (n % 2 == 0){
			"Even"
		} else{
			"Odd"
		}
	}

```
