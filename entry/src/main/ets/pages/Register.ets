import picker from '@ohos.file.picker'
import Prompt from '@system.prompt'
import router from '@ohos.router'

@Entry
@Component
struct Register {
  @State avatarPath: string = ''
  @State nickName: string = ''
  @State country: string = ''
  @State phoneNumber: string = ''
  @State password: string = ''
  @State isAgree: boolean = false
  private photoPicker = new picker.PhotoViewPicker()

  build() {
    Row() {
      Column() {
        Text('手机号注册')
          .fontSize(26)
          .fontWeight(500)

        Image(this.avatarPath)
          .size({ width: 100, height: 100 })
          .backgroundColor(Color.Grey)
          .onClick(async () => {
            let data = await this.photoPicker.select({
              MIMEType: picker.PhotoViewMIMETypes.IMAGE_TYPE,
              maxSelectNumber: 1
            })

            this.avatarPath = data.photoUris[0]

          })
          .margin({
            top: 20
          })

        Column() {
          MyTextInput({ label: '昵称', placeholder: '例如: 陈晨', text: $nickName, type: InputType.Normal })
          MyTextInput({ label: '国家/地区', placeholder: '中国大陆(+86)', text: $country, type: InputType.Normal })
          MyTextInput({ label: '手机号', placeholder: '请填写手机号', text: $phoneNumber, type: InputType.Number })
          MyTextInput({ label: '密码', placeholder: '请填写密码', text: $password, type: InputType.Password })

        }.width('80%')
        .justifyContent(FlexAlign.SpaceBetween)
        .margin({
          top: 30
        })

        Row() {
          Row() {
            Radio({
              group: 'agreement',
              value: 'agree'
            })
              .onChange((isChecked) => {
                this.isAgree = isChecked
              })
          }.width(40)
          .alignItems(VerticalAlign.Top)
          .offset({ x: 12, y: -8 })


          Column() {
            Text() {
              Span('我已阅读同意')
                .fontSize(14)
                .fontColor(Color.Grey)
              Span('《软件许可及服务协议》')
                .fontColor(Color.Blue)
                .fontSize(14)
            }

            Text('本页面手机的信息仅用于注册账号')
              .fontColor(Color.Grey)
              .fontSize(14)
          }
        }.alignItems(VerticalAlign.Top)
        .margin({
          top: 60
        })

        Row() {
          Button('同意并继续')
            .type(ButtonType.Normal)
            .borderRadius(10)
            .margin({ top: 20 })
            .width(160)
            .height(50)
            .backgroundColor(this.isAgree ? Color.Green : $r('app.color.light_grey'))
            .fontColor(this.isAgree ? Color.White : Color.Grey)
            .onClick(() => {
              let err = ''
              if (this.nickName.trim() == '') {
                err += '昵称不能为空;'
              }
              if (this.country.trim() == '') {
                err += '国家不能为空;'
              }
              if (this.phoneNumber.trim() == '') {
                err += '手机号不能为空;'
              }
              if (this.password.trim() == '') {
                err += '密码不能为空;'
              }

              if (!this.isAgree) {
                err += '请先同意注册协议'
              }
              if (err != '') {
                Prompt.showToast({
                  message: err
                })
                return
              }
              console.log('wechat', this.nickName, this.country, this.phoneNumber, this.password, this.isAgree)
              router.back()
            })
        }
        .justifyContent(FlexAlign.Center)

      }
      .width('100%')
      .justifyContent(FlexAlign.Center)
    }
    .height('100%')
  }
}

@Component
struct MyTextInput {
  @Prop label: string
  @Prop placeholder: string
  @Link text: string
  type: InputType = InputType.Normal

  build() {
    Column() {
      Row() {
        Text(this.label)
          .width(80)
          .fontSize(18)

        TextInput({ placeholder: this.placeholder, text: this.text })
          .type(this.type)
          .fontSize(18).stateStyles({
          normal: {
            .border({
              width: 0,
              radius: 0
            })
            .backgroundColor(Color.White)
          },
          focused: {
            .backgroundColor(Color.White)
          },
          pressed: {
            .backgroundColor(Color.White)
          }
        })
          .onChange((value) => {
            this.text = value
          })
      }

      Divider()
        .margin({
          top: 10,
          bottom: 10
        })
    }
  }
}