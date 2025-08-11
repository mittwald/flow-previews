import{j as r}from"./iframe-D2buA_qM.js";import{I as t}from"./Image-BLgokCF3.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-YiQ9IZWQ.js";import{A as s}from"./Avatar-CJ-cBAPn.js";import{B as p}from"./Button-zVUpRv9Z.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./clsx-B-dksMZM.js";import"./AlertIcon-C-FImwfY.js";import"./IconWarning-IOoTZAJG.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./context-DqOuYBdO.js";import"./Text-yAGEZlE0.js";import"./browser-CXT6LfEZ.js";import"./EmulatedBoldText-rwysn7dV.js";import"./Text-BCY1tMCR.js";import"./utils-C_LZ7m3D.js";import"./LoadingSpinner-ja7u21Ua.js";import"./Button-U5ni6oS0.js";import"./ProgressBar-zFnSV5yo.js";import"./Label-N33FpYFY.js";import"./Hidden-avqQs3vJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CoFh3sW6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIlt6lCU.js";import"./useFocus-1B3Rl8Uo.js";import"./useFocusRing-k1804b6h.js";import"./useFocusable-B02zeCY6.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,h,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
