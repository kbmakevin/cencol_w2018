System.register(["./app.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, AppRoutes;
    return {
        setters: [
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            exports_1("AppRoutes", AppRoutes = [
                //{ path: 'about', component: AboutComponent }
                {
                    path: '',
                    component: app_component_1.AppComponent,
                    data: { title: 'Angular Test Example' }
                },
            ]);
        }
    };
});
//# sourceMappingURL=app.routes.js.map