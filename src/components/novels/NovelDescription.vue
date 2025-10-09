<script setup>
</script>

<template>
  <div class="novel-description">
    <img alt="Novel cover" class="novel-cover" src="@/assets/mock-data/example.png" />

    <div class="description-text">
      <h3 class="title">Novel Title</h3>
      <h4 class="author">Author Name</h4>
      <p class="description">
        This is a brief description of the novel. It provides an overview of the plot, characters, and setting to
        entice readers to explore
        further.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

      </p>

      <div class="novel-status-block">
        <span class="chapters">Chapters: 20</span>
        <span class="status">Status: Completed</span>
        <span class="progess">Progress: 5/20</span>
      </div>

    </div>

  </div>
</template>

<style lang="css" scoped>
.novel-description {

  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: flex-start;

  padding: 10px;
  box-sizing: border-box;


  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
}

.novel-cover {
  height: 100%;
  width: auto;

  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.description-text {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

h3,
h4 {
  height: auto;
  box-sizing: border-box;
  margin: 0px;

}

.description {
  margin: 20px 0px;
  height: auto;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;


}

.novel-status-block {
  margin-top: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: space-around;
}
</style>
