import{j as r}from"./iframe-DwsGXJVG.js";import{I as t}from"./Image-C81S4_hw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-s0xwjGhY.js";import{A as s}from"./Avatar-BkYwlH5l.js";import{B as p}from"./Button-CqL_vLUu.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./clsx-B-dksMZM.js";import"./index-Z94wDe_B.js";import"./Text-BV6qM8pO.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./Text-_i5SHi6c.js";import"./utils-DRn9wprx.js";import"./AlertIcon-BhWII3Mz.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CckbZpi5.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useFocusable-s83SGTZ-.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
