import{j as r}from"./iframe-MIRc1tgM.js";import{I as t}from"./Image-DkLsW5Ae.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-CuUydrEW.js";import{A as s}from"./Avatar-BCH7wScK.js";import{B as p}from"./Button-JGTIxpZE.js";import"./index-Cun1SEai.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./clsx-B-dksMZM.js";import"./index-Bluht812.js";import"./Text-DB0aA-4n.js";import"./browser-D2aBH95U.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./Text-CqfOq6kd.js";import"./utils-Wg8-dAbi.js";import"./AlertIcon-B3E5_sC_.js";import"./IconWarning-0xUxCYxJ.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./context-7dZHwnb1.js";import"./LoadingSpinner-DiZJo45g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bb1_Qr-8.js";import"./ProgressBar-DSHI0B5V.js";import"./Label-BZ6fLiSQ.js";import"./Hidden-CQtTG736.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BYf9ahG7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BoYI9IsN.js";import"./useFocus-D5-sLX53.js";import"./useFocusRing-BXtZEpMW.js";import"./useFocusable-42wCCaNx.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,$={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,h,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const rr=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,rr as __namedExportsOrder,$ as default};
