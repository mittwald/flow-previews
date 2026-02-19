import{j as e}from"./iframe-CaMmm6JB.js";import{L as o}from"./Link-DkYjPJkt.js";import{T as m}from"./Text-BytpHB1v.js";import{c as g}from"./IconWarning-CjIU5uAw.js";import{A as u}from"./AlertText-CvHTwf-C.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./clsx-B-dksMZM.js";import"./index-bUizOk6y.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./context-COlkIlq2.js";import"./utils-BWel_6vJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CsmVawkN.js";import"./usePress-Bq52eadg.js";import"./useFocusRing-D0nVGfyc.js";import"./useFocusable-D5loONxI.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./Text-DltKapPO.js";import"./remote-B2IWJRNM.js";import"./AlertIcon-CCMwGOFg.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,K={title:"Navigation/Link",component:o,args:{onPress:k("onPress"),isDisabled:!1},render:r=>e.jsx(o,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>e.jsxs(m,{children:["Check our ",e.jsx(o,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>e.jsxs(o,{...r,href:"https://mittwald.de",children:["Download invoice",e.jsx(g,{"aria-label":"download"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},d={args:{target:"_blank"},render:r=>e.jsx(o,{...r,children:"mittwald.de"})},l={args:{target:"_blank",download:!0},render:r=>e.jsx(o,{...r,children:"Download file"})},p={args:{inline:!0},render:r=>e.jsx(o,{...r,children:e.jsx(u,{status:"danger",children:"Loading failed"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      Download invoice
      <IconDownload aria-label="download" />
    </Link>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    target: "_blank"
  },
  render: props => <Link {...props}>mittwald.de</Link>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    target: "_blank",
    download: true
  },
  render: props => <Link {...props}>Download file</Link>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  },
  render: props => <Link {...props}>
      <AlertText status="danger">Loading failed</AlertText>
    </Link>
}`,...p.parameters?.docs?.source}}};const M=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download","WithAlertText"];export{i as Dark,a as Default,n as Disabled,l as Download,d as ExternalLink,s as Inline,c as Light,p as WithAlertText,t as WithIcon,M as __namedExportsOrder,K as default};
