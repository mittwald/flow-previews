import{j as r}from"./iframe-ZqGKWCd-.js";import{B as e}from"./Button-BZgO5jCY.js";import{a as c}from"./IconChevronDown-DOkopHOS.js";import{I as u}from"./IconCamera-BgF3QjOW.js";import{I as d}from"./IconPlus-BJxMBEmq.js";import{T as l}from"./Text-fsbk1lYn.js";import{A as x}from"./Avatar-hwlQQCJQ.js";import{T as g,a as h}from"./Tooltip-FniRebUG.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-BYlzcAr0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./index-BS5rk3Xg.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./context-zCArMZyI.js";import"./remote-QKtGQrQi.js";import"./Button-CUB1U94R.js";import"./utils-D141Jr51.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_yC0x0cS.js";import"./useFocus-DhU9eZJ-.js";import"./useFocusRing-DbADFAxV.js";import"./useFocusable-BybslKHd.js";import"./browser-BUvHTeNk.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./AlertIcon-BmCtp8Ik.js";import"./IconDanger-9fNDXdlu.js";import"./IconInfo-DEicSxyO.js";import"./IconCircleCheck-DD0_tb5Y.js";import"./OverlayArrow-CDGB6Pw4.js";import"./useControlledState-CXUvh1Us.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
