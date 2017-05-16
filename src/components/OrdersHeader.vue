<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <header-summary></header-summary>
      </div>
    </div>
    <div class="level-center is-hidden-tablet">
      <div class="level-item custom-margin-top">
      </div>
    </div>
    <div class="level-center">
      <div class="level-item">
        <export-button></export-button>
      </div>
    </div>
    <div class="level-right is-hidden-tablet">
      <div class="level-item custom-margin-top">
        <hidden-customer-button></hidden-customer-button>
      </div>
    </div>
  </nav>
</template>

<script>
import ExportButton from '@/components/ExportButton.vue'
import HiddenCustomerButton from '@/components/HiddenCustomerButton.vue'
import HeaderSummary from '@/components/Summary.vue'

export default {
  components: {
    ExportButton,
    HeaderSummary,
    HiddenCustomerButton
  }
}
</script>

<style lang="scss">
  .custom-margin-top {
    margin-top: 20px;
  }
</style>
