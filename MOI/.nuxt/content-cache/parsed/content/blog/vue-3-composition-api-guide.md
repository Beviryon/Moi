---
title: "Vue 3 Composition API: A Developer's Guide"
description: "Master the Vue 3 Composition API with this comprehensive guide. Learn about reactive refs, computed properties, and lifecycle hooks."
date: "2024-01-10"
author: "Beviryon Issanga Ngoulou"
tags: ["vue", "composition-api", "javascript", "tutorial"]
image: "/images/blog/vue-3-composition-api.jpg"
---

# Vue 3 Composition API: A Developer's Guide

The Vue 3 Composition API is a powerful new way to write Vue components that provides better code organization, reusability, and TypeScript support. In this guide, we'll explore the key concepts and best practices.

## What is the Composition API?

The Composition API is a new way to write Vue components that allows you to organize your code by logical concerns rather than by component options. It provides better code reuse and makes it easier to work with TypeScript.

## Basic Setup

To use the Composition API, you need to use the `<script setup>` syntax:

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive data
const count = ref(0)
const title = ref('Vue 3 Composition API')

// Computed properties
const message = computed(() => `You clicked ${count.value} times`)

// Methods
const increment = () => {
  count.value++
}
</script>
```

## Reactive References

The `ref()` function creates a reactive reference to a value:

```typescript
import { ref } from 'vue'

const count = ref(0)
const name = ref('John')
const isVisible = ref(true)

// Accessing the value
console.log(count.value) // 0

// Updating the value
count.value = 10
```

## Computed Properties

Computed properties are reactive and automatically update when their dependencies change:

```typescript
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// fullName will automatically update when firstName or lastName changes
```

## Watchers

Watchers allow you to perform side effects when reactive data changes:

```typescript
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})

// You can also watch multiple sources
watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  console.log('Names changed')
})
```

## Lifecycle Hooks

The Composition API provides lifecycle hooks as functions:

```typescript
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
```

## Composables

Composables are reusable functions that encapsulate reactive logic:

```typescript
// composables/useCounter.ts
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}
```

Using the composable:

```vue
<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement, reset } = useCounter(10)
</script>
```

## Best Practices

1. **Use TypeScript** - The Composition API works great with TypeScript
2. **Extract Logic into Composables** - Keep components focused on presentation
3. **Use `ref()` for primitives** - Use `reactive()` for objects
4. **Destructure carefully** - Be aware of reactivity loss when destructuring
5. **Use `computed()` for derived state** - Don't use watchers for simple computations

## Conclusion

The Vue 3 Composition API provides a more flexible and powerful way to write Vue components. With better code organization, improved TypeScript support, and enhanced reusability, it's the future of Vue development.

Start using the Composition API in your projects today and experience the benefits for yourself!
