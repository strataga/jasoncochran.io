import { permanentRedirect } from 'next/navigation'

// Keep old resume links pointed at the current, printable resume and downloads.
export default function ResumePrint() {
  permanentRedirect('/resume')
}
