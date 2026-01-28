import{j as r}from"./iframe-BrcQhcwR.js";import{I as t}from"./Image-CgmIoTa5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-BAVcpEGj.js";import{A as s}from"./Avatar-CCEN8Yyi.js";import{B as p}from"./Button-DdI6TSg5.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./clsx-B-dksMZM.js";import"./index-CSUT2NCR.js";import"./Text-PyhJCmvh.js";import"./browser-BdJDgoMU.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./utils-DM5Jp8EX.js";import"./AlertIcon-CzBRtVHG.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./context-DOSLHoOx.js";import"./LoadingSpinner-C-WbSXYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CztCXt43.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBaWFJWg.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
