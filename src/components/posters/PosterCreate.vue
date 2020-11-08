<template>
  <q-dialog v-model="dialog">
    <q-card class="my-card">
      <q-img v-if="dialogImage" :src="dialogImage.selectedFile.__img.src"></q-img>

      <q-card-section class="q-pt-none">
        <q-input v-model="title" label="Standard" />
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Reserve"></q-btn>
        <q-btn v-close-popup flat color="primary" round icon="event"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'PosterCreate',
  props: ['dialogImage'],
  data () {
    return {
      dialog: false,
      title: '',
      capture: ''
    }
  }
}
</script>

<style scoped>

</style>
