import LivePlayer from '@/components/LivePlayer'
import styles from './Layout.module.scss'
const Layout = () => {
  return (
    <div className={styles.LayoutContainer}>
      <LivePlayer />
    </div>
  )
}

export default Layout
