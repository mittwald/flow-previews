import{j as r}from"./iframe-CVnOevS7.js";import{I as a}from"./Image-B5CmC758.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-C8hks35D.js";import{A as s}from"./Avatar-D3cwiEC5.js";import{B as p}from"./Button-Cf7B0HY9.js";import"./index-nuYtCEEu.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./clsx-B-dksMZM.js";import"./index-Cr689PiB.js";import"./Text-Bxez-FPO.js";import"./browser-DLVk8Qjw.js";import"./utils-CGDhhS2B.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./AlertIcon-DHgwBo_e.js";import"./IconWarning-B_svJUl9.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./context-B1NGcly_.js";import"./LoadingSpinner-CSIBpLRI.js";import"./Button-DX-sXAbn.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,W={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
