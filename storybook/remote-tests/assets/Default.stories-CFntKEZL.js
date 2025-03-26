import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-y_xQsClG.js";import"./index-BKyFwriW.js";import"./IconApp-DtTJ2r0A.js";import{b as C,c as w,d as G}from"./IconWarning-BwSZGWRf.js";import{a as _}from"./index-B-lxVbXh.js";import{T as E}from"./Text-BoP-iRG5.js";import{A as k}from"./Avatar-9p84LjLC.js";import{T as O,a as R}from"./Tooltip-BaW2xUJT.js";import{d as q}from"./dummyText-CX_I_Wpl.js";import{I as F}from"./Image-BHuclVyO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DbRP1bJP.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./Button-DL5r24IA.js";import"./utils-DDUQIigj.js";import"./ProgressBar-C4A5wsjg.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DAPKuvGY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./useFocus-DNP1_3BC.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocusable-DFPniEHk.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./Text-yNWxiVQR.js";import"./react-children-utilities-BxrMh-22.js";import"./OverlayArrow-BL-OvAHI.js";import"./useControlledState-Cu5tmcxR.js";const Wr={title:"Actions/Button",component:e,args:{onPress:_("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(E,{children:"Add email address"}),r.jsx(w,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(E,{children:"Add email address"}),r.jsx(w,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(O,{children:[r.jsxs(e,{...o,children:[r.jsx(k,{size:"l",children:r.jsx(F,{alt:"Gopher",src:q.imageSrc})}),r.jsx(G,{})]}),r.jsx(R,{children:"Profilbild ändern"})]})};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,T,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>
}`,...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var A,j,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>,
  args: {
    size: "s"
  }
}`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,v,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>
}`,...(B=(v=i.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var b,z,W;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>,
  args: {
    size: "s"
  }
}`,...(W=(z=p.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var P,D,y;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...(y=(D=m.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const Pr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,m as WithAvatar,a as WithIcon,i as WithTextAndIcon,Pr as __namedExportsOrder,Wr as default};
