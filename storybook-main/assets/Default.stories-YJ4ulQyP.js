import{j as r}from"./iframe-xv1hkYrp.js";import{I as t}from"./Image-Iixx_SHS.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-DcPxQpPq.js";import{A as s}from"./Avatar-v7uC_S22.js";import{B as p}from"./Button-CxiqmFwG.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./clsx-B-dksMZM.js";import"./AlertIcon-Bvqbsxj6.js";import"./IconWarning-0FGrLhxS.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./context-D4r7bTNU.js";import"./Text-DbY3Cuep.js";import"./browser-lwEiR5fW.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./Text-B_3Y_Nze.js";import"./utils-CpTHh5rs.js";import"./LoadingSpinner-DFWWTIAT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BusXuZI0.js";import"./ProgressBar-DjfrTOAa.js";import"./Label-mG8fBsu4.js";import"./Hidden-BDDDKiVs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BR4zi6f8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-o1s-vRpH.js";import"./useFocus-CfLpRQBT.js";import"./useFocusRing-CU0aNGGs.js";import"./useFocusable-CwWDG3DW.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,h,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
