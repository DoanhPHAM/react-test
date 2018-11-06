import ItemToolbar from "../../quill-resize-module/ItemToolbar";

import { DisplayStyle, FloatStyle, MarginStyle, IconAlignLeft, IconAlignCenter, IconAlignRight } from "../../quill-resize-module/styles";

export class Toolbar extends ItemToolbar {
    _defineAlignments = () => {
        this.alignments = [
            {
                icon: IconAlignLeft,
                apply: () => {
                    DisplayStyle.add(this.vid, 'inline');
                    FloatStyle.add(this.vid, 'left');
                    MarginStyle.add(this.vid, '0 1em 1em 0');
                },
                isApplied: () => FloatStyle.value(this.vid) === 'left',
            },
            {
                icon: IconAlignCenter,
                apply: () => {
                    DisplayStyle.add(this.vid, 'block');
                    FloatStyle.remove(this.vid);
                    MarginStyle.add(this.vid, 'auto');
                },
                isApplied: () => MarginStyle.value(this.vid) === 'auto',
            },
            {
                icon: IconAlignRight,
                apply: () => {
                    DisplayStyle.add(this.vid, 'inline');
                    FloatStyle.add(this.vid, 'right');
                    MarginStyle.add(this.vid, '0 0 1em 1em');
                },
                isApplied: () => FloatStyle.value(this.vid) === 'right',
            },
        ];
    };

    _addToolbarButtons = () => {
        const buttons = [];
		this.alignments.forEach((alignment, idx) => {
            const button = document.createElement('span');
            button.innerHTML = alignment.icon;
			buttons.push(button);
			button.addEventListener('click', () => {
					// deselect all buttons
				buttons.forEach(button => button.style.filter = '');
				if (alignment.isApplied()) {
						// If applied, unapply
				    FloatStyle.remove(this.vid);
				    MarginStyle.remove(this.vid);
				    DisplayStyle.remove(this.vid);
				} else {
						// otherwise, select button and apply
					this._selectButton(button);
					alignment.apply();
				}
					// image may change position; redraw drag handles
				this.requestUpdate();
            });

			Object.assign(button.style, this.options.toolbarButtonStyles);
			if (idx > 0) {
                button.style.borderLeftWidth = '0';
            }

			// Object.assign(button.children[0].style, this.options.toolbarButtonSvgStyles);
			// if (alignment.isApplied()) {
			// 		// select button if previously applied
			// 	this._selectButton(button);
			// }
			this.toolbar.appendChild(button);
		});
    };
}
