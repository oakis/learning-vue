<template>
  <transition
      name="fade-in-bottom"
      mode="out-in"
  >
      <div class="add-fail-toast" v-if="addTodoFailed">
          <i class="material-icons">
              error
          </i>
          <span>
              Input cannot be empty.
          </span>
      </div>
  </transition>
</template>

<script>
export default {
  name: 'AddTodoFail',
  props: ['addTodoFailed'],
}
</script>

<style scoped>
.add-fail-toast {
  display: flex;
  align-items: center;
  width: 40%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-bottom: 30px;
  padding: 18px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
}

.add-fail-toast span {
  margin-left: 8px;
}

.add-fail-toast i {
  color: orangered;
}
</style>
