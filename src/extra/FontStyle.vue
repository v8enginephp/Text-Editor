<template>
    <div>
        <div class="btn btn-light" @click="changeStyle('strikethrough')" title="خط کشی" data-toggle="tooltip">
            <i class="fa fa-strikethrough"></i>
        </div>

        <div class="btn btn-light" @click="changeStyle('underline')" title="زیر خط کشیدن" data-toggle="tooltip">
            <i class="fa fa-underline"></i>
        </div>

        <div class="btn btn-light" @click="changeStyle('italic')" title="کج" data-toggle="tooltip">
            <i class="fa fa-italic"></i>
        </div>

        <div class="btn btn-light" @click="changeStyle('bold')" title="پر رنگ" data-toggle="tooltip">
            <i class="fa fa-bold"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "FontStyle",
    methods: {
        changeStyle(style) {
            this.$emit('command', style, "");
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>