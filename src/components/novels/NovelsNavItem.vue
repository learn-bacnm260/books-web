<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  item: {
    type: Object,
    required: true
  }
});

const isSubMenuOpen = ref(false);

const toggleSubMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value;
};


</script>

<template>

  <div :class="{ 'has-children': item.children }">



    <button v-if="item.children" @click="item.children && toggleSubMenu()">

      <span>{{ isSubMenuOpen ? '▲' : '▼' }}</span>
    </button>
    <RouterLink :to="item.path" class="button-link">
      {{ item.name }}
    </RouterLink>
    <div v-if="item.children && isSubMenuOpen" class="sub-menu">
      <NovelsNavItem class="sub-menu-item" v-for="child in item.children" :key="child.name" :item="child" />
    </div>

  </div>



</template>
<style lang="css" scoped>
/* Reset cơ bản */
ul,
li {
  list-style: none;
  padding: 0;
  /* Đảm bảo không có padding mặc định */
  margin: 0;
  /* Đảm bảo không có margin mặc định */
}

/* -------------------------------------------------- */
/* 1. Mục Cha và Liên kết Chính */
/* -------------------------------------------------- */
.has-children {
  /* Loại bỏ max-content để tránh bị tràn và căn chỉnh tốt hơn */
  width: auto;
  height: 80%;
  position: relative;
  padding: 0;
  border-right: 1px solid #ddd;
  border-bottom: 4px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
  /* Bỏ padding ở đây để kiểm soát nó trên button-link */

  display: flex;
  flex-flow: row nowrap;
  column-gap: 5px;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  font-size: 24px;
  /* Giảm cỡ chữ để trông hiện đại hơn */
  font-weight: 600;
  /* Dùng semi-bold */
  transition: all 0.2s ease-in-out;
}

.has-children:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0;
  transform: scale(1.1);
}

.button-link {
  height: 100%;
  /* Cho phép liên kết kéo giãn và kiểm soát padding ở đây */
  flex: 1;
  padding: 0 12px;


  /* Căn giữa nội dung text trong button-link */
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #333;  
  border-left: 1px solid #ddd;

  transition: color 0.2s ease;
  /* Hiệu ứng chuyển màu chữ */
  border-radius: 4px;
  /* Bo góc nhẹ */
}

/* Hiệu ứng HOVER cho liên kết chính */
.button-link:hover {
  color: #007bff;
  /* Màu xanh nổi bật khi hover */
  background-color: #f0f8ff;
  /* Màu nền rất nhạt */
}

/* -------------------------------------------------- */
/* 2. Nút Mở Menu Con (Toggle Button) */
/* -------------------------------------------------- */
button {
  flex-shrink: 0;
  /* Quan trọng: Ngăn không cho nút bị kéo giãn */
  height: 100%;
  aspect-ratio: 1 / 1;
  padding: 8px 10px;
  background: none;
  border: none;
  cursor: pointer;
  /* Dùng màu nhạt hơn */
  transition: all 0.2s;
  color: #555;
}

button:hover {
  color: #007bff;
  transform: scale(1.5);
}

/* -------------------------------------------------- */
/* 3. Menu Con (Sub-menu) */
/* -------------------------------------------------- */
.sub-menu {
  width: max-content;
  min-width: 180px;
  padding: 5px 0;
  /* Padding trên dưới cho cả khối */
  margin-top: 5px;
  /* Khoảng cách với mục cha */

  background-color: #ffffff;
  border: 1px solid #eee;
  /* Viền nhẹ */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* Đổ bóng tinh tế */
  border-radius: 5px;


  /* Hiệu ứng chuyển động */
  opacity: 1;
  /* Cần dùng JS để ẩn/hiện, nhưng giữ opacity 1 khi hiển thị */
  transform-origin: top;
  /* Điểm neo chuyển động */
  transition: all 0.3s ease-out;



  display: flex;
  flex-flow: column nowrap;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
}

/* -------------------------------------------------- */
/* 4. Mục Con trong Sub-menu (Sử dụng selector để nhắm mục tiêu) */
/* -------------------------------------------------- */

/* Mục con (NovelsNavItem) được render trong sub-menu */
.sub-menu-item {
  width: 100%;
  /* Đảm bảo mục con chiếm toàn bộ chiều rộng sub-menu */

  /* Bỏ border left thừa trên item con vì đã có border cho khối sub-menu */
  border-left: none;
  padding-left: 0;
  padding-right: 0;

}

/* Nhắm mục tiêu RouterLink bên trong item con */
.sub-menu-item .button-link {
  padding: 6px 15px;
  /* Điều chỉnh padding cho menu con */
  font-size: 28px;
  /* Giảm cỡ chữ menu con */
  font-weight: normal;
  /* Giảm độ đậm */
}

/* HIỆU ỨNG QUAN TRỌNG: Đổi màu chữ khi hover qua item con */
.sub-menu-item .button-link:hover {
  background-color: #e6f7ff;
  /* Màu nền khi hover cho menu con (nhạt hơn) */
  color: #007bff;
  /* Giữ màu chữ nổi bật */
}
</style>
