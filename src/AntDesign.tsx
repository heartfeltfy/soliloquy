import { ReactNode } from 'react'
import { ConfigProvider, App } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'

type Props = {
  children: ReactNode
}
const AntDesign = ({ children }: Props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <App style={{ height: '100%' }}>{children}</App>
    </ConfigProvider>
  )
}
export default AntDesign
