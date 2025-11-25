import{j as o}from"./iframe-CRHerQcT.js";import{L as e}from"./Link-DtavQq9t.js";import{T as p}from"./Text-sklVEIT5.js";import{e as m}from"./IconWarning-S9zVz1Ke.js";import"./index-nuYtCEEu.js";import"./flowComponent-Po2jQ9NZ.js";import"./index-BbKg1nkj.js";import"./clsx-B-dksMZM.js";import"./index-DOvz_Dla.js";import"./useLocalizedStringFormatter-B1bSBhnk.js";import"./context-C5gXDLZB.js";import"./utils-B8O46aeb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DdX5Sdo5.js";import"./useFocusable-O8acuieM.js";import"./browser-C1kPNy51.js";import"./EmulatedBoldText-CArsfrvv.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,C={title:"Navigation/Link",component:e,args:{onPress:g("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(p,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(m,{"aria-label":"download"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},d={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},l={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const P=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,n as Disabled,l as Download,d as ExternalLink,s as Inline,c as Light,t as WithIcon,P as __namedExportsOrder,C as default};
