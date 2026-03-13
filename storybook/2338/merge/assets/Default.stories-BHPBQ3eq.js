import{j as r}from"./iframe-BFddea_x.js";import{L as e}from"./Link-DtC85Uv0.js";import{T as l}from"./Text-B70YymId.js";import{h as d}from"./IconWarning-Cwahpn-Q.js";import{S as n}from"./StoryBackground-tUdtaYjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./utils-D-aZUMcZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./usePress-DZQSLH7U.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./remote-DmjGOFpp.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,z={title:"Navigation/Link",component:e,args:{onPress:p("onPress"),isDisabled:!1,size:"m"},render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{...o,children:"Adjust project"})}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["default","dark","light"]},isDisabled:{control:"boolean"},size:{control:"inline-radio",options:["s","m"]}}},a={},t={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(l,{color:o.color,children:["Check our ",r.jsx(e,{...o,children:"onboarding"})," for more information."]})})},s={render:o=>r.jsx(n,{color:o.color,children:r.jsxs(e,{...o,href:"https://mittwald.de",children:["Download invoice",r.jsx(d,{"aria-label":"download"})]})})},i={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",...o,children:"mittwald.de"})})},c={render:o=>r.jsx(n,{color:o.color,children:r.jsx(e,{target:"_blank",download:!0,...o,children:"Download file"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
