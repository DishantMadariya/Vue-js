<template>
    <div>
      <input
        type="text"
        :value="modelValue"
        @input="updateValue($event.target.value)"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputC',
    props: {
      modelValue: String,
    },
    model: {
      prop: 'modelValue',
      event: 'update:modelValue',
    },
    methods: {
      updateValue(value) {
        this.$emit('update:modelValue', value);
      },
    },
  };
  </script>
  
  <style scoped>
  input[type='text'] {
    display: inline-flex;
    background-color: #ffffff;
    align-items: center;
    border-radius: 0.5rem;
    overflow: hidden;
    font-size: 1rem;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
    border: 0;
    padding: 0.5rem;
  }
  input[type='text']:focus {
    outline: 0;
  }
  </style>
  