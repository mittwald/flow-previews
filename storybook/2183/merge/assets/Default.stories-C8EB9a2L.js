import{j as e}from"./iframe-BqP6npnu.js";import{H as o}from"./Heading-Dc3wJcTH.js";import{a1 as m}from"./IconWarning-DbZ28gHF.js";import{S as c}from"./Section-BgyjzhPc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-r-rgdyuu.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./RSPContexts-DNFW1N-a.js";import"./utils-Co5LfTVH.js";import"./remote-CSf0dxK4.js";import"./context-WZRL0rNv.js";import"./Button-Cqxj8v2u.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dpv25OMu.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./browser-DXN0P2CK.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./useStatic-BDpTt2fP.js";import"./dynamic-S48VUeic.js";const T={title:"Content/Heading",component:o,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.jsxs(o,{...r,children:["I am a H",r.level," Heading"]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{}),"Personal Information"]})},s={args:{level:1,size:"xxl"},render:r=>e.jsxs(o,{level:1,size:"xxl",...r,children:[e.jsx(m,{}),"Personal Information"]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}},p={render:r=>e.jsxs(c,{children:[e.jsx(o,{...r,children:"Personal Information of the current user"}),e.jsx(o,{...r,wrap:"balance",children:"Personal Information of the current user"})]}),parameters:{viewport:{defaultViewport:"mobile2"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    size: "xxl"
  },
  render: props => <Heading level={1} size="xxl" {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <Heading {...props}>Personal Information of the current user</Heading>
      <Heading {...props} wrap="balance">
        Personal Information of the current user
      </Heading>
    </Section>,
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  }
}`,...p.parameters?.docs?.source}}};const q=["Default","WithIcon","WithCustomSize","Dark","Light","Wrap"];export{t as Dark,n as Default,i as Light,s as WithCustomSize,a as WithIcon,p as Wrap,q as __namedExportsOrder,T as default};
