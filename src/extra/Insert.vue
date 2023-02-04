<template>
    <div>
        <button class="btn p-0 bg-light" @click="addImage" data-toggle="tooltip" title="" data-original-title="تصویر">
            <i class="fa fa-image nav-link"></i>
        </button>

        <button class="btn p-0 bg-light" @click="addLink" data-toggle="tooltip" title="" data-original-title="لینک">
            <i class="fa fa-link nav-link"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: "Insert",
    methods: {
        addImage() {
            this.$emit('command', 'insertImage', prompt('آدرس عکس خود را وارد فرمایید'));
        },
        addLink() {
            this.$emit('command', 'createLink', prompt('لینک موردنظر خود را وارد فرمایید'));
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>