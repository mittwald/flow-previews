import{j as o}from"./iframe-DlUIOFNy.js";import{L as e}from"./Link-98KJxluq.js";import{T as l}from"./Text-D41gwIdF.js";import"./IconChevronDown-Bvah6r8d.js";import{I as m}from"./IconDownload-Bl5yOVd-.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./clsx-B-dksMZM.js";import"./index-DAMde4kY.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./utils-D5WuX1D5.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./browser-CY6W5xXv.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./remote-CtPiqESW.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,R={title:"Navigation/Link",component:e,args:{onPress:g("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(l,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(m,{"aria-label":"download"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},d={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},p={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const W=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,n as Disabled,p as Download,d as ExternalLink,s as Inline,c as Light,t as WithIcon,W as __namedExportsOrder,R as default};
