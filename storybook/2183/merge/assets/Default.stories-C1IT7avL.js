import{j as r}from"./iframe-BFixO3jI.js";import{B as e}from"./Button-yJ8r8LHg.js";import"./IconApp-DCuSf9pl.js";import{I as u}from"./IconCamera-BHapET2j.js";import{I as c}from"./IconChevronDown-C2Az-2TV.js";import{I as d}from"./IconPlus-Cers5fGb.js";import{T as l}from"./Text-ZinnvgDr.js";import{A as x}from"./Avatar-hpuEkOHg.js";import{T as g,a as h}from"./Tooltip-D3km2HF1.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-DIh-veob.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./remote-DXDa28-R.js";import"./Button-BpPmVpYb.js";import"./utils-DlL1jtSe.js";import"./ProgressBar-Dekjp8mr.js";import"./Label-dlScXtXx.js";import"./Hidden-eVS00tin.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";import"./browser-CbH1E9WO.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./AlertIcon-C2Z_DqSX.js";import"./IconDanger--IOlURNT.js";import"./IconInfo-CaC3B8PP.js";import"./IconCircleCheck-BVQ8E_cV.js";import"./OverlayArrow-DpRQz6k4.js";import"./useControlledState-DTavY4xM.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,dr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
