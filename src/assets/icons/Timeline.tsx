export const Timeline = ({ viewBox = 150, mobile = false }) => {
  if (mobile) {
    return (
      <svg style={{ marginRight: 30 }} width="210" height="900" viewBox="0 30 64 766" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 30V735" stroke="#3F8CD6" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 32C0 14.3269 14.3269 0 32 0V0C49.6731 0 64 14.3269 64 32V32C64 49.6731 49.6731 64 32 64V64C14.3269 64 0 49.6731 0 32V32Z" fill="#3F8CD6" fillOpacity="0.1"/>
        <g filter="url(#filter0_d_19002_112382)">
          <circle cx="32" cy="32" r="6" fill="#3F8CD6"/>
          <circle cx="32" cy="32" r="5" stroke="white" strokeWidth="2"/>
        </g>
        <circle cx="32" cy="240" r="5" fill="#3F8CD6" stroke="white" strokeWidth="2"/>
        <circle cx="32" cy="470" r="5" fill="#3F8CD6" stroke="white" strokeWidth="2"/>
        <circle cx="32" cy="734" r="5" fill="#3F8CD6" stroke="white" strokeWidth="2"/>
        <defs>
          <filter id="filter0_d_19002_112382" x="6.17391" y="6.17391" width="51.6522" height="51.6522" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="9.91304"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.54902 0 0 0 0 0.839216 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19002_112382"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19002_112382" result="shape"/>
          </filter>
        </defs>
      </svg>
    )
  }
  return (
    <svg width="114" height="588" viewBox={`0 ${viewBox} 114 588`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M57 61V540" stroke="#3F8CD6" strokeWidth="2"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 57C19 36.0132 36.0132 19 57 19V19C77.9868 19 95 36.0132 95 57V57C95 77.9868 77.9868 95 57 95V95C36.0132 95 19 77.9868 19 57V57Z" fill="#3F8CD6" fillOpacity="0.1"/>
      <g filter="url(#filter0_d_19002_112382)">
        <circle cx="57" cy="57" r="8" fill="#3F8CD6"/>
        <circle cx="57" cy="57" r="7" stroke="white" strokeWidth="2"/>
      </g>
      <circle cx="57" cy="215" r="7" fill="#3F8CD6" stroke="white" strokeWidth="2"/>
      <circle cx="57" cy="373" r="7" fill="#3F8CD6" stroke="white" strokeWidth="2"/>
      <circle cx="57" cy="531" r="7" fill="#3F8CD6" stroke="white" strokeWidth="2"/>
      <defs>
        <filter id="filter0_d_19002_112382" x="29.1739" y="29.1739" width="55.6522" height="55.6522" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="9.91304"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.54902 0 0 0 0 0.839216 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19002_112382"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19002_112382" result="shape"/>
        </filter>
      </defs>
    </svg>

  )
}