<template>
  <aside class="toolbar">
    <i @click="addNote">&plus;</i>
    <i @click="toggleFavorite" class="star"
       :class="{ starred: activeNote && activeNote.favorite }">&starf;</i>
    <i @click="deleteNote">&times;</i>
  </aside>
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

<style lang="scss">
  .toolbar {
    flex-basis: 80px;
    height: 100%;
    background-color: #30414D;
    color: #DDD;
    padding: 65px 25px 25px 25px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    i {
      display: block;
      font-size: 2.2em;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.1s ease-out;
      font-style: normal;
    }

    i:hover {
      opacity: 1;
    }
    .star {
      font-size: 1.6em;
    }

    .starred {
      color: #F7AE4F;
    }
  }
</style>
