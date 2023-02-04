<template>
    <div class="row mx-auto">
        <modal/>

        <div class="col-md p-0 border bg-light">
            <div class="d-flex mx-auto float-right" id="plugins" dir="rtl">
                <button data-toggle="tooltip" title="align" @click="changeDirection" class="btn p-0 btn-light">
                    <i class="fa nav-link fa-paragraph"></i>
                </button>

                <component v-for="plugin in plugins"
                           :key="plugin.id"
                           @command="command"
                           @css="addCss"
                           :is="plugin.component"/>
            </div>
        </div>

        <div dir="rtl"
             class="border col-md-12 bg-white py-2"
             @input="typing"
             contenteditable="true"
             v-html="text"
             id="v8name">

        </div>
    </div>
</template>

<script>
import Modal from "./Modal";
import Divider from "./extra/Divider";
import Color from "./extra/Color";
import BackgroundColor from "./extra/BackgroundColor"
import Font from "./extra/Font"
import FontStyle from "./extra/FontStyle"
import Heading from "./extra/Heading"
import Align from "./extra/Align"
import Indent from "./extra/Indent"
import List from "./extra/List"
import Size from "./extra/Size"
import Insert from "./extra/Insert"

export default {
    name: "V8Editor",
    components: {Modal, Divider, Color, BackgroundColor, Font, FontStyle, Heading, Align, Indent, List, Size, Indent},
    props: {
        value: {
            require: true,
            type: String,
            default: null
        }
    },
    data() {
        return {
            timer: null,
            text: this.value,
            plugins: []
        }
    },
    methods: {
        typing(element) {
            this.debounce(() => {
                this.$emit('input', element.target.innerHTML);
            });
        },
        debounce(fn, delay = 700) {
            clearTimeout(this.timer);

            this.timer = setTimeout(fn, delay);
        },
        changeDirection() {
            $(this.editor).attr("dir", (_, attr) => attr === "rtl" ? "ltr" : "rtl");
        },
        addDivider() {
            this.plugins.push({
                id: "divider" + Math.random(),
                component: Divider
            });
        },
        command(command, value) {
            if (!document.execCommand(command, false, value))
                document.execCommand(command, false, value)
        },
        addCss(key, value) {
            let listId = window.getSelection().focusNode.parentNode;

            if ($(this.editor).find(listId).length > 0)
                $(listId).css(key, value);
        }
    },
    computed: {
        editor() {
            return document.getElementById('v8name');
        }
    },
    updated() {
        this.$nextTick(() => {
            $('[data-toggle="tooltip"]').tooltip();
            $('.dropdown-toggle').dropdown();
        });
    },
    mounted() {
        this.plugins.push({
            id: "heading",
            component: Heading
        });

        this.addDivider();

        this.plugins.push({
            id: "font",
            component: Font
        });

        this.plugins.push({
            id: "color" ,
            component: Color
        });

        this.plugins.push({
            id: 'size',
            component: Size
        });

        this.plugins.push({
            id: 'background color',
            component: BackgroundColor
        });

        this.addDivider();

        this.plugins.push({
            id: 'font style',
            component: FontStyle
        });

        this.addDivider();

        this.plugins.push({
            id: "bg" + Math.random(),
            component: Align
        });

        this.addDivider();

        this.plugins.push({
            id: 'list',
            component: List
        });

        this.addDivider();

        this.plugins.push({
            id: "bg" + Math.random(),
            component: Indent
        });

        this.addDivider();

        this.plugins.push({
            id: "bg" + Math.random(),
            component: Insert
        });
    }
}
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped>
#v8name {
    height: 30rem;
    text-align: initial;
    overflow: auto
}

.float-right {
    float: right !important;
}
</style>

<style>
#v8name ol, #v8name ul {
    margin: 0 1rem !important;
}
</style>