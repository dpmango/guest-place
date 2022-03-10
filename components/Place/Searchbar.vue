<template>
  <div class="bar">
    <div class="bar__search">
      <UiInput
        :value="search"
        theme="dynamic"
        variant="clear"
        name="inputVal"
        label="Введите название площадки"
        type="text"
        @onChange="(v) => (search = v)"
      />
    </div>
    <div class="bar__options">
      <UiSelect
        theme="clear"
        :value="type"
        placeholder="Тип площадки"
        :options="['Option 1', 'Option 2']"
        @onSelect="(v) => (type = v)"
      />
      <UiSelect
        theme="clear"
        :value="specialities"
        placeholder="Особенности"
        :options="['Option 1', 'Option 2']"
        @onSelect="(v) => (specialities = v)"
      />
      <UiSelect
        theme="clear"
        :value="capacity"
        placeholder="Вместимость"
        :options="['Option 1', 'Option 2']"
        @onSelect="(v) => (capacity = v)"
      />
      <UiSelect
        theme="clear"
        :value="price"
        placeholder="Стоимость"
        :options="['Option 1', 'Option 2']"
        @onSelect="(v) => (price = v)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      search: '',
      type: null,
      specialities: null,
      capacity: null,
      price: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  align-items: center;
  position: relative;
  background: #ffffff;
  border-radius: 50px;
  box-shadow: 0px 4px 15px rgba(105, 78, 75, 0.14);
  &__search {
    flex: 0 0 30%;
  }
  &__options {
    flex: 0 0 70%;
    display: flex;
    align-items: center;
    .select {
      flex: 0 0 20%;
      padding-right: 20px;
    }
  }
}
</style>
