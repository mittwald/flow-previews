import{j as r}from"./iframe-CL_XwmGn.js";import{B as e}from"./Button-D2VcFxMo.js";import{E as c,n as d,G as u}from"./IconWarning-BJDkWSaD.js";import{T as l}from"./Text-D6CnWJI6.js";import{A as x}from"./Avatar-B5uvKPRV.js";import{T as g,a as h}from"./Tooltip-ru0_7Mnb.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-EBYxMThd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./index-E9PNAIL6.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./context-BrZvYWUs.js";import"./remote-vDvbK7RM.js";import"./Button-CWqxXJtj.js";import"./utils-pMOpDdKA.js";import"./ProgressBar-CwwrTQ5U.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BzQNsH-t.js";import"./useFocus-BpR4SkFv.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocusable-CrdCOPEw.js";import"./browser-BUAGSuau.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./AlertIcon-DT_6S455.js";import"./OverlayArrow-CguIeEaq.js";import"./useControlledState-CguvIA_y.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
