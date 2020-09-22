import { Avatar, Divider, Popover } from 'antd'
import '../static/style/components/author.css'
import Link from 'next/link'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

function Author() {
  const goGithub = () => {
    window.open('https://github.com/Hard-workingrookie')
  }
  const qqcontent = (
    <div>
      <p>1494601749</p>
    </div>
  )
  const Githubcontent = (
    <div>
      <p>https://github.com/Hard-workingrookie</p>
    </div>
  )
  const WetChatcontent = (
    <div>
      <p>wmshero</p>
    </div>
  )
  return (
    <div className='author-div comm-box'>
      <div>
        <Avatar size={100} src='https://s1.ax1x.com/2020/08/18/ducSC8.th.jpg' />
      </div>
      <div className='author-introduction'>
        前端小白，自学过，上过课，实习过，放弃过，又拾起过，一路忐忑，却又顺风而行。
        <Divider>社交账号</Divider>
        <Popover content={Githubcontent} title='Github'>
        <Avatar
          size={28}
          icon={<GithubOutlined />}
          className='account'
          onClick={() => {
            goGithub()
          }}
        />
        </Popover>
        <Popover content={qqcontent} title='QQ'>
          <Avatar size={28} icon={<QqOutlined />} className='account' />
        </Popover>
        <Popover content={WetChatcontent} title='微信'>
        <Avatar size={28} icon={<WechatOutlined />} className='account' />
        </Popover>
      </div>
    </div>
  )
}

export default Author
