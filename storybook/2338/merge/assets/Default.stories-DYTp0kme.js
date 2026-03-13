import{j as r}from"./iframe-CtEjVB66.js";import{L as e}from"./Link-DMg6xFRD.js";import{T as l}from"./Text-QCKh6xRo.js";import{h as d}from"./IconWarning-1CkAUSYF.js";import{S as n}from"./StoryBackground-Da6n33FO.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./utils-BuEQZICT.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./usePress-Cre2k4PJ.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./remote-4O72-jdB.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,z={title:"Navigation/Link",component:e,args:{onPress:p("onPress"),isDisabled:!1,size:"m"},render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{...o,children:"Adjust project"})}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["default","dark","light"]},isDisabled:{control:"boolean"},size:{control:"inline-radio",options:["s","m"]}}},a={},t={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(l,{color:o.color,children:["Check our ",r.jsx(e,{...o,children:"onboarding"})," for more information."]})})},s={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(e,{...o,href:"https://mittwald.de",children:["Download invoice",r.jsx(d,{"aria-label":"download"})]})})},i={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",...o,children:"mittwald.de"})})},c={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",download:!0,...o,children:"Download file"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Text color={props.color}>
        Check our <Link {...props}>onboarding</Link> for more information.
      </Text>
    </StoryBackground>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Link {...props} href="https://mittwald.de">
        Download invoice
        <IconDownload aria-label="download" />
      </Link>
    </StoryBackground>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Link target="_blank" {...props}>
        mittwald.de
      </Link>
    </StoryBackground>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Link target="_blank" download {...props}>
        Download file
      </Link>
    </StoryBackground>
}`,...c.parameters?.docs?.source}}};const A=["Default","Inline","WithIcon","ExternalLink","Download"];export{a as Default,c as Download,i as ExternalLink,t as Inline,s as WithIcon,A as __namedExportsOrder,z as default};
