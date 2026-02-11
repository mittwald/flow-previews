import{j as r}from"./iframe-CtuK0rEJ.js";import{B as e}from"./Button-CC2cGGC1.js";import{J as c,n as d,L as u}from"./IconWarning-BSe4G4Pm.js";import{T as l}from"./Text-CyAseKfN.js";import{A as x}from"./Avatar-MceGsVvw.js";import{T as g,a as h}from"./Tooltip-DQ7Jfv76.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-B9Yq-m4j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./index-DPf65gvx.js";import"./LoadingSpinner-CJNtrFTB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./context-BLHFXQwL.js";import"./remote-DD8nhYq_.js";import"./Button-CSRC_w1a.js";import"./utils-C1DNWP44.js";import"./ProgressBar-D8lgnq4k.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Da2cRPrr.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocusable-AhKszEdS.js";import"./browser-Up8UMddv.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./Text-DmIZo_mX.js";import"./AlertIcon-CPMEIwAr.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useControlledState-Cc_BEFH0.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
