<script setup>
</script>

<template>
  <div class="novel-description">
    <div class="img-container">
      <img alt="Novel cover" class="novel-cover" src="@/assets/mock-data/example.png" />
    </div>
    <div class="description-content">
      <h3 class="title">Novel Title</h3>
      <h4 class="author">Author Name</h4>
      <p class="description">
        This is a brief description of the novel. It provides an overview of the plot, characters, and setting to
        entice readers to explore further.
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </p>

      <div class="novel-status-block">
        <span class="chapters">Chapters: 20000</span>
        <span class="status">Status: Completed</span>
        <span class="progess">Progress: 15555/20000</span>
      </div>

    </div>

  </div>
</template>

<style lang="css" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.novel-description {

  height: 25vh;
  aspect-ratio: 2 / 1;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: flex-start;

  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;

  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;

  box-shadow: 0px 0px 4px #ccc;

}

.img-container {
  height: 100%;
  aspect-ratio: 2/3;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.novel-cover {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.description-content {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.title {
  font-size: 18px;

}

.author {
  font-size: 16px;
  font-weight: normal;

}

.description {
  margin: 5px 0px;
  height: auto;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
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
  font-size: 12px;
}
</style>
