<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <div
      class="modal"
      v-if="showModal"
      >
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur, ad ab aliquam sint perferendis possimus distinctio atque natus numquam, repellat fugit? Consequuntur accusamus commodi, aliquid eaque enim architecto porro.
        Amet, vitae laudantium sint corrupti dolores veniam quidem eos voluptas ipsum quae autem? Eveniet consequuntur labore fugit, voluptas dicta quibusdam nulla temporibus ea officia repellendus ex reiciendis mollitia, eaque porro!
        Doloremque praesentium tempore vitae vel cum saepe nisi dolorum officiis est, sapiente corrupti explicabo molestiae fugiat laboriosam quaerat optio sit, excepturi quidem asperiores aperiam perspiciatis. Minus asperiores recusandae quidem quos?
        Quam debitis architecto magni nemo, quo natus velit ducimus soluta veniam sapiente eveniet optio, tenetur veritatis sequi! Sint esse molestias nemo suscipit quod, aliquid perferendis, quaerat ratione assumenda eligendi eius.
      </p>
      <button @click="showModal = false">Hide modal</button>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
  import { ref } from 'vue'
/*
  modals
*/

  const showModal = ref(false)

</script>

<style scoped>
.modal {
  background: beige;
  padding: 10px;
  color: black;
}
</style>