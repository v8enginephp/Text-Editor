<template>
    <div class="dropdown" id='color1' title="رنگ ها" data-toggle="tooltip">
        <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown">
            <i class="fa fa-font" style="border-bottom: 2px solid" :style="{borderColor:selectedColor}"></i>
        </button>

        <div class="dropdown-menu">
            <div class="row col mx-auto justify-content-center btn" @click="changeColor(null)">
                <i class="fa fa-eraser"></i>
                حذف رنگ
            </div>

            <hr class="m-1 mb-4">

            <div class="row mx-auto justify-content-center mb-1">
                <div @click="changeColor('#000000')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(0, 0, 0);"></div>
                <div @click="changeColor('#4D4D4D')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(77, 77, 77);"></div>
                <div @click="changeColor('#999999')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(153, 153, 153);"></div>
                <div @click="changeColor('#E6E6E6')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(230, 230, 230);"></div>
                <div @click="changeColor('#FFFFFF')" class="rounded btn m-1 border" style="width: 1.7rem;height: 1.7rem;background-color:rgb(255, 255, 255);"></div>
                <div @click="changeColor('#E64D4D')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(230, 77, 77);"></div>
                <div @click="changeColor('#E6994D')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(230, 153, 77);"></div>
                <div @click="changeColor('#E6E64D')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(230, 230, 77);"></div>
                <div @click="changeColor('#99E64D')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(153, 230, 77);"></div>
                <div @click="changeColor('#4DE64D')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(77, 230, 77);"></div>
                <div @click="changeColor('#4DE699')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(77, 230, 153);"></div>
                <div @click="changeColor('#4DE6E6')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(77, 230, 230);"></div>
                <div @click="changeColor('#4D99E6')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(77, 153, 230);"></div>
                <div @click="changeColor('#4D4DE6')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(77, 77, 230);"></div>
                <div @click="changeColor('#994DE6')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(153, 77, 230);"></div>
                <div @click="changeColor('#FF69B4')" class="rounded btn m-1" style="width: 1.7rem;height: 1.7rem;background-color:rgb(255,105,180);"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Color",
    data() {
        return {
            selectedColor: null
        }
    },
    methods: {
        changeColor(color) {
            console.log('command', 'forecolor', color);
            this.$emit('command', 'forecolor', color);

            this.selectedColor = color;
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>