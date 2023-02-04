<template>
    <select @change="changeFont" class="btn btn-light" style="width: 6rem !important;" title="فونت ها" data-toggle="tooltip">
        <option value="">فونت ها</option>
        <option value="vazir">وزیر</option>
        <option value="arial">Arial</option>
        <option value="tahoma">Tahoma</option>
        <option value="console">Console</option>
    </select>
</template>

<script>
export default {
    name: "Font",
    methods: {
        changeFont(element) {
            const selectedFont = element.target.value;
            this.$emit('command', 'fontName', selectedFont === "" ? null : selectedFont);
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>

</style>