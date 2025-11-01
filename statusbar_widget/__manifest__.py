# -*- coding: utf-8 -*-
{
    'name': 'Vertical Statusbar Widget',
    'version': '18.0.1.0.0',
    'category': 'Tools',
    'summary': 'Vertical statusbar widget for any Odoo model with selection fields',
    'description': """
        Status Visualization
        Best odoo App
        State Tracking
        Workflow Progression
        Vertical Status Display
        Stage Monitoring
        Process Status Tracking
        Approval Status
        Document Status
        Order Status
        Project Status
        Task Status
        Lead Status
        Opportunity Status
        Invoice Status
        Payment Status
        Delivery Status
        Manufacturing Status
        Quality Status
        HR Status
        Leave Status
        Expense Status
        Timesheet Status
        State
        Statusbar
    """,
    'author': 'Manisha Singh',
    'website': '',
    'depends': ['web','sale'],
    'data': [
            # 'views/example_sale_order.xml',
        ],
    'assets': {
        'web.assets_backend': [
            'statusbar_widget/static/src/js/vertical_stage_widget.js',
            'statusbar_widget/static/src/xml/vertical_stage_widget.xml',
            'statusbar_widget/static/src/css/vertical_stage_widget.css',
        ],
    },
    'images': [
            'static/description/icon.png',
        ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
