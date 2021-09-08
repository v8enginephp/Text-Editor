class V8editor {

    plugins = []
    element;
    options;
    template = `<div class="row mx-auto">
                <div class="modal" id="v8Modal">
                  <div class="modal-dialog">
                    <div class="modal-content">
                
                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">Modal Heading</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                
                      <!-- Modal body -->
                      <div class="modal-body">
                        Modal body..
                      </div>
                
                      <!-- Modal footer -->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                
                    </div>
                  </div>
                </div>
                <div class="col-md p-0 border bg-light">
                <div class="row mx-auto float-right" id="plugins" dir="rtl">
                    <button  data-toggle="tooltip" title="align" id="valign" class="btn p-0 btn-light"> <i class="fa nav-link fa-paragraph"></i> </button>
                </div>
                </div>
                <div dir="rtl" class="border col-md-12 bg-white py-2" placeholder="متن مورد نظر خود را وارد کنید ..."  contenteditable="true" id="vname" style="min-height: 20rem;text-align: initial;">

                </div>
                </div>`;
    textArea;
    modalDom;

    constructor(element, options = {}) {
        this.options = options;
        this.element = element;
        this.render();
    }

    render() {
        let dom = jQuery.parseHTML(this.template);

        this.textArea = $(dom).find("#vname");
        this.modalDom = $(dom).find("#v8Modal");

        $(dom).find("#valign").click(function () {
            $(dom).find("#vname").attr("dir", (_, attr) => attr == "rtl" ? "ltr" : "rtl");
        });

        $(dom[0]).find("#plugins").append(this.renderPlugins())
        this.element.html(dom)
    }

    asdasd

    renderPlugins() {
        let pl = "";
        for (const item of V8Plugin.plugins) {
            if (item.content === null) {
                pl += `<button class="btn border p-0 bg-light" role="button"  id="${item.id}" data-toggle="tooltip" title="${item.title}" ><i  class="${item.icon} nav-link"></i></button>`;
                let v8 = this;
                $(document).on("click", "#" + item.id, function () {
                    item.onClick(v8, v8.selected());
                })
            } else {
                pl += `${item.content}`;
                item.onClick(this, this.selected())
            }

        }
        return pl;
    }

    command(command, value) {
        if (!document.execCommand(command, false, value))
            document.execCommand(command, false, value)
    }

    addCss(key, value) {
        var listId = window.getSelection().focusNode.parentNode;

        if (this.textArea.find(listId).length > 0)
            $(listId).css(key, value);
    }

    selected() {
        return document.getSelection();
    }

    modal(type = "toggle") {
        this.modalDom.modal(type);
        return this;
    }

    modalTitle(text) {
        this.modalDom.find(".modal-title").text(text);
        return this;
    }

    modalContent(html) {
        this.modalDom.find(".modal-body").html(html);
        return this;
    }

}

class V8Plugin {
    static plugins = [];

    static addPlugin(id, title, icon, onClick, content = null) {
        this.plugins.push({
            id: id,
            title: title,
            icon: icon,
            onClick: onClick,
            content: content
        })
    }

    static addDivider() {
        this.plugins.push({
            id: "divider",
            title: "جداکننده",
            icon: "",
            onClick: function () {
            },
            content: '<div class="my-1 border-muted mx-1" style="border-right: 1px solid gray"></div>'
        })
    }

    static getTemplate(fileName) {
        var readFile = "";
        $.ajax({
            url: `extra/${fileName}`,
            async: false,
        }).done(function (data) {
            readFile = data;
        });
        return readFile;
    }
}

$.fn.v8editor = function (options = {}) {
    var editor;
    this.each(function () {
        editor = new V8editor($(this));
    })
    return editor;
}
