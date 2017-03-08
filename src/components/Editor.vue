<template>
  <main>
    <textarea id="editor"
      :value="activeNoteText ? activeNoteText : ''"
      placeholder="Click the + symbol for a new note!"
      @input="editNote">
    </textarea>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['activeNoteText'])
  },
  methods: {
    ...mapActions(['editNote'])
  }
};
</script>

<style>
  main {
    flex: 1;
    height: 100%;
  }

  textarea {
    height: 100%;
    width: 95%;
    border: 0;
    font-size: 1.4em;
    color: #444;
    resize: none;
  }
</style>
