<template>
  <!--<teleport to="body"> para teletransportarlo al body, con esto no es necesario tocar el src/assets/base.css y agregarle la linea de .modals-container { position: initial; }-->
  <teleport to=".modals-container">
    <div
      class="modal"
      >
      <!-- <h1>{{ props.title }}</h1> Equivalente al de abajo -->
      <h1>{{ title }}</h1>
      <!-- <h1><slot name="title" /></h1> -->
      <slot />
      <!-- <pre>, esto funcionaba al pasar desde ModalsView con "<template #title>My new title</template>"#title es un shortcut para v-slot:title || Esto es para ver lo que hay en el slot de title, equivale a lo que esta comentado en script con XXX slots{{ $slots.title() }}</pre> -->
      <button>Hide modal</button>
    </div>
  </teleport>
  
</template>

<script setup>

/*
  props
*/

  import { ref } from "vue";
  const props = defineProps({
    title: {
      type: String,
      default: 'No title specified'
    }
  }) // no necesita importarlos :O

  // console.log(title) // Error
  console.log(props.title)

/* XXX Slots
  import { useSlots } from 'vue'
  const slots = useSlots()

  console.log(slots.title())
  */
</script>


<style scoped>
.modal {
  background: beige;
  padding: 10px;
  color: black;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>