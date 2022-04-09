  // El nombre será el que podré usar en el template, pero se convertirá en v-autofocus
  export const vAutofocus = {
    // Puedo escoger cualquiera de estas:
    // beforeMount
    // mounted
    // beforeUpdate
    // updated
    // beforeUnmount
    // unmounted
    mounted: (el) => {
      el.focus()
    }
  }
