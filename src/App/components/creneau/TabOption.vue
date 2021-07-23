<template>
  <div class="first-row">
    <div
      class="option btn"
      :class="item.isActive ? 'option-badge' : ''"
      v-for="(item, index) in tabOption"
      :key="index"
      @click="SelectTypeTab(index)"
    >
      <div class="mx-auto h2 titre-tab">
        {{ item.name }}
        <span v-if="index > 0" class="small small-text d-block">
          {{ item.price }}€</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectionHoraire",
  props: {},
  data() {
    return {
      tabOption: [
        { name: "Gratuit", price: "10.45", isActive: true },
        { name: "Plus", price: "85.58", isActive: false },
        { name: "Express", price: "120.28", isActive: false },
      ],
    };
  },
  components: {},
  watch: {},
  computed: {},
  methods: {
    SelectTypeTab(index) {
      this.tabOption.forEach((item) => {
        item.isActive = false;
      });
      this.tabOption[index].isActive = true;
    },
  },
};
</script>
