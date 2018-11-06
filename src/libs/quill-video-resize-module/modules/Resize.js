import ItemResize from '../../quill-resize-module/ItemResize'

export class Resize extends ItemResize {
    handleMouseup = () => {
        // reset cursor everywhere
        this.setCursor('')
        // stop listening for movement and mouseup
        document.removeEventListener('mousemove', this.handleDrag)
        document.removeEventListener('mouseup', this.handleMouseup)
    }

    handleDrag = (evt) => {
        if (!this.vid) {
            // image not set yet
            return
        }
        // update image size
        const deltaX = evt.clientX - this.dragStartX
        const deltaY = evt.clientY - this.dragStartY
        if (this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3]) {
            this.vid.width = Math.round(this.preDragWidth - deltaX)
            this.vid.height = Math.round(this.preDragHeight - deltaY)
        } else {
            this.vid.width = Math.round(this.preDragWidth + deltaX)
            this.vid.height = Math.round(this.preDragHeight + deltaY)
        }
        this.requestUpdate()
    }

    handleMousedown = (evt) => {
        // note which box
        this.dragBox = evt.target
        // note starting mousedown position
        this.dragStartX = evt.clientX
        this.dragStartY = evt.clientY
        // store the width before the drag
        this.preDragWidth = this.vid.getBoundingClientRect().width
        this.preDragHeight = this.vid.getBoundingClientRect().height
        // set the proper cursor everywhere
        this.setCursor(this.dragBox.style.cursor)
        // listen for movement and mouseup
        document.addEventListener('mousemove', this.handleDrag, false)
        document.addEventListener('mouseup', this.handleMouseup, false)
    }

    setCursor = (value) => {
        [
            document.body,
            this.vid,
        ].forEach((el) => {
            el.style.cursor = value   // eslint-disable-line no-param-reassign
        })
    }
}
