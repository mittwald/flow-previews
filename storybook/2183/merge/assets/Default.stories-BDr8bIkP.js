import{j as r}from"./iframe-BJ1-yygM.js";import{B as e}from"./Button-Cjtrvck7.js";import{a as c}from"./IconChevronDown-CrWkAVaz.js";import{I as u}from"./IconCamera-Cn2UGW3y.js";import{I as d}from"./IconPlus-DcnD1nGG.js";import{T as l}from"./Text-DheJl8Kj.js";import{A as x}from"./Avatar-CJR6sNdp.js";import{T as g,a as h}from"./Tooltip-CQXc8T3n.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-BW4cbCIo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./index-BJaBKPR5.js";import"./IconX-n5-6JmhA.js";import"./IconCheck-B4qlzGu9.js";import"./LoadingSpinner-Bwp7e6t0.js";import"./ariaLive-C1jz4QjY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./context-CjOncL0b.js";import"./remote-CmT8aojC.js";import"./Button-DhOdN5WZ.js";import"./utils-CcDDSJ_p.js";import"./ProgressBar-M3cNuExw.js";import"./Label-CzmfrLRz.js";import"./Hidden-DoQenIIt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C_0uKhPF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqKRozC0.js";import"./useFocus-BC8nQK7S.js";import"./useFocusRing-D91RCqts.js";import"./useFocusable-CM2LayHg.js";import"./browser-DT5Kx7EO.js";import"./EmulatedBoldText-DCklMUI5.js";import"./Text-CgGmMVxG.js";import"./AlertIcon-CnQXyn1d.js";import"./IconDanger-CYKvK3jT.js";import"./IconInfo-D8-cEu7p.js";import"./IconCircleCheck-BFEG22El.js";import"./OverlayArrow-C2s0LJSp.js";import"./useControlledState-CbxGCAex.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>,
  args: {
    size: "s"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>,
  args: {
    size: "s"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...m.parameters?.docs?.source}}};const dr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,m as WithAvatar,a as WithIcon,i as WithTextAndIcon,dr as __namedExportsOrder,cr as default};
