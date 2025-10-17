<script setup>

defineProps(
  {
    novel: {
      requied: true,
      type: Object

    }
  }
)

</script>

<template>
  <div class="novel-description">
    <div class="img-container">
      <img alt="Novel cover" class="novel-cover" src="@/assets/mock-data/example.png" />
    </div>
    <div class="description-content">
      <h3 class="title">{{ novel.title }}</h3>
      <h4 class="author">{{ novel.author }}</h4>
      <p class="description">
        {{ novel.description }}
      </p>

      <div class="novel-status-block">
        <span class="chapters">Chapters: {{ novel.chapters }}</span>
        <span class="status">Status: {{ novel.status }}</span>
        <span class="progess">Progress: {{ novel.readChapter }}/{{ novel.chapters }}</span>
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
