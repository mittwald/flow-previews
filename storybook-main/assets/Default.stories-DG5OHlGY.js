import{j as r}from"./iframe-C_XCETJ4.js";import{B as e}from"./Button-BRKehz01.js";import{J as c,n as d,L as u}from"./IconWarning-D8ZYq2sU.js";import{T as l}from"./Text-l7AxHvJY.js";import{A as x}from"./Avatar-BE3_HRKs.js";import{T as g,a as h}from"./Tooltip-CR3Bs1Gb.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-BZV1j-SR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./index-BzhLFU3i.js";import"./LoadingSpinner-dY4_o8YP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./context-CpOW4Kl4.js";import"./remote-BBIBCAlv.js";import"./Button-DIlWiE4j.js";import"./utils-Bso2FrGw.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-xR971w.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useFocusable-CMVXl80p.js";import"./browser-BQl26QHV.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Text-CpxVEUdG.js";import"./AlertIcon-Bo1DHsRX.js";import"./OverlayArrow-DucIvLHR.js";import"./useControlledState-CeDypDyB.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
