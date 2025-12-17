import{j as r}from"./iframe-BsZhBXal.js";import{B as e}from"./Button-Cxmuw7nD.js";import"./IconApp-DFfFI-8B.js";import{I as u}from"./IconCamera-CRhMZvme.js";import{I as c}from"./IconChevronDown-pBTCbBMc.js";import{I as d}from"./IconPlus-DCRYVjFT.js";import{T as l}from"./Text-CWir5uzG.js";import{A as x}from"./Avatar-CesMYZHY.js";import{T as g,a as h}from"./Tooltip-BFj4bm_-.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-Cx_8B3-b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./remote-C6zziWZe.js";import"./Button-DmBDFYEY.js";import"./utils-D7f3lHNi.js";import"./ProgressBar-BuAY7GL-.js";import"./Label-Bdtu_aaV.js";import"./Hidden-B-7zzc6R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./browser-B5Kx9HDY.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./AlertIcon-Dxf78ivN.js";import"./IconDanger-D44A5Pyv.js";import"./IconInfo-Do6A0oHF.js";import"./IconCircleCheck-BfY3bhV4.js";import"./OverlayArrow-CT9B4GiY.js";import"./useControlledState-Bxg7VuAu.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,dr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
