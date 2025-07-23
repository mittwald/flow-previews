import{j as r}from"./iframe-Dg6UnhUn.js";import{B as e}from"./Button-B-eL7j03.js";import{e as C,d as y,T as w}from"./IconWarning-CALSlVTn.js";import{T as O}from"./Text-Da0TnBkn.js";import{A as E}from"./Avatar-B0xWfO-d.js";import{T as G,a as R}from"./Tooltip-srEQxl7E.js";import{d as k}from"./dummyText-CX_I_Wpl.js";import{I as K}from"./Image-BgylQfZm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmLe5W9r.js";import"./mergeRefs-C_sTBRSK.js";import"./index-Bnuwx5Sl.js";import"./LoadingSpinner-BkZqXqCL.js";import"./useLocalizedStringFormatter-CYRoP_gw.js";import"./context-Ddln_640.js";import"./Button-D1qjIKes.js";import"./utils-CHKT5qD6.js";import"./ProgressBar-B038sK4e.js";import"./Label-CLbvuqlx.js";import"./Hidden-D5q0FBhK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CSavvckB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRsXmFdU.js";import"./useFocus-DIqzHvRL.js";import"./useFocusRing-CS-ydpKu.js";import"./useFocusable-ByYZ8WRR.js";import"./browser-BdsZB4yy.js";import"./EmulatedBoldText-BNa7EikO.js";import"./Text-5OPT84ek.js";import"./AlertIcon-CxD-sr_M.js";import"./OverlayArrow-CkPauhq3.js";import"./useControlledState-BEdG5TcY.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,jr={title:"Actions/Button",component:e,args:{onPress:L("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(O,{children:"Add email address"}),r.jsx(y,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(O,{children:"Add email address"}),r.jsx(y,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(G,{children:[r.jsxs(e,{...o,children:[r.jsx(E,{size:"l",children:r.jsx(K,{alt:"Gopher",src:k.imageSrc})}),r.jsx(w,{})]}),r.jsx(R,{children:"Profilbild ändern"})]})};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
