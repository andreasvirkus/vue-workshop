<template>
  <div class="note-editor">
    <textarea
      :value="activeNoteText ? activeNoteText : ''"
      placeholder="Click the + symbol for a new note!"
      @input="editNote">
    </textarea>
  </div>
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
