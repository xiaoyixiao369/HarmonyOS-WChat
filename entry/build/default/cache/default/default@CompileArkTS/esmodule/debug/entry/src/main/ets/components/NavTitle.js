export class NavTitle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__title = new SynchedPropertySimpleOneWayPU(params.title, this, "title");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
        this.__title.reset(params.title);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__title.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__title.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get title() {
        return this.__title.get();
    }
    set title(newValue) {
        this.__title.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('100%');
            Row.height(40);
            Row.backgroundColor({ "id": 16777222, "type": 10001, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" });
            Row.justifyContent(FlexAlign.Center);
            Row.alignItems(VerticalAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.fontSize(16);
            Text.fontWeight(600);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=NavTitle.js.map