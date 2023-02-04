<template>
    <div>
        <div class="btn btn-light list1" @click="list('insertOrderedList')" title="لیست با شماره" data-toggle="tooltip">
            <i class="fa fa-list-ol"></i>
        </div>

        <div class="btn btn-light list1" @click="list('insertUnorderedList')" title="لیست بی شماره" data-toggle="tooltip">
            <i class="fa fa-list-ul"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    methods:{
        list(list){
            this.$emit('command', list, '');
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>