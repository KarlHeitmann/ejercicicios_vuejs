<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(1, $event)" class="btn">-</button>
      <button @click="decreaseCounter(2, $event)" class="btn">--</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>

  </div>
</template>

<script setup>
// Para usar los hooks que hemos visto antes
// import { ref, reactive, computed, watch, onUnmounted, onBeforeMount, onMounted, onBeforeUnmount, onActivated, onDeactivated } from 'vue'
// Para los hooks de updated
// import { ref, reactive, computed, watch, onBeforeUpdate, onUpdated } from 'vue'
/*
  imports
  */
  import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue'

  import { vAutofocus } from '@/directives/vAutofocus'

/* 
  app title
  */
  const appTitleRef = ref(null)

  onMounted(() => {
    console.log('Do stuff related to App Title')
    console.log(appTitleRef.value)
    console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`)
  })


  // Esto corre antes de que el componente sea creado
  const appTitle = 'My Amazing Counter App'

/*
  counter
  */

  const counter = ref(0),
        counterTitle = ref('My Counter')

  const counterData = reactive({
    count: 0,
    title: 'My Counter',
  })
  console.log(counterData)
  console.log(counterData.count)
  console.log(counterData.title)
  console.log(counter)
  console.log(counter.value)
  /* XXX Si fuera así:
  const counter = ref(0), puedo usar el watch así:
  watch(counter)....... pero como es un reactive, tengo que usarlo asá */
  watch(() => counterData.count, (newCount, oldCount) => {
    console.log('oldCount', oldCount)
    console.log('newCount', newCount)
    if (newCount == 20) {
      alert('Way to go! You made it to 20!!')
    }
  })

  const oddOrEven = computed(() => {
    return counterData.count % 2 == 0 ? 'even' : 'odd'
  })

  const increaseCounter = async (amount, e) => {
    // counter.value++ // Valido para el counter
    console.log(e)
    counterData.count += amount
    // nextTick(() => { // esto es si no tuviera un async/await
    //   console.log('do something when counter has updated in the dom')
    // })
    await nextTick()
    console.log('do something when counter has updated in the dom')
  }
  const decreaseCounter = (amount, e) => {
    // counter.value-- // Valido para el counter
    console.log(e)
    counterData.count -= amount
  }

  onMounted(() => {
    console.log("Do stuff related to Counter")
  })
/* HOOKS
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})
*/

/* HOOKS
onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

// Estos son activados solo si el componente está en "keep alive", dcorriendo en background aunque no se vea
onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})
*/

/*
  directives
*/

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
