import{j as r}from"./iframe-BcqfzoOA.js";import{L as e}from"./Link-YqMugRW6.js";import{T as l}from"./Text-1XRmWCfn.js";import{h as d}from"./IconWarning-Bupv8NYZ.js";import{S as n}from"./StoryBackground-CZtd7xyA.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./utils-Bwp7PlhH.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BgTDZkkG.js";import"./usePress-Lauho74f.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./remote-x3smQXnv.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Navigation/Link",component:e,args:{onPress:p("onPress"),isDisabled:!1,size:"m"},render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{...o,children:"Adjust project"})}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["default","dark","light"]},isDisabled:{control:"boolean"},size:{control:"inline-radio",options:["s","m"]}}},a={},t={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(l,{color:o.color,children:["Check our ",r.jsx(e,{...o,children:"onboarding"})," for more information."]})})},s={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(e,{...o,href:"https://mittwald.de",children:["Download invoice",r.jsx(d,{"aria-label":"download"})]})})},c={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",...o,children:"mittwald.de"})})},i={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",download:!0,...o,children:"Download file"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
