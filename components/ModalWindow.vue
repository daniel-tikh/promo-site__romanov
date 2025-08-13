<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <button class="modal-close" @click="close">×</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80vw;
  width: 100%;
  max-height: 80vh; /* ограничиваем по высоте экрана */
  overflow-y: auto; /* добавляем вертикальную прокрутку */
  position: relative; /* для позиционирования кнопки закрытия */
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
