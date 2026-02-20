import{j as r}from"./iframe-BXGfha1q.js";import{L as e}from"./Link-CaSBOK33.js";import{T as l}from"./Text-BbFupL_Y.js";import{h as d}from"./IconWarning-1Z1PxSqQ.js";import{S as n}from"./StoryBackground-ERSKuX9a.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./clsx-B-dksMZM.js";import"./index-D0PS_Jbm.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./utils-DDzB-hS3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-WJp8rgri.js";import"./usePress-DFEm-gMh.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./remote-DEIhwdad.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Navigation/Link",component:e,args:{onPress:p("onPress"),isDisabled:!1,size:"m"},render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{...o,children:"Adjust project"})}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["default","dark","light"]},isDisabled:{control:"boolean"},size:{control:"inline-radio",options:["s","m"]}}},a={},t={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(l,{color:o.color,children:["Check our ",r.jsx(e,{...o,children:"onboarding"})," for more information."]})})},s={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(e,{...o,href:"https://mittwald.de",children:["Download invoice",r.jsx(d,{"aria-label":"download"})]})})},c={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",...o,children:"mittwald.de"})})},i={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",download:!0,...o,children:"Download file"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Link target="_blank" {...props}>
        mittwald.de
      </Link>
    </StoryBackground>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Link target="_blank" download {...props}>
        Download file
      </Link>
    </StoryBackground>
}`,...i.parameters?.docs?.source}}};const z=["Default","Inline","WithIcon","ExternalLink","Download"];export{a as Default,i as Download,c as ExternalLink,t as Inline,s as WithIcon,z as __namedExportsOrder,P as default};
