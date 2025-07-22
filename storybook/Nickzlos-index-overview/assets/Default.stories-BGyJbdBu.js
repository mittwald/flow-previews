import{j as r}from"./iframe-B5D6Jy2e.js";import{I as t}from"./Image-BYMu80nG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-BsLSHLpO.js";import{A as s}from"./Avatar-DftXGquE.js";import{B as p}from"./Button-D_cucc2Q.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./clsx-B-dksMZM.js";import"./AlertIcon-DAevOzoo.js";import"./IconWarning-DjYRPplk.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./context-Bj-w4NoV.js";import"./Text-Fuh2Ogih.js";import"./browser-C-lA9C9Q.js";import"./EmulatedBoldText-bgj99tWG.js";import"./Text-Bv7a287p.js";import"./utils-Bs8Wqn-q.js";import"./LoadingSpinner-Bd5Mqs7Q.js";import"./Button-BIn7btPV.js";import"./ProgressBar-B93iLJrK.js";import"./Label-36rBC0g7.js";import"./Hidden-C8fkQIAB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DkjeIhDx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CBvAjfyN.js";import"./useFocus-CkjZAdJ6.js";import"./useFocusRing-SK3yyEZg.js";import"./useFocusable-D_QF0Scb.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,h,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
