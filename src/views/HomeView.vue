<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const appTitle = 'My Amazing Counter App'

const counter = ref(0),
      counterTitle = ref('My Counter')

const counterData = reactive({
  count: 0,
  title: 'My Counter',
})

const increaseCounter = () => {
  // counter.value++ // Valido para el counter
  counterData.count++
}
const decreaseCounter = () => {
  // counter.value-- // Valido para el counter
  counterData.count--
}
</script>

<!--
<script>
import { ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const increaseCounter = () => {
      counter.value++
    }
    const decreaseCounter = () => {
      counter.value--
    }
    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  },
}
</script>
-->

<!--
<script>

export default {
  data() {
    return {
      counter: 10
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script>
-->


<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px
}
</style>
