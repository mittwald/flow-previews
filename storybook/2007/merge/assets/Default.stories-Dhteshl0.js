import{j as r}from"./iframe-DkzCwCX4.js";import{B as e}from"./Button-BnlekXC3.js";import{d as C,c as y,e as w}from"./IconWarning-DW3eva0Y.js";import{T as O}from"./Text-nAHNspGp.js";import{A as E}from"./Avatar-BeNdTXm1.js";import{T as G,a as R}from"./Tooltip-BA0T6AIN.js";import{d as k}from"./dummyText-CX_I_Wpl.js";import{I as K}from"./Image-B9cW3fk7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./LoadingSpinner-CQddXTjo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./context-R4HBJhIj.js";import"./Button-BmtE6ca-.js";import"./utils-CLIXtwVU.js";import"./ProgressBar-BPpVJdpP.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BJPqeoy6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo4yNuZG.js";import"./useFocus-ib9l0UKV.js";import"./useFocusRing-D8oCWed-.js";import"./useFocusable-DGleC9_O.js";import"./browser-Dj2wjmgz.js";import"./EmulatedBoldText-DFUvlzyn.js";import"./Text-lQk_ytCv.js";import"./AlertIcon-rUJetufd.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./useControlledState-BOJEDAaV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,jr={title:"Actions/Button",component:e,args:{onPress:L("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(C,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(O,{children:"Add email address"}),r.jsx(y,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(O,{children:"Add email address"}),r.jsx(y,{})]}),args:{size:"s"}},c={render:o=>r.jsxs(G,{children:[r.jsxs(e,{...o,children:[r.jsx(E,{size:"l",children:r.jsx(K,{alt:"Gopher",src:k.imageSrc})}),r.jsx(w,{})]}),r.jsx(R,{children:"Profilbild ändern"})]})};var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(W=p.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var D,P,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Sr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,c as WithAvatar,a as WithIcon,i as WithTextAndIcon,Sr as __namedExportsOrder,jr as default};
