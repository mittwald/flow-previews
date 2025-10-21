import{j as r}from"./iframe-BziZnbbf.js";import{B as e}from"./Button-BsOsKcj7.js";import{d as c,c as d,z as u}from"./IconWarning-CJvxfsrj.js";import{T as l}from"./Text-C2tTVpcM.js";import{A as x}from"./Avatar-BkRhGUao.js";import{T as g,a as h}from"./Tooltip-BbUB4qPf.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-DkTbH88u.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./index-_EM7mgZk.js";import"./LoadingSpinner-DE7xOG4e.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./context-BDhuSyDo.js";import"./Button-Czn71cHm.js";import"./utils-C0RTyIHD.js";import"./ProgressBar-BJFeHLpH.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-fjbW-LOk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D5emiALM.js";import"./useFocus-ycXwMZE-.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocusable-KPf6K6gw.js";import"./browser-BTvp61GS.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Text-fJHWLREE.js";import"./AlertIcon-B2iVBABv.js";import"./ClearPropsContextView-DtS_ulKQ.js";import"./ClearPropsContext-DUOPbXiH.js";import"./OverlayArrow-CA6KUquN.js";import"./useControlledState-DwOoiAv5.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
