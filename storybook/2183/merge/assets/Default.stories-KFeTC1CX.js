import{j as r}from"./iframe-8dFSbqJz.js";import{B as e}from"./Button-Bp8IuIoY.js";import{a as c}from"./IconChevronDown-BoB9X9Lx.js";import{I as u}from"./IconCamera-DRaxGmIv.js";import{I as d}from"./IconPlus-6uyMzDq2.js";import{T as l}from"./Text-Bc5PmX1I.js";import{A as x}from"./Avatar-BYNJUQbD.js";import{T as g,a as h}from"./Tooltip-B_tRSJH2.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I}from"./Image-CDwR9hgk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./IconX-Dl75Mnu2.js";import"./IconCheck-ClCsyRZ4.js";import"./LoadingSpinner-qRqEZFCl.js";import"./ariaLive-DqXsnKMw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./remote-D1_oWH-e.js";import"./Button-BKsEcO3C.js";import"./utils-CatxVoKl.js";import"./ProgressBar-D99M34jy.js";import"./Label-BbJ0t0io.js";import"./Hidden-YN9d6EVo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKOrsKHI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOmL6f1-.js";import"./useFocus-BOo9d3Bd.js";import"./useFocusRing-D1LOVY8w.js";import"./useFocusable-Bm2s2zNQ.js";import"./browser-TJej2Zh2.js";import"./EmulatedBoldText-C5iTwKQF.js";import"./Text-BVGarVrb.js";import"./AlertIcon-D6jSKrgT.js";import"./IconDanger-D2WM-UH7.js";import"./IconInfo-DGcA2CWR.js";import"./IconCircleCheck-CcXE8MCq.js";import"./OverlayArrow-CuoDJSSc.js";import"./useControlledState-DYZXiDwW.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Actions/Button",component:e,args:{onPress:f("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(d,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(c,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(I,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
