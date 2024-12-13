import { useEffect, useRef, useState } from 'react'
import styles from './LivePlayer.module.scss'

const LivePlayer = () => {
  const playerRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState({
    width: 0,
    height: 0
  })

  const GetAppletPosition = () => {
    const playerRefDom = playerRef.current?.getBoundingClientRect()
    const data = {
      width: Math.round(playerRefDom?.width || 0),
      height: Math.round(playerRefDom?.height || 0)
    }
    setStyle(data)
  }

  useEffect(() => {
    GetAppletPosition()
  }, [])

  return (
    <div className={styles.VideoContainer} ref={playerRef}>
      播放区域{style.width}x{style.height}
    </div>
  )
}

export default LivePlayer
