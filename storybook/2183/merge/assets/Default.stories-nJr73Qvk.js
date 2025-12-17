import{j as r}from"./iframe-CzrbZwQa.js";import{B as e}from"./Button-BnubCMUU.js";import"./IconApp-BPXZ8R19.js";import{I as u}from"./IconCamera-BR8qYcdM.js";import{I as c}from"./IconChevronDown-BfoInUiX.js";import{I as d}from"./IconPlus-Bg7yxZ_O.js";import{T as l}from"./Text-u_8Z_6lo.js";import{A as x}from"./Avatar-cE_01eOS.js";import{T as g,a as h}from"./Tooltip-BygoOrTd.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-DUFSXfnV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./IconX-C4Avmif2.js";import"./IconCheck-DAWvHQav.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./remote-q4LXxmI0.js";import"./Button-Cr67WOIO.js";import"./utils-Ds7wxNIq.js";import"./ProgressBar-CBKtRO3f.js";import"./Label-DMBiwPLT.js";import"./Hidden-CPBzEaGa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./Text-Bpo5VkCj.js";import"./AlertIcon-Bjdc7GvU.js";import"./IconDanger-BVqA44qH.js";import"./IconInfo-DM42HxkB.js";import"./IconCircleCheck-NP3aQsbw.js";import"./OverlayArrow-QhJyKZol.js";import"./useControlledState-D-hIONgW.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,dr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
