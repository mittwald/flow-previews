import{j as e}from"./iframe-HxmydubW.js";import{L as o}from"./Link-otQh8KUZ.js";import{T as m}from"./Text-CUJOJiDD.js";import{c as g}from"./IconWarning-C9xwJqAl.js";import{A as u}from"./AlertText-CJjUY60n.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./clsx-B-dksMZM.js";import"./index-CEuE-GZL.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./context-CAIZZp13.js";import"./utils-QtLN3P4K.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-AF-IcVAt.js";import"./usePress-yluX3X-J.js";import"./useFocusRing-CAJt6BJw.js";import"./useFocusable-H6SSWU_B.js";import"./browser-XpDtWA4a.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Text-CyO0jXov.js";import"./remote-fubbDoJI.js";import"./AlertIcon-BFPz9yZd.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,K={title:"Navigation/Link",component:o,args:{onPress:k("onPress"),isDisabled:!1},render:r=>e.jsx(o,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>e.jsxs(m,{children:["Check our ",e.jsx(o,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>e.jsxs(o,{...r,href:"https://mittwald.de",children:["Download invoice",e.jsx(g,{"aria-label":"download"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},d={args:{target:"_blank"},render:r=>e.jsx(o,{...r,children:"mittwald.de"})},l={args:{target:"_blank",download:!0},render:r=>e.jsx(o,{...r,children:"Download file"})},p={args:{inline:!0},render:r=>e.jsx(o,{...r,children:e.jsx(u,{status:"danger",children:"Loading failed"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
