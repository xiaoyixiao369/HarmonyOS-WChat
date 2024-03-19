struct preview{build(){List({ space: 10, scroller: this.scroller }) {
            ForEach(this.contactGroups, (contactGroup: ContactGroup) => {
              ListItemGroup({ header: this.buildListItemHeader(contactGroup.index) }) {
                ForEach(contactGroup.contacts, (contact: ContactModel) => {
                  this.buildItem(contact.avatar, contact.name)
                })
              }
            })
          }.width('100%')
          .height(400)
          .divider({
            strokeWidth: 2,
            startMargin: 50
          })
          .sticky(StickyStyle.Header | StickyStyle.Footer)}}