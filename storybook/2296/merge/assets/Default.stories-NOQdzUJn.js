import{j as r}from"./iframe-CcNHCKoB.js";import{I as t}from"./Image-BtKKNgUs.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-CW38Bz8y.js";import{A as s}from"./Avatar-CWNhDZd8.js";import{B as p}from"./Button-DTuLbClr.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./clsx-B-dksMZM.js";import"./index-C0Ga1GvX.js";import"./Text-BmtlE-88.js";import"./browser-C0P1LItQ.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./utils-NnqZ9ZBK.js";import"./AlertIcon-DM6j3Z28.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useFocusable-Dm2HHW3t.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
