import{j as o}from"./iframe-Eg8-wFCR.js";import{L as e}from"./Link-COlAsyWV.js";import{T as l}from"./Text-cFe2oWr9.js";import"./IconChevronDown-CB7etEhV.js";import{I as m}from"./IconDownload-D9WA19Ga.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./clsx-B-dksMZM.js";import"./index-7P9p2RDg.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./utils-DpUmHG9o.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./remote-DyWsWGYm.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,R={title:"Navigation/Link",component:e,args:{onPress:g("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(l,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(m,{"aria-label":"download"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},d={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},p={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
