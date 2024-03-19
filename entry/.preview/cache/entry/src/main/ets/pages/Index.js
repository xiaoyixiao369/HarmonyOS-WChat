import router from '@ohos:router';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Index.ets(9:5)");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#020204');
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" });
            Image.debugLine("pages/Index.ets(10:7)");
            Image.width('100%');
            Image.height('80%');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Index.ets(14:7)");
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({ left: 20, right: 20 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('登录');
            Button.debugLine("pages/Index.ets(15:9)");
            __Button__commonBtn();
            Button.backgroundColor(Color.Green);
            Button.fontColor(Color.White);
            Button.onClick(() => {
                router.replaceUrl({
                    url: 'pages/Main'
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('注册');
            Button.debugLine("pages/Index.ets(25:9)");
            __Button__commonBtn();
            Button.backgroundColor(Color.White);
            Button.fontColor(Color.Grey);
            Button.onClick(() => {
                router.pushUrl({
                    url: 'pages/Register'
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __Button__commonBtn() {
    Button.type(ButtonType.Normal);
    Button.fontSize(18);
    Button.width(120);
    Button.borderRadius(10);
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index.js.map