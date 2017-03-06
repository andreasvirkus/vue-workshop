<template>
  <div class="toolbar">
    <i @click="addNote">&plus;</i>
    <i @click="toggleFavorite" v-if="activeNote" class="star"
       :class="{ starred: activeNote && activeNote.favorite }">&starf;</i>
    <i @click="deleteNote">&times;</i>
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
