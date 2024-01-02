<script setup lang="ts">
    import { Viewer } from 'cesium';
    import 'cesium/Build/Cesium/Widgets/widgets.css';
    import { onMounted, ref, shallowRef } from 'vue';

    const cesium = ref<Element | null>(null);
    const viewer = shallowRef<Viewer | null>(null);
    onMounted(() => {
        viewer.value = new Viewer(cesium.value as Element);
    });
</script>

<template>
    <div class="full" ref="cesium"></div>
</template>

<style scoped>
    body,
    html {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .full {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
