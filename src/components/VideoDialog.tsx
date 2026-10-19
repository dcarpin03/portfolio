import { useEffect, useId, useRef } from 'react'

type VideoDialogProps = {
  title: string
  src: string
  onClose: () => void
}

function VideoDialog({ title, src, onClose }: VideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const headingId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    const video = videoRef.current
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      video?.pause()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <dialog ref={dialogRef} className="video-dialog" aria-labelledby={headingId} onClose={onClose}>
      <div className="video-dialog-header">
        <h2 id={headingId}>Demostración de {title}</h2>
        <button type="button" className="video-close" onClick={() => dialogRef.current?.close()} aria-label="Cerrar demostración">Cerrar <span aria-hidden="true">×</span></button>
      </div>
      <video ref={videoRef} src={src} controls playsInline preload="none" aria-label={`Vídeo de demostración de ${title}`}>
        Tu navegador no puede reproducir este vídeo. <a href={src}>Abrir vídeo de demostración</a>.
      </video>
    </dialog>
  )
}

export default VideoDialog
