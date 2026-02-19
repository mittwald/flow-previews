import{j as r}from"./iframe-C9fwoqx7.js";import{B as e}from"./Button-C7pOzOnK.js";import{J as c,n as d,L as u}from"./IconWarning-slnz76yl.js";import{T as l}from"./Text-D7jvp7G5.js";import{A as x}from"./Avatar-BBvzb8nH.js";import{T as g,a as h}from"./Tooltip-DFjii58-.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-BomHH_vX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./LoadingSpinner-BWPVzhoG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./context-C2ecxi5G.js";import"./remote-B-ZPT6P_.js";import"./Button-DDn45mdd.js";import"./utils-Cx2L-iDs.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BNdvaiV7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-tgKXO9PL.js";import"./useFocus-CMKZ5vES.js";import"./useFocusRing-s7_3pCWo.js";import"./useFocusable-CQiYog1P.js";import"./browser-B4JTTu9h.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./Text-xqSfQxLT.js";import"./AlertIcon-Bz6wfr4x.js";import"./OverlayArrow-DDmkn5_8.js";import"./useControlledState-BJuMvqvK.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
