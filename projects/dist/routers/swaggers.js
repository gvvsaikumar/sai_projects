"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const package_json_1 = require("../../package.json");
const options = {
    definition: {
        opemai: "3.0.0",
        info: {
            title: 'REST API Docs',
            version: package_json_1.version
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    Schema: 'bearer',
                    bearerFormate: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ]
    },
    apis: ["./src/routers.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function swaggerDocs(app, port) {
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
}
exports.default = swaggerDocs;
;
//# sourceMappingURL=swaggers.js.map