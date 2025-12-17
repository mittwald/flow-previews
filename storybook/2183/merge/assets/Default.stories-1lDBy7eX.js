import{j as r}from"./iframe-BrERPjH0.js";import{B as e}from"./Button-BwrtrMsn.js";import{a as c}from"./IconChevronDown-BEw7wgap.js";import{I as u}from"./IconCamera-Xfa2rzWD.js";import{I as d}from"./IconPlus-CoujBPxb.js";import{T as l}from"./Text-Bge3UWaD.js";import{A as x}from"./Avatar-DvDPerbj.js";import{T as g,a as h}from"./Tooltip-OK-5DPjj.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-Dhje7Uvw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./index-DzMVKTvo.js";import"./IconX-w5i2HL6_.js";import"./IconCheck-CYohvaRX.js";import"./LoadingSpinner-BnJ91rtd.js";import"./ariaLive-B0H2MtNq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./context-DvwVEH9h.js";import"./remote-Fny-y5bx.js";import"./Button-DaDxLfby.js";import"./utils-DSRl4UW4.js";import"./ProgressBar-DcK7zEgl.js";import"./Label-D4vlL-gU.js";import"./Hidden-BAsL4qfb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CWOKZ_16.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXQYTWPh.js";import"./useFocus-BqH6bZyL.js";import"./useFocusRing-KYw8u7bF.js";import"./useFocusable-_eZhQVeM.js";import"./browser-YFSmfPOL.js";import"./EmulatedBoldText-ihVL4TkF.js";import"./Text-CFQd4N__.js";import"./AlertIcon-3oiOhfcn.js";import"./IconDanger-CeY6S6MU.js";import"./IconInfo-B68XsGh2.js";import"./IconCircleCheck-C3Iu91N0.js";import"./OverlayArrow-gzfZyYcK.js";import"./useControlledState-C9HQthZh.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
