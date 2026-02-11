import{j as r}from"./iframe-DFKQ2QsC.js";import{B as e}from"./Button-CumhvKwr.js";import{J as c,n as d,L as u}from"./IconWarning-BuA9AHid.js";import{T as l}from"./Text-BEPoPMFj.js";import{A as x}from"./Avatar-CaGa3_rW.js";import{T as g,a as h}from"./Tooltip-bTpc3hQe.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-C3qvLo_W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./index-BLTW5Tcp.js";import"./LoadingSpinner-DwolGT18.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./context-m8OE0ddO.js";import"./remote-BP8uJVcU.js";import"./Button-DBkz1b5H.js";import"./utils-BJXdD5he.js";import"./ProgressBar-DQlWH-Q4.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CurstbwI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CE-sEEB4.js";import"./useFocus-BuPH9-PX.js";import"./useFocusRing-Dltr6KPm.js";import"./useFocusable-C6PlbLtm.js";import"./browser-C3pjfYL0.js";import"./EmulatedBoldText-CZthuZwX.js";import"./Text-D27_pVCF.js";import"./AlertIcon-D5_dS1m5.js";import"./OverlayArrow-D6jpYtlx.js";import"./useControlledState-DUrZ8j4h.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
