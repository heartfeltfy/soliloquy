import { DatePicker } from 'antd'
import type { DatePickerProps } from 'antd'
const Layout = () => {
  const onChange: DatePickerProps['onChange'] = (_, datestring) => {
    console.log(datestring)
  }
  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  )
}

export default Layout
