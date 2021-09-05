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
                <div class="col-md p-0 border">
                  <ul class="nav float-right p-0" id="plugins" dir="rtl">
                    <li class="nav-item">
                      <i role="button" data-toggle="tooltip" title="خط افقی" class="fa nav-link fa-minus"></i>
                    </li>
                  </ul>
                  <ul class="nav float-left mx-2">
                    <li class="nav-item"><span>کلمه : {{ WordCount }}</span></li>
                  </ul>
                </div>
                <div dir="rtl" class="border col-md-12" placeholder="متن مورد نظر خود را وارد کنید ..." contenteditable="true" id="vname" style="min-height: 5rem">

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

        $(dom[0]).find("#plugins").append(this.renderPlugins())
        this.element.html(dom)
    }

    renderPlugins() {
        let pl = "";
        for (const item of V8Plugin.plugins) {
            if (item.content === null)
            {
                pl += `  <li class="nav-item">
                    <button class="btn border p-0" role="button"  id="${item.id}" data-toggle="tooltip" title="${item.title}" ><i  class="${item.icon} nav-link "></i></button>
                 </li>`;
            }
            else
            {
                pl += item.content;
            }
            let v8 = this;
            $(document).on("click", "#" + item.id, function () {
                item.onClick(v8, v8.selected());
            })
        }
        return pl;
    }

    command(command, value) {
        document.execCommand(command, false, value)
    }

    selected() {
        return document.getSelection();
    }

    modal(type = "toggle") {
        this.modalDom.modal(type);
        return  this;
    }

    modalTitle(text){
        this.modalDom.find(".modal-title").text(text);
        return this;
    }

    modalContent(html){
        this.modalDom.find(".modal-body").html(html);
        return this;
    }

}

class V8Plugin {
    static plugins = [];

    static addPlugin(id, title, icon, onClick,content = null) {
        this.plugins.push({
            id: id,
            title: title,
            icon: icon,
            onClick: onClick,
            content : content
        })
    }
}

$.fn.v8editor = function (options = {}) {
    var editor;
    this.each(function () {
        editor = new V8editor($(this));
    })
    return editor;
}
