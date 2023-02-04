<template>
    <div>
        <div class="btn btn-light indent1" @click="indent('indent')" title="تورفتگی" data-toggle="tooltip">
            <i class="fa fa-outdent"></i>
        </div>

        <div class="btn btn-light indent1" @click="indent('outdent')" title="منسوخ" data-toggle="tooltip">
            <i class="fa fa-indent"></i>
        </div>

    </div>
</template>

<script>
export default {
    name: "Indent",
    methods:{
        indent(indent){
            this.$emit('command', indent, '');
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>