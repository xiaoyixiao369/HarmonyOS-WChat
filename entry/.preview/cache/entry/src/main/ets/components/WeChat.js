import { NavTitle } from '@bundle:com.example.wechat/entry/ets/components/NavTitle';
export class WeChat extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__messages = new ObservedPropertyObjectPU([], this, "messages");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.messages !== undefined) {
            this.messages = params.messages;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__messages.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__messages.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get messages() {
        return this.__messages.get();
    }
    set messages(newValue) {
        this.__messages.set(newValue);
    }
    aboutToAppear() {
        this.messages = [
            {
                avatar: { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '桑良翰',
                lastMsg: '你在干啥',
                time: '晚上6:23'
            },
            {
                avatar: { "id": 16777218, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '张廖初蝶',
                lastMsg: '好的,我一会儿就去!',
                time: '晚上6:28'
            },
            {
                avatar: { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '宇文雅彤',
                lastMsg: '集合,打球了,快点,就等你了',
                time: '晚上5:28'
            },
            {
                avatar: { "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '那拉尔柳',
                lastMsg: '昨天吃的面',
                time: '晚上5:18'
            },
            {
                avatar: { "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '楼暖姝',
                lastMsg: '这个剧很好看哦~',
                time: '晚上4:18'
            },
            {
                avatar: { "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '谭晴丽',
                lastMsg: '上次喝的那个酒叫什么名字?',
                time: '晚上4:18'
            },
            {
                avatar: { "id": 16777242, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '詹凝梦',
                lastMsg: '昨天去大舅家了',
                time: '晚上3:18'
            },
            {
                avatar: { "id": 16777226, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '傅欣笑',
                lastMsg: '有纯血鸿蒙的测试资格么',
                time: '晚上3:08'
            },
            {
                avatar: { "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '幸宛畅',
                lastMsg: '斗破苍穹又又又更新了,快点看',
                time: '昨天23:08'
            },
            {
                avatar: { "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '轩辕雨琴',
                lastMsg: '身骑白马超好听',
                time: '昨天23:02'
            },
            {
                avatar: { "id": 16777241, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '郑怡嘉',
                lastMsg: '我很喜欢古风的歌曲!',
                time: '昨天22:02'
            },
            {
                avatar: { "id": 16777250, "type": 20000, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" },
                nickName: '北芳馨',
                lastMsg: '南边新开了个小酒馆!',
                time: '昨天21:22'
            }
        ];
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("components/WeChat.ets(86:5)");
            Column.width('100%');
            Column.height('100%');
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
            Column.create();
            Column.debugLine("components/WeChat.ets(89:7)");
            Column.backgroundColor(Color.White);
            Column.width('100%');
            Column.padding({
                top: 10
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 30 });
            List.debugLine("components/WeChat.ets(90:9)");
            List.width('96%');
            List.divider({
                strokeWidth: 1,
                startMargin: 40
            });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const message = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("components/WeChat.ets(92:13)");
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
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("components/WeChat.ets(93:15)");
                            Row.width('100%');
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(message.avatar);
                            Image.debugLine("components/WeChat.ets(94:17)");
                            Image.width(40);
                            Image.height(40);
                            Image.borderRadius(6);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.debugLine("components/WeChat.ets(98:17)");
                            Column.layoutWeight(1);
                            Column.height(40);
                            Column.alignItems(HorizontalAlign.Start);
                            Column.justifyContent(FlexAlign.SpaceBetween);
                            Column.margin({ left: 8 });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(message.nickName);
                            Text.debugLine("components/WeChat.ets(99:19)");
                            Text.fontWeight(700);
                            Text.fontSize(15);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(message.lastMsg);
                            Text.debugLine("components/WeChat.ets(102:19)");
                            Text.fontSize(13);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.debugLine("components/WeChat.ets(110:17)");
                            Column.width(40);
                            Column.justifyContent(FlexAlign.Start);
                            Column.alignItems(HorizontalAlign.End);
                            Column.height(40);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(message.time);
                            Text.debugLine("components/WeChat.ets(111:19)");
                            Text.fontSize(10);
                            Text.fontColor(Color.Grey);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Row.create();
                            Row.debugLine("components/WeChat.ets(93:15)");
                            Row.width('100%');
                            if (!isInitialRender) {
                                Row.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(message.avatar);
                            Image.debugLine("components/WeChat.ets(94:17)");
                            Image.width(40);
                            Image.height(40);
                            Image.borderRadius(6);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.debugLine("components/WeChat.ets(98:17)");
                            Column.layoutWeight(1);
                            Column.height(40);
                            Column.alignItems(HorizontalAlign.Start);
                            Column.justifyContent(FlexAlign.SpaceBetween);
                            Column.margin({ left: 8 });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(message.nickName);
                            Text.debugLine("components/WeChat.ets(99:19)");
                            Text.fontWeight(700);
                            Text.fontSize(15);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(message.lastMsg);
                            Text.debugLine("components/WeChat.ets(102:19)");
                            Text.fontSize(13);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.debugLine("components/WeChat.ets(110:17)");
                            Column.width(40);
                            Column.justifyContent(FlexAlign.Start);
                            Column.alignItems(HorizontalAlign.End);
                            Column.height(40);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(message.time);
                            Text.debugLine("components/WeChat.ets(111:19)");
                            Text.fontSize(10);
                            Text.fontColor(Color.Grey);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.messages, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=WeChat.js.map