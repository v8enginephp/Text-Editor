<template>
<div>
    <div class="btn btn-light align1" @click="changeAlign('justifyRight')" title="راست چین" data-toggle="tooltip">
        <i class="fa fa-align-right"></i>
    </div>

    <div class="btn btn-light align1" @click="changeAlign('justifyCenter')" title="وسط چین" data-toggle="tooltip">
        <i class="fa fa-align-center"></i>
    </div>

    <div class="btn btn-light align1" @click="changeAlign('justifyLeft')" title="چپ چین" data-toggle="tooltip">
        <i class="fa fa-align-left"></i>
    </div>

    <div class="btn btn-light align1" @click="changeAlign('justifyFull')" title="justify" data-toggle="tooltip">
        <i class="fa fa-align-justify"></i>
    </div>
</div>
</template>

<script>
export default {
    name: "Align",
    methods:{
        changeAlign(align){
            this.$emit('command', align, '');
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>