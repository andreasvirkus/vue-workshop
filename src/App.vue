<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import NotesList from './components/NotesList.vue'
import Editor from './components/Editor.vue'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  }
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Raleway:800,400,300);

  // General
  html, body, body > div {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    position: relative;

    & > div {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    position: relative;
    margin: 0 10px;
  }

  .note-editor a {
    color: #42b983;
  }

  // Notes app
  .toolbar {
    float: left;
    width: 80px;
    height: 100%;
    background-color: #30414D;
    color: #DDD;
    padding: 35px 25px 25px 25px;

    i {
      font-size: 2.2em;
      margin-bottom: 35px;
      cursor: pointer;
      font-style: normal;
      opacity: 0.8;
      transition: opacity 0.1s ease-out;
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


  .notes-list {
    float: left;
    width: 330px;
    height: 100%;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;

    a {
      display: block;
      padding: .4em;
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

  .note-editor {
    height: 100%;
    margin-left: 380px;
  }

  .note-editor textarea {
    height: 100%;
    width: 95%;
    border: 0;
    border-radius: 0;
    font-size: 1.4em;
    color: #444;
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
