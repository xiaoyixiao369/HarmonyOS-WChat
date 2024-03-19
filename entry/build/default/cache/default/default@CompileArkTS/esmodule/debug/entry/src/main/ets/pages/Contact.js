import { NavTitle } from '@bundle:com.example.wechat/entry/ets/components/NavTitle';
export class Contact extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.contactGroups = [
            {
                index: 'A',
                contacts: [
                    {
                        avatar: { "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '大阿联'
                    }
                ]
            },
            {
                index: 'B',
                contacts: [{
                        avatar: { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '博文视点'
                    }]
            },
            {
                index: 'C',
                contacts: [
                    {
                        avatar: { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '公孙离'
                    }
                ]
            },
            {
                index: 'D',
                contacts: [
                    {
                        avatar: { "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '大哥'
                    }
                ]
            },
            {
                index: 'F',
                contacts: [
                    {
                        avatar: { "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '房祖名'
                    }
                ]
            },
            {
                index: 'H',
                contacts: [
                    {
                        avatar: { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '黄龙玉'
                    }
                ]
            },
            {
                index: 'L',
                contacts: [
                    {
                        avatar: { "id": 16777251, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '梁晓静'
                    },
                    {
                        avatar: { "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '李欣'
                    }
                ]
            },
            {
                index: 'N',
                contacts: [
                    {
                        avatar: { "id": 16777253, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '妞妞'
                    }
                ]
            },
            {
                index: 'X',
                contacts: [
                    {
                        avatar: { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '夏梦'
                    }
                ]
            },
            {
                index: 'Y',
                contacts: [
                    {
                        avatar: { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '杨紫'
                    },
                    {
                        avatar: { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                        name: '叶晨曦'
                    }
                ]
            },
        ];
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.contactGroups !== undefined) {
            this.contactGroups = params.contactGroups;
        }
        if (params.letters !== undefined) {
            this.letters = params.letters;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    buildItem(image, title, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('96%');
            Row.height(50);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(image);
            Image.width(40);
            Image.height(40);
            Image.borderRadius(6);
            Image.margin({
                left: 10
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.fontWeight(500);
            Text.margin({
                left: 10
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    buildListItemHeader(index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('104%');
            Row.height(40);
            Row.alignItems(VerticalAlign.Center);
            Row.backgroundColor(Color.Grey);
            Row.opacity(0.5);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(index);
            Text.fontWeight(700);
            Text.margin({ left: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.End });
            Stack.width('100%');
            Stack.height('100%');
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new NavTitle(this, { title: '微信' }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '微信'
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 10 });
            List.width('100%');
            List.divider({
                strokeWidth: 2,
                startMargin: 50
            });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.buildItem.bind(this)({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '新的朋友');
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.buildItem.bind(this)({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '新的朋友');
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.buildItem.bind(this)({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '群聊');
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.buildItem.bind(this)({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '群聊');
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.buildItem.bind(this)({ "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '标签');
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.buildItem.bind(this)({ "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '标签');
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.buildItem.bind(this)({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '公众号');
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.buildItem.bind(this)({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" }, '公众号');
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        List.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 10, scroller: this.scroller });
            List.width('100%');
            List.height(400);
            List.divider({
                strokeWidth: 2,
                startMargin: 50
            });
            List.sticky(StickyStyle.Header | StickyStyle.Footer);
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const contactGroup = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    ListItemGroup.create({ header: this.buildListItemHeader.bind(this, contactGroup.index) });
                    if (!isInitialRender) {
                        ListItemGroup.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const contact = _item;
                        this.buildItem.bind(this)(contact.avatar, contact.name);
                    };
                    this.forEachUpdateFunction(elmtId, contactGroup.contacts, forEachItemGenFunction);
                    if (!isInitialRender) {
                        ForEach.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                ForEach.pop();
                ListItemGroup.pop();
            };
            this.forEachUpdateFunction(elmtId, this.contactGroups, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            AlphabetIndexer.create({ arrayValue: this.letters, selected: 0 });
            AlphabetIndexer.color(Color.Black);
            AlphabetIndexer.alignStyle(IndexerAlign.Right);
            AlphabetIndexer.align(Alignment.End);
            AlphabetIndexer.onSelect((index) => {
                const letter = this.letters[index];
                for (let i = 0; i < this.contactGroups.length; i++) {
                    const element = this.contactGroups[i];
                    if (element.index === letter) {
                        this.scroller.scrollToIndex(i);
                    }
                }
            });
            if (!isInitialRender) {
                AlphabetIndexer.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        AlphabetIndexer.pop();
        Stack.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Contact(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Contact.js.map