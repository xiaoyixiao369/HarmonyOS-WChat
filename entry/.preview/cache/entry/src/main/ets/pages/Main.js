import { WeChat } from '@bundle:com.example.wechat/entry/ets/components/WeChat';
import { Contact } from '@bundle:com.example.wechat/entry/ets/pages/Contact';
class Main extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__curIndex = new ObservedPropertySimplePU(0, this, "curIndex");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.curIndex !== undefined) {
            this.curIndex = params.curIndex;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__curIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__curIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get curIndex() {
        return this.__curIndex.get();
    }
    set curIndex(newValue) {
        this.__curIndex.set(newValue);
    }
    buildTabBar(title, normalImage, selectedImage, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Main.ets(9:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.curIndex == index ? selectedImage : normalImage);
            Image.debugLine("pages/Main.ets(10:7)");
            Image.width(28);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.debugLine("pages/Main.ets(12:7)");
            Text.fontSize(12);
            Text.fontColor(this.curIndex == index ? Color.Green : Color.Black);
            Text.margin({
                top: 2
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create();
            Tabs.debugLine("pages/Main.ets(22:5)");
            Tabs.width('100%');
            Tabs.height('100%');
            Tabs.barPosition(BarPosition.End);
            Tabs.backgroundColor({ "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" });
            Tabs.onChange((index) => {
                this.curIndex = index;
            });
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new WeChat(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.buildTabBar.call(this, '微信', { "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, { "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, 0);
                } });
            TabContent.debugLine("pages/Main.ets(23:7)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new Contact(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.buildTabBar.call(this, '通讯录', { "id": 16777233, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, 1);
                } });
            TabContent.debugLine("pages/Main.ets(27:7)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.buildTabBar.call(this, '发现', { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, 2);
                } });
            TabContent.debugLine("pages/Main.ets(31:7)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.buildTabBar.call(this, '我', { "id": 16777222, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, { "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, 3);
                } });
            TabContent.debugLine("pages/Main.ets(35:7)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Main(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Main.js.map