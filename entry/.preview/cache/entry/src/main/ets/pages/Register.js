import picker from '@ohos:file.picker';
import Prompt from '@ohos:prompt';
import router from '@ohos:router';
class Register extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__avatarPath = new ObservedPropertySimplePU('', this, "avatarPath");
        this.__nickName = new ObservedPropertySimplePU('', this, "nickName");
        this.__country = new ObservedPropertySimplePU('', this, "country");
        this.__phoneNumber = new ObservedPropertySimplePU('', this, "phoneNumber");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__isAgree = new ObservedPropertySimplePU(false, this, "isAgree");
        this.photoPicker = new picker.PhotoViewPicker();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.avatarPath !== undefined) {
            this.avatarPath = params.avatarPath;
        }
        if (params.nickName !== undefined) {
            this.nickName = params.nickName;
        }
        if (params.country !== undefined) {
            this.country = params.country;
        }
        if (params.phoneNumber !== undefined) {
            this.phoneNumber = params.phoneNumber;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.isAgree !== undefined) {
            this.isAgree = params.isAgree;
        }
        if (params.photoPicker !== undefined) {
            this.photoPicker = params.photoPicker;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__avatarPath.purgeDependencyOnElmtId(rmElmtId);
        this.__nickName.purgeDependencyOnElmtId(rmElmtId);
        this.__country.purgeDependencyOnElmtId(rmElmtId);
        this.__phoneNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__isAgree.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__avatarPath.aboutToBeDeleted();
        this.__nickName.aboutToBeDeleted();
        this.__country.aboutToBeDeleted();
        this.__phoneNumber.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__isAgree.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get avatarPath() {
        return this.__avatarPath.get();
    }
    set avatarPath(newValue) {
        this.__avatarPath.set(newValue);
    }
    get nickName() {
        return this.__nickName.get();
    }
    set nickName(newValue) {
        this.__nickName.set(newValue);
    }
    get country() {
        return this.__country.get();
    }
    set country(newValue) {
        this.__country.set(newValue);
    }
    get phoneNumber() {
        return this.__phoneNumber.get();
    }
    set phoneNumber(newValue) {
        this.__phoneNumber.set(newValue);
    }
    get password() {
        return this.__password.get();
    }
    set password(newValue) {
        this.__password.set(newValue);
    }
    get isAgree() {
        return this.__isAgree.get();
    }
    set isAgree(newValue) {
        this.__isAgree.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Register.ets(17:5)");
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Register.ets(18:7)");
            Column.width('100%');
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('手机号注册');
            Text.debugLine("pages/Register.ets(19:9)");
            Text.fontSize(26);
            Text.fontWeight(500);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.avatarPath);
            Image.debugLine("pages/Register.ets(23:9)");
            Image.size({ width: 100, height: 100 });
            Image.backgroundColor(Color.Grey);
            Image.onClick(async () => {
                let data = await this.photoPicker.select({
                    MIMEType: picker.PhotoViewMIMETypes.IMAGE_TYPE,
                    maxSelectNumber: 1
                });
                this.avatarPath = data.photoUris[0];
            });
            Image.margin({
                top: 20
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Register.ets(39:9)");
            Column.width('80%');
            Column.justifyContent(FlexAlign.SpaceBetween);
            Column.margin({
                top: 30
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MyTextInput(this, { label: '昵称', placeholder: '例如: 陈晨', text: this.__nickName, type: InputType.Normal }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        label: '昵称', placeholder: '例如: 陈晨'
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MyTextInput(this, { label: '国家/地区', placeholder: '中国大陆(+86)', text: this.__country, type: InputType.Normal }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        label: '国家/地区', placeholder: '中国大陆(+86)'
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MyTextInput(this, { label: '手机号', placeholder: '请填写手机号', text: this.__phoneNumber, type: InputType.Number }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        label: '手机号', placeholder: '请填写手机号'
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MyTextInput(this, { label: '密码', placeholder: '请填写密码', text: this.__password, type: InputType.Password }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        label: '密码', placeholder: '请填写密码'
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Register.ets(51:9)");
            Row.alignItems(VerticalAlign.Top);
            Row.margin({
                top: 60
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Register.ets(52:11)");
            Row.width(40);
            Row.alignItems(VerticalAlign.Top);
            Row.offset({ x: 12, y: -8 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Radio.create({
                group: 'agreement',
                value: 'agree'
            });
            Radio.debugLine("pages/Register.ets(53:13)");
            Radio.onChange((isChecked) => {
                this.isAgree = isChecked;
            });
            if (!isInitialRender) {
                Radio.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Register.ets(65:11)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create();
            Text.debugLine("pages/Register.ets(66:13)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Span.create('我已阅读同意');
            Span.debugLine("pages/Register.ets(67:15)");
            Span.fontSize(14);
            Span.fontColor(Color.Grey);
            if (!isInitialRender) {
                Span.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Span.create('《软件许可及服务协议》');
            Span.debugLine("pages/Register.ets(70:15)");
            Span.fontColor(Color.Blue);
            Span.fontSize(14);
            if (!isInitialRender) {
                Span.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('本页面手机的信息仅用于注册账号');
            Text.debugLine("pages/Register.ets(75:13)");
            Text.fontColor(Color.Grey);
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Register.ets(84:9)");
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('同意并继续');
            Button.debugLine("pages/Register.ets(85:11)");
            Button.type(ButtonType.Normal);
            Button.borderRadius(10);
            Button.margin({ top: 20 });
            Button.width(160);
            Button.height(50);
            Button.backgroundColor(this.isAgree ? Color.Green : { "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.wechat", "moduleName": "entry" });
            Button.fontColor(this.isAgree ? Color.White : Color.Grey);
            Button.onClick(() => {
                let err = '';
                if (this.nickName.trim() == '') {
                    err += '昵称不能为空;';
                }
                if (this.country.trim() == '') {
                    err += '国家不能为空;';
                }
                if (this.phoneNumber.trim() == '') {
                    err += '手机号不能为空;';
                }
                if (this.password.trim() == '') {
                    err += '密码不能为空;';
                }
                if (!this.isAgree) {
                    err += '请先同意注册协议';
                }
                if (err != '') {
                    Prompt.showToast({
                        message: err
                    });
                    return;
                }
                console.log('wechat', this.nickName, this.country, this.phoneNumber, this.password, this.isAgree);
                router.back();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class MyTextInput extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__label = new SynchedPropertySimpleOneWayPU(params.label, this, "label");
        this.__placeholder = new SynchedPropertySimpleOneWayPU(params.placeholder, this, "placeholder");
        this.__text = new SynchedPropertySimpleTwoWayPU(params.text, this, "text");
        this.type = InputType.Normal;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.type !== undefined) {
            this.type = params.type;
        }
    }
    updateStateVars(params) {
        this.__label.reset(params.label);
        this.__placeholder.reset(params.placeholder);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__label.purgeDependencyOnElmtId(rmElmtId);
        this.__placeholder.purgeDependencyOnElmtId(rmElmtId);
        this.__text.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__label.aboutToBeDeleted();
        this.__placeholder.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get label() {
        return this.__label.get();
    }
    set label(newValue) {
        this.__label.set(newValue);
    }
    get placeholder() {
        return this.__placeholder.get();
    }
    set placeholder(newValue) {
        this.__placeholder.set(newValue);
    }
    get text() {
        return this.__text.get();
    }
    set text(newValue) {
        this.__text.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Register.ets(139:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Register.ets(140:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.label);
            Text.debugLine("pages/Register.ets(141:9)");
            Text.width(80);
            Text.fontSize(18);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: this.placeholder, text: this.text });
            TextInput.debugLine("pages/Register.ets(145:9)");
            TextInput.type(this.type);
            TextInput.fontSize(18);
            ViewStackProcessor.visualState("normal");
            TextInput.border({
                width: 0,
                radius: 0
            });
            TextInput.backgroundColor(Color.White);
            ViewStackProcessor.visualState("focused");
            TextInput.backgroundColor(Color.White);
            ViewStackProcessor.visualState("pressed");
            TextInput.backgroundColor(Color.White);
            ViewStackProcessor.visualState();
            TextInput.onChange((value) => {
                this.text = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("pages/Register.ets(167:7)");
            Divider.margin({
                top: 10,
                bottom: 10
            });
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Register(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Register.js.map