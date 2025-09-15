import{j as r}from"./iframe-Bok6IQju.js";import{I as t}from"./Image-CQ7kPsFe.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-DY-lB_F0.js";import{A as s}from"./Avatar-BOtLrbec.js";import{B as p}from"./Button-I2NsynHm.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./clsx-B-dksMZM.js";import"./index-DYD8zkLA.js";import"./Text-BAsYg4gL.js";import"./browser-g58G47PZ.js";import"./EmulatedBoldText-DA_lKfqn.js";import"./Text-DU8LVe1i.js";import"./utils-Cq7OaFeW.js";import"./AlertIcon-B9bXLpXV.js";import"./IconWarning-DqBq2uRB.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./context-BMAErJH4.js";import"./LoadingSpinner-CodmSJuG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CmhZDz7g.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CF3vMWYC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGEniIzO.js";import"./useFocus-DQozoN0B.js";import"./useFocusRing-Crdxdr5c.js";import"./useFocusable-BDCwijNy.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,h,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <AvatarStack {...props} onCountPress={action("count clicked")}>
      <Button onPress={action("avatar clicked")}>
        <Avatar size={props.size}>
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
      </Button>{" "}
      <Button onPress={action("avatar clicked")}>
        <Avatar size={props.size}>
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
      </Button>{" "}
      <Button onPress={action("avatar clicked")}>
        <Avatar size={props.size}>
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
      </Button>
    </AvatarStack>
}`,...(z=(h=c.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var g,v,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    totalCount: undefined
  },
  render: props => <AvatarStack {...props}>
      <Avatar size={props.size}>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </Avatar>
      <Avatar size={props.size}>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </Avatar>
      <Avatar size={props.size}>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </Avatar>
    </AvatarStack>
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const $=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,$ as __namedExportsOrder,Z as default};
