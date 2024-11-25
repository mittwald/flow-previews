import{B as o}from"./Button-N_hBXId1.js";import{R as r}from"./index-Cs7sjTYM.js";import"./IconApp-CHbYnbLr.js";import{I as C,a as w,b as R}from"./IconWarning-DXJUFqJH.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{T as G}from"./Text-CcFqEq5L.js";import{A as k}from"./Avatar-BDkTJkOx.js";import{T as O,a as j}from"./Tooltip-Cr5XU5-1.js";import{d as q}from"./dummyText-CX_I_Wpl.js";import{I as F}from"./Image-9dj8FG25.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./Wrap-DQq6jo70.js";import"./flowComponent-BPUkT_mI.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./LoadingSpinner-VvlSDj-i.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-qrG_K1uY.js";import"./utils-BFFU14Eb.js";import"./ProgressBar-DKheN8nI.js";import"./Label-6hm79Lf2.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-Dv7TsfPg.js";import"./useFocusRing-CqFdZJbR.js";import"./usePress-Dcn7RY69.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-CpSy2HXY.js";import"./react-children-utilities-CdZndyK3.js";import"./OverlayArrow-DfSRANAL.js";import"./useControlledState-B7K2eYzO.js";const Br={title:"Actions/Button",component:o,args:{onPress:_("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:e=>r.createElement(o,{...e},"Continue/Action")},t={},a={args:{size:"s"}},n={render:e=>r.createElement(o,{...e,"aria-label":"Add to favorites"},r.createElement(C,null))},s={render:e=>r.createElement(o,{...e,"aria-label":"Add to favorites"},r.createElement(C,null)),args:{size:"s"}},i={render:e=>r.createElement(o,{...e},r.createElement(G,null,"Add email address"),r.createElement(w,null))},m={render:e=>r.createElement(o,{...e},r.createElement(G,null,"Add email address"),r.createElement(w,null)),args:{size:"s"}},l={render:e=>r.createElement(O,null,r.createElement(o,{...e},r.createElement(k,{size:"l"},r.createElement(F,{alt:"Gopher",src:q.imageSrc})),r.createElement(R,null)),r.createElement(j,null,"Profilbild ändern"))};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var f,A,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>
}`,...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,h,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>,
  args: {
    size: "s"
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var v,x,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var b,z,W;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>,
  args: {
    size: "s"
  }
}`,...(W=(z=m.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var P,D,y;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const br=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{t as Default,a as Small,s as SmallWithIcon,m as SmallWithTextAndIcon,l as WithAvatar,n as WithIcon,i as WithTextAndIcon,br as __namedExportsOrder,Br as default};
