import{j as r}from"./iframe-S6a6IBGW.js";import{B as e}from"./Button-B33IEcV3.js";import{E as c,n as d,G as u}from"./IconWarning-D0GzEl3K.js";import{T as l}from"./Text-CLecf1p6.js";import{A as x}from"./Avatar-DiCx8oDo.js";import{T as g,a as h}from"./Tooltip-WRjlUrTr.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-C8_H4hBq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./LoadingSpinner-ngl346gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./context-CXquv49b.js";import"./remote-CCjzztUh.js";import"./Button-BnRrl5N8.js";import"./utils-B8ercvf4.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-I1naabyM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BUR3MtQf.js";import"./useFocus--oJxMCZo.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocusable-DTyt-kbS.js";import"./browser-C6w_OiT9.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./Text-XPHoRcaC.js";import"./AlertIcon-DgqrgpKu.js";import"./OverlayArrow-B-DFCcpR.js";import"./useControlledState-BHa0sYDq.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const sr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,m as WithAvatar,a as WithIcon,i as WithTextAndIcon,sr as __namedExportsOrder,er as default};
