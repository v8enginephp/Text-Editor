<template>
    <select @change="changeSize" class="btn btn-light" title="سایز فونت" data-toggle="tooltip">
        <option value="">سایز ها</option>
        <option value="1">8</option>
        <option value="2">10</option>
        <option value="3">12</option>
        <option value="4">14</option>
        <option value="5">16</option>
        <option value="6">18</option>
        <option value="7">24</option>
    </select>
</template>

<script>
export default {
    name: "Size",
    methods: {
        changeSize(element) {
            const size = element.target.value;

            this.$emit('command', "fontSize", size === "" ? null : size);
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>