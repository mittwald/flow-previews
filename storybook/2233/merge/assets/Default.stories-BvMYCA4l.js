import{j as o}from"./iframe-tI_lG94_.js";import{L as e}from"./Link-z4t99LEz.js";import{T as l}from"./Text-DDIuCQxA.js";import{e as m}from"./IconWarning-BFYQkdin.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./clsx-B-dksMZM.js";import"./index-CBk6rXlg.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./utils-bmh-HeLH.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./browser-DuhBvQkx.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./remote-CmKo-bli.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,N={title:"Navigation/Link",component:e,args:{onPress:g("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(l,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(m,{"aria-label":"download"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},d={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},p={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    target: "_blank",
    download: true
  },
  render: props => <Link {...props}>Download file</Link>
}`,...p.parameters?.docs?.source}}};const R=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,n as Disabled,p as Download,d as ExternalLink,s as Inline,c as Light,t as WithIcon,R as __namedExportsOrder,N as default};
