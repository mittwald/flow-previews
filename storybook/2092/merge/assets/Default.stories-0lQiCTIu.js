import{j as r}from"./iframe-DoVgBQr5.js";import{B as e}from"./Button-2cUDiMZd.js";import{d as c,c as d,z as u}from"./IconWarning-BITNguYJ.js";import{T as l}from"./Text-DarT3iBq.js";import{A as x}from"./Avatar-YZwkbuGj.js";import{T as g,a as h}from"./Tooltip-C0w1TLqB.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-B0KNexqg.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./index-CnXLT15x.js";import"./LoadingSpinner-BjGFLica.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./context-DKZO50eL.js";import"./Button-Cf2Tt4tQ.js";import"./utils-BUNxWnYj.js";import"./ProgressBar-i7FI2__w.js";import"./Label-8ulleTCg.js";import"./Hidden-VhCLrHg5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dokwxw5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMEqlp6n.js";import"./useFocus-DgyX4ANK.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocusable-CYiqpOWe.js";import"./browser-CTr_Jj6j.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Text-BnwT6LTw.js";import"./AlertIcon-Cn_YkDLf.js";import"./ClearPropsContextView-Ca7YEM0M.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./OverlayArrow-F14P5UPi.js";import"./useControlledState-JsyFwj7N.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const tr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,m as WithAvatar,a as WithIcon,i as WithTextAndIcon,tr as __namedExportsOrder,sr as default};
