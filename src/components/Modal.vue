<template>
  <!--<teleport to="body"> para teletransportarlo al body, con esto no es necesario tocar el src/assets/base.css y agregarle la linea de .modals-container { position: initial; }-->
  <teleport to=".modals-container">
    <div
      class="modal"
      >
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur, ad ab aliquam sint perferendis possimus distinctio atque natus numquam, repellat fugit? Consequuntur accusamus commodi, aliquid eaque enim architecto porro.
        Amet, vitae laudantium sint corrupti dolores veniam quidem eos voluptas ipsum quae autem? Eveniet consequuntur labore fugit, voluptas dicta quibusdam nulla temporibus ea officia repellendus ex reiciendis mollitia, eaque porro!
        Doloremque praesentium tempore vitae vel cum saepe nisi dolorum officiis est, sapiente corrupti explicabo molestiae fugiat laboriosam quaerat optio sit, excepturi quidem asperiores aperiam perspiciatis. Minus asperiores recusandae quidem quos?
        Quam debitis architecto magni nemo, quo natus velit ducimus soluta veniam sapiente eveniet optio, tenetur veritatis sequi! Sint esse molestias nemo suscipit quod, aliquid perferendis, quaerat ratione assumenda eligendi eius.
      </p>
      <button>Hide modal</button>
    </div>
  </teleport>
  
</template>

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