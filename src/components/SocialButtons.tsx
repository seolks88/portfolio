import { Mail, Github } from 'lucide-react'
import { SocialButton } from './ui/social-button'

export function SocialButtons() {
  return (
    <div className='flex items-center gap-2'>
      <SocialButton
        href='mailto:seolks88@gmail.com'
        icon={<Mail className='h-4 w-4' />}>
        seolks88@gmail.com
      </SocialButton>
      <SocialButton
        href='https://github.com/ksseol'
        icon={<Github className='h-4 w-4' />}>
        GitHub
      </SocialButton>
    </div>
  )
}
