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
    flex-basis: 330px;
    width: 330px;
    height: 100%;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    padding-top: 1em;

    a {
      display: block;
      padding: .4em;
      display: flex;
    }

    i {
      margin-right: 2em;

    }

    li:hover {
      background-color: #bc88dc;
      a {
        color: #fff;
      }
    }
  }

  button.button:hover,
  button.button:focus {
    background-color: #9b4dca;
  }

  .list-header {
    padding: 5px 25px 25px 25px;
  }

  .list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }

  .notes-list .container {
    height: calc(100% - 137px);
  	max-height: calc(100% - 137px);
  	overflow: auto;
    width: 100%;
    padding: 0;
  }

  .notes-list .container .list-group-item {
    border: 0;
    border-radius: 0;
  }

  .list-group-item-heading {
    font-weight: 300;
    font-size: 15px;
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
