import{j as r}from"./iframe-DewKgIpk.js";import{I as t}from"./Image-4EK57wLA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-Dmg5jmEw.js";import{A as s}from"./Avatar-CeozoAQa.js";import{B as p}from"./Button-DK1DwTQu.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./clsx-B-dksMZM.js";import"./index-BPUeLBAn.js";import"./Text-CAhyjFWz.js";import"./browser-D8jMTJt0.js";import"./EmulatedBoldText-DxGIr34d.js";import"./Text-CIY7d5XG.js";import"./utils-CUPQPHYu.js";import"./AlertIcon-Dv2SXDVH.js";import"./IconWarning-CrJxptLM.js";import"./remote-B1GLKgHd.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./context-DymIffM8.js";import"./LoadingSpinner-CskkGazD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-S1YnS57K.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./useFocusable-DVz_n5zl.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const F=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,F as __namedExportsOrder,w as default};
