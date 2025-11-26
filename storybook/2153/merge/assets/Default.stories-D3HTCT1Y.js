import{j as r}from"./iframe-Bdha8Dos.js";import{I as a}from"./Image-DP0ZI2sD.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-2m33Ddtx.js";import{A as s}from"./Avatar-DCpppZC2.js";import{B as p}from"./Button-C0-Fr6HH.js";import"./index-nuYtCEEu.js";import"./flowComponent-B8Uju4HR.js";import"./index-D82oAODb.js";import"./clsx-B-dksMZM.js";import"./index-Dy-GF6N8.js";import"./Text-DoSb3lbH.js";import"./browser-Dc0PT9zF.js";import"./utils-DRkQtTgN.js";import"./EmulatedBoldText-CrNw8-Fv.js";import"./AlertIcon-D8P-W6sm.js";import"./IconWarning-BYkVHlH3.js";import"./useLocalizedStringFormatter-Bnw0-aa9.js";import"./context-3OjubdPM.js";import"./LoadingSpinner-KHyfkLfb.js";import"./Button-BzZ_Ef_b.js";import"./ProgressBar-DPQU74BD.js";import"./Hidden-CgXpbbtr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CBKtE_2O.js";import"./useFocusable-CPRTwPrN.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,W={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const K=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,K as __namedExportsOrder,W as default};
