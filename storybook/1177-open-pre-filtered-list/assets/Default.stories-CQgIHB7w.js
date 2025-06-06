import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-BZISi7jw.js";import{I as t}from"./Image-wdoktDzF.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{c as B}from"./clsx-B-dksMZM.js";import{P as N,W}from"./flowComponent-Cjf8M1qv.js";import{B as p}from"./Button-CFQpmMRz.js";import{A as r}from"./Avatar-CW7fvjlR.js";import{a as i}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./IconApp-6KkRxCXW.js";import"./IconWarning-CBLFzXEL.js";import"./LoadingSpinner-B6hxwIay.js";import"./Text-ycSbjUMH.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";import"./Text-PTaPc_Ci.js";import"./utils-CzVyYWZn.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./react-children-utilities-fm2cgFnI.js";import"./v4-CtRu48qb.js";const b="flow--avatar-stack",_="flow--avatar-stack--avatar",n={avatarStack:b,avatar:_,"size-m":"flow--avatar-stack--size-m","size-xs":"flow--avatar-stack--size-xs","size-s":"flow--avatar-stack--size-s","size-l":"flow--avatar-stack--size-l"},o=e=>{const{className:P,children:u,totalCount:y=0,size:d="m",onCountPress:v}=e,G=w.Children.count(u),h=y-G,T=B(n.avatarStack,n[`size-${d}`],P),I={Avatar:{className:n.avatar,size:d},Button:{className:n.avatar}};return a.jsx(N,{props:I,mergeInParentContext:!0,children:a.jsxs("div",{className:T,children:[u,h>0&&a.jsx(W,{if:v,children:a.jsx(p,{onPress:v,children:a.jsxs(r,{size:d,children:["+",h]})})})]})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"AvatarStack",props:{totalCount:{required:!1,tsType:{name:"number"},description:`The total count of items, as avatars should only be displayed for the first
view`},onCountPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The onPress action of the additional items count element"},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:'The size of the avatars inside the stack. @default "m"'}},composes:["PropsWithClassName","PropsWithChildren"]};const za={title:"Content/AvatarStack",component:o,args:{totalCount:20},render:e=>a.jsxs(o,{...e,children:[a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})]})},c={},m={render:e=>a.jsxs(o,{...e,onCountPress:i("count clicked"),children:[a.jsx(p,{onPress:i("avatar clicked"),children:a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})," ",a.jsx(p,{onPress:i("avatar clicked"),children:a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})," ",a.jsx(p,{onPress:i("avatar clicked"),children:a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})]})},l={args:{totalCount:void 0},render:e=>a.jsxs(o,{...e,children:[a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})]})};var x,z,g;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(z=c.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};var f,j,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,A,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const ga=["Default","ClickableAvatars","WithoutTotalCount"];export{m as ClickableAvatars,c as Default,l as WithoutTotalCount,ga as __namedExportsOrder,za as default};
