import{j as r}from"./iframe-BjkHoCV_.js";import{B as e}from"./Button-DVqiRGCO.js";import{e as C,d as y,T as w}from"./IconWarning-CwiGKHoc.js";import{T as O}from"./Text-eTJAYSJY.js";import{A as E}from"./Avatar-G5SbidE1.js";import{T as G,a as R}from"./Tooltip-wJTb81EN.js";import{d as k}from"./dummyText-CX_I_Wpl.js";import{I as K}from"./Image-DlPRYjSj.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./LoadingSpinner-DEvuHU_p.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./context-rlbqmEoV.js";import"./Button-Di6PObN5.js";import"./utils-CGiEt-XO.js";import"./ProgressBar-B7PSoMX-.js";import"./Label-B_ZT4LJD.js";import"./Hidden-CDdp3qbI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-1QSzRNK-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEdNq8mA.js";import"./useFocus-xSbgpmNE.js";import"./useFocusRing-Wt9DLJeW.js";import"./useFocusable-CXhBXWqP.js";import"./browser-D-wpRimX.js";import"./EmulatedBoldText-Bcu9u8Hb.js";import"./Text-C4ERGDAc.js";import"./AlertIcon-B7gxaODE.js";import"./OverlayArrow-BOh6Y0Vd.js";import"./useControlledState-DGwCCxzP.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,jr={title:"Actions/Button",component:e,args:{onPress:L("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(O,{children:"Add email address"}),r.jsx(y,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(O,{children:"Add email address"}),r.jsx(y,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(G,{children:[r.jsxs(e,{...o,children:[r.jsx(E,{size:"l",children:r.jsx(K,{alt:"Gopher",src:k.imageSrc})}),r.jsx(w,{})]}),r.jsx(R,{children:"Profilbild ändern"})]})};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,T,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>
}`,...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,f,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>,
  args: {
    size: "s"
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,v,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>
}`,...(B=(v=i.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var z,W,b;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>,
  args: {
    size: "s"
  }
}`,...(b=(W=p.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var D,P,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Sr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,m as WithAvatar,a as WithIcon,i as WithTextAndIcon,Sr as __namedExportsOrder,jr as default};
