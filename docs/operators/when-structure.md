---
sidebar_position: 6
---

# When Structure


```kotlin

fun main() {  
  
    val x = 0  
  
  when (x){  
        10 -> println("x is 10")  
        20 -> println("x is 20")  
        30 -> println("x is 30")  
        else -> println("x is not 10, 20 or 30 (Unknow)")  
    }  
  
    when (x){  
        10, 20 -> println("x is 10 or 20")  
        30 -> println("x is 30")  
        else -> println("x is not 10, 20 or 30 (Unknow)")  
    }  
  
    when (x) {  
        in 0..10 -> println("x is in the range 0 to 10")  
        in 11..20 -> println("x is in the range 11 to 20")  
        !in 30 ..40 -> println("x is not in the range 30 to 40")  
    }  
}


```

## Other types of When

```kotlin
fun main() {

    // Other Structures of When
    val x = 10

    when{
        x > 0 -> println("Positivo")
        x < 0 -> println("Negativo")
        else -> println("Zero")
    }

    val s = when {
        x > 0 -> ("Positivo")
        x < 0 -> ("Negativo")
        else -> ("Zero")
    }

    println(s)

    println(when {
        x > 0 -> ("Positivo")
        x < 0 -> ("Negativo")
        else -> ("Zero")
    })

    val s2 = 'A'

    val v = when(s2){
        'A', 'a' -> 1
        'B', 'b' -> 2
        else -> 3
    }
}
```