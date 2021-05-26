<template>
  <div>

    <b-form-group label="Index Options " v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'J200', value: 'J200' },
          { text: 'J201', value: 'J201' },
          { text: 'J203', value: 'J203' }
        ]
      }
    }
  }
</script>