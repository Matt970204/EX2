<template>
<b-container class="bv-example-row">
  <b-row>
    <b-col>
      <Calander/>
    </b-col>
    <b-col>
      <Radio/>
    </b-col>
    <b-col><Dropdown/></b-col>
  </b-row>
</b-container>
</template>

<script>
// @ is an alias to /src
import Calander from '@/components/calander.vue'
import Radio from '@/components/radio.vue'
import Dropdown from '@/components/dropdown.vue'

export default {
  name: "Home",
  components: {
    Calander,Radio,Dropdown
  },
};
</script>
