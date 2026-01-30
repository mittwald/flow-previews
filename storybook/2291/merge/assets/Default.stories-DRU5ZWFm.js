import{j as r}from"./iframe-1hZ9wzBW.js";import{I as t}from"./Image-DXQuT_X6.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-Bz5wrofG.js";import{A as s}from"./Avatar-B41KUjsA.js";import{B as p}from"./Button-7Po4DI29.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./clsx-B-dksMZM.js";import"./index-dx0Fbu95.js";import"./Text-BF_GklVB.js";import"./browser-jjcexMIs.js";import"./EmulatedBoldText-D3kC_v2V.js";import"./Text-B1mgaTQV.js";import"./utils-CnJx27u5.js";import"./AlertIcon-fApV2-nR.js";import"./IconWarning-Bq_05zLs.js";import"./remote-CnwnRZPi.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./context-Dx8Lg4Ma.js";import"./LoadingSpinner-CBIfE8tz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XLqKqFxh.js";import"./ProgressBar-fkOF9esE.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CrikywT0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNGT1V3C.js";import"./useFocus-iMNco4FL.js";import"./useFocusRing-DJmPDLK7.js";import"./useFocusable-CvXOfqVX.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
