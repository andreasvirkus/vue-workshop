<template>
  <main class="note-editor">
    <textarea
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

<style lang="scss">
  .note-editor {
    flex: 1;
    height: 100%;
  }

  .note-editor textarea {
    height: 100%;
    width: 95%;
    border: 0;
    border-radius: 0;
    font-size: 1.4em;
    color: #444;
  }
</style>
