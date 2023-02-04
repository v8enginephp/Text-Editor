<template>
    <select @change="changeStyle" class="btn btn-light" title="حالت ها" data-toggle="tooltip">
        <option value="">حالت ها</option>
        <option value="pre" id="code">کد</option>
        <option value="blockquote">نقل قول</option>
        <option value="H1" class="h1">تیتر 1</option>
        <option value="H2" class="h2">تیتر 2</option>
        <option value="H3" class="h3">تیتر 3</option>
        <option value="H4" class="h4">تیتر 4</option>
        <option value="H5" class="h5">تیتر 5</option>
        <option value="H6" class="h6">تیتر 6</option>
    </select>
</template>

<script>
export default {
    name: "Heading",
    methods: {
        changeStyle(element) {
            const style = element.target.value;

            this.$emit('command', "FormatBlock", style === "" ? null : style);
        }
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>
#code{
    font-size: 1rem !important;
    font-family: monospace, monospace !important;
}
</style>