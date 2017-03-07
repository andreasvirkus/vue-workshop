<template>
  <div class="notes-list">

    <header class="list-header">
      <h2>Notes</h2>
      <div role="group">
        <!-- All Notes button -->
        <button type="button" class="button"
          @click="show = 'all'"
          :class="{active: show === 'all', 'button-outline': show !== 'all'}">
          All Notes
        </button>
        <!-- Favorites Button -->
        <button type="button" class="button"
          @click="show = 'favorites'"
          :class="{active: show === 'favorites', 'button-outline': show !== 'favorites'}">
          Favorites
        </button>
      </div>
    </header>
    <!-- render notes in a list -->
    <nav class="container">
      <ul>
        <li v-for="(note, index) in filteredNotes">
          <a href="#" :class="{ active: activeNote === note, fav: note.favorite }"
            @click="updateActiveNote(note)">
            <i>{{ index + 1 }}</i> {{ note.text.trim().substring(0, 30) + (note.text.length > 30 ? '...' : '') }}
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data () {
    return {
      show: 'all'
    }
  },
  methods: {
    ...mapActions(['updateActiveNote'])
  },
  computed: {
    ...mapState(['notes', 'activeNote']),
    filteredNotes() {
      if (this.show === 'all') {
        return this.notes;
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite);
      }
    }
  }
};
</script>

<style lang="scss">
  .notes-list {
    flex-basis: 350px;
    background-color: #F5F5F5;

    a {
      padding: .4em .4em .4em 1em;
      display: flex;
      border-radius: 3px;

      &:hover {
        background-color: #bc88dc;
        color: #fff;
      }

      &.active {
        background-color: #9b4dcb;
        color: #fff;
      }
    }

    i {
      margin-right: 2em;
    }

    li + li {
      margin-top: .3em;
    }
  }

  button.button:hover,
  button.button:focus {
    background-color: #9b4dca;
  }

  .list-header {
    padding: 25px;
  }

  .list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
  }

  .fav::after {
    content: '\02605';
    display: block;
    position: absolute;
    right: 5px;
    top: 5px;
    font-weight: 800;
  }
</style>
