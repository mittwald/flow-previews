import{j as r}from"./iframe-BO07bPAa.js";import{B as e}from"./Button-CCtz8EXc.js";import{J as c,n as d,L as u}from"./IconWarning-ClLv5I07.js";import{T as l}from"./Text-CwdryKSs.js";import{A as x}from"./Avatar-C4TyhZvQ.js";import{T as g,a as h}from"./Tooltip-B3onYfdr.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-DPf8iJqA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./index-C__iODou.js";import"./LoadingSpinner-BTNHBT1C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./context-DKHz4OX0.js";import"./remote-C9jEPRv0.js";import"./Button-CPst5v-a.js";import"./utils-DpF9Snp1.js";import"./ProgressBar-BUHmhWxP.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dans5Mom.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UbwEnmrk.js";import"./useFocus-ntzScLPi.js";import"./useFocusRing-DXebh_G-.js";import"./useFocusable-C66-pRTt.js";import"./browser-B0pBncgx.js";import"./EmulatedBoldText-Bl01c38V.js";import"./Text-sIV6FVOB.js";import"./AlertIcon-CagNIYo0.js";import"./OverlayArrow-BbflWQr7.js";import"./useControlledState-DyIed2bM.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
