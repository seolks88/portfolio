type LinkType = 'github' | 'demo_video' | 'presentation' | 'email'
type SocialLocation = 'hero' | 'social_buttons'

function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params)
  }
}

export function trackSectionView(sectionId: string) {
  trackEvent('view_section', { section_id: sectionId })
}

export function trackSectionNavigate(sectionId: string) {
  trackEvent('navigate_section', { section_id: sectionId })
}

export function trackProjectSelect(projectId: string) {
  trackEvent('select_project', { project_id: projectId })
}

export function trackProjectLink(projectId: string, linkType: LinkType) {
  trackEvent('open_project_link', {
    project_id: projectId,
    link_type: linkType
  })
}

export function trackSocialLink(linkType: LinkType, location: SocialLocation) {
  trackEvent('click_social_link', {
    link_type: linkType,
    location
  })
}
