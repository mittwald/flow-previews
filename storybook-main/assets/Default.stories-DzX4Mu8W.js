import{j as r}from"./iframe-pcvtdEGM.js";import{B as e}from"./Button-uyxj5lKX.js";import{E as c,n as d,G as u}from"./IconWarning-BUxMadyi.js";import{T as l}from"./Text-B9qmJggM.js";import{A as x}from"./Avatar-Cjun65_-.js";import{T as g,a as h}from"./Tooltip-By81RDgR.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-s1YoCCRN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./index-YznY-g7A.js";import"./LoadingSpinner-CRozfiA2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./context-We2COa_S.js";import"./remote-O2EONUZN.js";import"./Button-C7g9LfsB.js";import"./utils-fsWZtkeO.js";import"./ProgressBar-BJtj52rd.js";import"./Label-BTMeT-8z.js";import"./Hidden-DReGI82W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./browser-DdUrC3oM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./Text-DqkI-mFO.js";import"./AlertIcon-CRV-RQ9G.js";import"./OverlayArrow-KSA73Rxs.js";import"./useControlledState-CJg030Qn.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
