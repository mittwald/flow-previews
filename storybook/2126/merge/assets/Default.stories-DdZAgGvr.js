import{j as e}from"./iframe-sw6YBGs2.js";import{H as o}from"./Heading-BjeBhvap.js";import{a2 as m}from"./IconWarning-Mo4x9W3y.js";import{S as c}from"./Section-l8vn1XNi.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./index-DXtHeKIw.js";import"./RSPContexts-DsElqAB8.js";import"./utils-DUnEZ_OM.js";import"./Action-_btOP2lG.js";import"./context-D0JPrgtB.js";import"./useStatic-3-oc9s-0.js";import"./browser-CM4mIXp1.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./dynamic-DI3ra1Po.js";import"./Dialog-vQ1BmT5h.js";import"./Button-C9KiGU0p.js";import"./ProgressBar-LVLLuOf0.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C55dwVSC.js";import"./useFocusRing-CuXwNFI9.js";import"./useFocusable-D0OMOiNw.js";import"./OverlayArrow-BmDyVYWZ.js";import"./useControlledState-PLdRfTwy.js";import"./Collection-DRfKzRSF.js";import"./CollectionBuilder-CLa01cON.js";import"./SelectionIndicator-BR2LstrO.js";import"./Separator-DJH-J0YQ.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";const F={title:"Content/Heading",component:o,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.jsxs(o,{...r,children:["I am a H",r.level," Heading"]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{}),"Personal Information"]})},s={args:{level:1,size:"xxl"},render:r=>e.jsxs(o,{level:1,size:"xxl",...r,children:[e.jsx(m,{}),"Personal Information"]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}},p={render:r=>e.jsxs(c,{children:[e.jsx(o,{...r,children:"Personal Information of the current user"}),e.jsx(o,{...r,wrap:"balance",children:"Personal Information of the current user"})]}),parameters:{viewport:{defaultViewport:"mobile2"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const G=["Default","WithIcon","WithCustomSize","Dark","Light","Wrap"];export{t as Dark,n as Default,i as Light,s as WithCustomSize,a as WithIcon,p as Wrap,G as __namedExportsOrder,F as default};
