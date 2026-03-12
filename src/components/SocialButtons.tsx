import { Mail, Github } from 'lucide-react'
import { SocialButton } from './ui/social-button'
import { trackSocialLink } from '@/lib/analytics'

export function SocialButtons() {
  return (
    <div className='flex items-center gap-2'>
      <SocialButton
        href='mailto:seolks88@gmail.com'
        icon={<Mail className='h-4 w-4' />}
        onClick={() => trackSocialLink('email', 'social_buttons')}>
        seolks88@gmail.com
      </SocialButton>
      <SocialButton
        href='https://github.com/ksseol'
        icon={<Github className='h-4 w-4' />}
        onClick={() => trackSocialLink('github', 'social_buttons')}>
        GitHub
      </SocialButton>
    </div>
  )
}
