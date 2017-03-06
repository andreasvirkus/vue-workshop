<template>
  <div class="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{ starred: activeNote && activeNote.favorite }"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['activeNote'])
  },
  methods: {
    ...mapActions([
      'addNote',
      'deleteNote',
      'toggleFavorite'
    ])
  }
}
</script>
