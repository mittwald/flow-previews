import{j as r}from"./iframe-m11uA8ph.js";import{B as e}from"./Button-Dypt8iw9.js";import"./IconApp-DUFlag-8.js";import{I as u}from"./IconCamera-BxfMhQvS.js";import{I as c}from"./IconChevronDown-BaoYQ2TJ.js";import{I as d}from"./IconPlus-B1uJM_pz.js";import{T as l}from"./Text-C8eG2T-4.js";import{A as x}from"./Avatar-ChQ0DwoI.js";import{T as g,a as h}from"./Tooltip-CMijZotm.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-DBYo8xA4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./context-CT-J1WHN.js";import"./remote-D5wxRFjH.js";import"./Button-Hg1-qkLa.js";import"./utils-B2Atf1IZ.js";import"./ProgressBar-C1zZy1Lx.js";import"./Label-BUyu-zI1.js";import"./Hidden-BdAfB0qw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./browser-BsJUI2_B.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./AlertIcon-CxXcO4S6.js";import"./IconDanger-BFD4weFl.js";import"./IconInfo-B54pVzu5.js";import"./IconCircleCheck-DtVkr2LX.js";import"./OverlayArrow-DhFl9stJ.js";import"./useControlledState-CQIt1v1r.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,dr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const lr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,m as WithAvatar,a as WithIcon,i as WithTextAndIcon,lr as __namedExportsOrder,dr as default};
