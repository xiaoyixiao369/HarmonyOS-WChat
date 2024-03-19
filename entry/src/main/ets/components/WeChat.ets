import Message from '../viewmodel/Message'
import { NavTitle } from './NavTitle'

@Component
export struct WeChat {
  @State messages: Message[] = []

  aboutToAppear() {
    this.messages = [
      {
        avatar: $r('app.media.user1'),
        nickName: '桑良翰',
        lastMsg: '你在干啥',
        time: '晚上6:23'
      },
      {
        avatar: $r('app.media.user2'),
        nickName: '张廖初蝶',
        lastMsg: '好的,我一会儿就去!',
        time: '晚上6:28'
      },
      {
        avatar: $r('app.media.user3'),
        nickName: '宇文雅彤',
        lastMsg: '集合,打球了,快点,就等你了',
        time: '晚上5:28'
      },
      {
        avatar: $r('app.media.user4'),
        nickName: '那拉尔柳',
        lastMsg: '昨天吃的面',
        time: '晚上5:18'
      },
      {
        avatar: $r('app.media.user5'),
        nickName: '楼暖姝',
        lastMsg: '这个剧很好看哦~',
        time: '晚上4:18'
      },
      {
        avatar: $r('app.media.user6'),
        nickName: '谭晴丽',
        lastMsg: '上次喝的那个酒叫什么名字?',
        time: '晚上4:18'
      },
      {
        avatar: $r('app.media.user7'),
        nickName: '詹凝梦',
        lastMsg: '昨天去大舅家了',
        time: '晚上3:18'
      },
      {
        avatar: $r('app.media.user8'),
        nickName: '傅欣笑',
        lastMsg: '有纯血鸿蒙的测试资格么',
        time: '晚上3:08'
      },
      {
        avatar: $r('app.media.user9'),
        nickName: '幸宛畅',
        lastMsg: '斗破苍穹又又又更新了,快点看',
        time: '昨天23:08'
      },
      {
        avatar: $r('app.media.user10'),
        nickName: '轩辕雨琴',
        lastMsg: '身骑白马超好听',
        time: '昨天23:02'
      },
      {
        avatar: $r('app.media.user11'),
        nickName: '郑怡嘉',
        lastMsg: '我很喜欢古风的歌曲!',
        time: '昨天22:02'
      },
      {
        avatar: $r('app.media.user12'),
        nickName: '北芳馨',
        lastMsg: '南边新开了个小酒馆!',
        time: '昨天21:22'
      }
    ]
  }

  build() {
    Column() {
      NavTitle({ title: '微信' })

      Column(){
        List({space: 30}) {
          ForEach(this.messages, (message: Message)=> {
            ListItem() {
              Row() {
                Image(message.avatar)
                  .width(40)
                  .height(40)
                .borderRadius(6)
                Column() {
                  Text(message.nickName)
                    .fontWeight(700)
                    .fontSize(15)
                  Text(message.lastMsg)
                    .fontSize(13)

                }.layoutWeight(1)
                .height(40)
                .alignItems(HorizontalAlign.Start)
                .justifyContent(FlexAlign.SpaceBetween)
                .margin({left: 8})
                Column() {
                  Text(message.time)
                    .fontSize(10)
                    .fontColor(Color.Grey)
                }.width(40)
                .justifyContent(FlexAlign.Start)
                .alignItems(HorizontalAlign.End)
                .height(40)


              }.width('100%')
            }

          })
        }
        .width('96%')
        .divider({
          strokeWidth: 1,
          startMargin: 40
        })

      }
      .backgroundColor(Color.White)
      .width('100%')
      .padding({
        top: 10
      })

    }.width('100%')
    .height('100%')
  }
}