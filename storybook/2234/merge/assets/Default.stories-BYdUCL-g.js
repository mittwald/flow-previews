import{j as r}from"./iframe-DZ4teeW0.js";import{I as t}from"./Image-CfehdNX_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-DaR1JF2i.js";import{A as s}from"./Avatar-Bonfp6V7.js";import{B as p}from"./Button-DKoFnNBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./clsx-B-dksMZM.js";import"./index-hJtfnrYv.js";import"./Text-C4YBtGrU.js";import"./browser-BOIGtlkn.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./utils-CmR_RyV0.js";import"./AlertIcon-Dng1V2P2.js";import"./IconWarning-BMXzPSbA.js";import"./remote-C7mA51oY.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./context-CZC3VL3b.js";import"./LoadingSpinner-DJRFuNH9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNevv18m.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CN_YQU3T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DM-2A3ZD.js";import"./useFocus-DPzONbd_.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocusable-V-w09cqm.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
