import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-CnylmBwY.js";import"./index-BZISi7jw.js";import"./IconApp-W8-S6AAB.js";import{a as C,b as w,c as G}from"./IconWarning-BUA863Ku.js";import{a as _}from"./index-B-lxVbXh.js";import{T as E}from"./Text-CiS2CEB-.js";import{A as k}from"./Avatar-CGOvanLK.js";import{T as O,a as R}from"./Tooltip-Df0CJPpZ.js";import{d as q}from"./dummyText-CX_I_Wpl.js";import{I as F}from"./Image-C7SQT7VW.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Cpk2RUSc.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./Button-DlOLKXkK.js";import"./utils-B8p6n-_S.js";import"./ProgressBar-CMGFgh_N.js";import"./Label-CRtDyyLG.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DjubqfyV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_abas1X.js";import"./useFocus-0lzzAyJ_.js";import"./useFocusRing-C08ZnYSv.js";import"./useFocusable-dJayk3b7.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-CUmgXOYU.js";import"./react-children-utilities-fm2cgFnI.js";import"./OverlayArrow-BxXqfwgF.js";import"./useControlledState-4nfZ-XMX.js";const Wr={title:"Actions/Button",component:e,args:{onPress:_("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(E,{children:"Add email address"}),r.jsx(w,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(E,{children:"Add email address"}),r.jsx(w,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(O,{children:[r.jsxs(e,{...o,children:[r.jsx(k,{size:"l",children:r.jsx(F,{alt:"Gopher",src:q.imageSrc})}),r.jsx(G,{})]}),r.jsx(R,{children:"Profilbild ändern"})]})};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
