/** @odoo-module **/

import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { Component } from "@odoo/owl";

export class VerticalStateWidget extends Component {
    setup() {
        super.setup();
    }

    /**
     * Get the field label/string from field definition
     */
    get fieldLabel() {
        const field = this.props.record.fields[this.props.name];
        return field.string || 'Approval Stages';
    }

    /**
     * Get all available stages from field definition
     */
    get stages() {
        const field = this.props.record.fields[this.props.name];
        return field.selection || [];
    }

    /**
     * Get current stage value
     */
    get currentStage() {
        return this.props.record.data[this.props.name];
    }

    /**
     * Check if stage is currently active
     */
    isActive(stageValue) {
        return this.currentStage === stageValue;
    }

    /**
     * Check if stage has been passed/completed
     */
    isPassed(stageValue) {
        const stages = this.stages;
        const currentIndex = stages.findIndex(s => s[0] === this.currentStage);
        const stageIndex = stages.findIndex(s => s[0] === stageValue);
        return stageIndex < currentIndex && currentIndex !== -1;
    }

    /**
     * Handle stage click event
     */
    async onStageClick(stageValue) {
        if (!this.props.readonly && this.currentStage !== stageValue) {
            await this.props.record.update({
                [this.props.name]: stageValue
            });
        }
    }

    /**
     * Get CSS classes for stage item
     */
    getStageClasses(stageValue) {
        const classes = ['stage_item'];
        if (this.isActive(stageValue)) {
            classes.push('active');
        }
        if (this.isPassed(stageValue)) {
            classes.push('passed');
        }
        if (!this.props.readonly) {
            classes.push('clickable');
        }
        return classes.join(' ');
    }
}

VerticalStateWidget.template = "statusbar_widget.VerticalStateWidget";
VerticalStateWidget.props = {
    ...standardFieldProps,
};

export const verticalStateWidget = {
    component: VerticalStateWidget,
    supportedTypes: ["selection"],
    extractProps: ({ attrs }) => {
        return {
            readonly: attrs.readonly,
        };
    },
};

registry.category("fields").add("vertical_state", verticalStateWidget);
