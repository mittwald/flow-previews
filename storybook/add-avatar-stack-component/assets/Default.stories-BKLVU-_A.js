import{r as w,R as e}from"./index-B-o1Wr-g.js";import{I as r}from"./Image-DabeQpm5.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{c as B}from"./clsx-B-dksMZM.js";import{P as N}from"./flowComponent-Bi8R7MU8.js";import{B as p}from"./Button-DxJ53Gh-.js";import{A as a}from"./Avatar-ZUKAtG7G.js";import{W}from"./Wrap-DQq6jo70.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./IconApp-B0VM5pA-.js";import"./IconWarning-CeoFRZGA.js";import"./Text-Cxo14Dks.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-R-rrVGxo.js";import"./utils-7gTBvjqH.js";import"./LoadingSpinner-BIc094zz.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-CPCoFgob.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./react-children-utilities-xgYgah_I.js";import"./v4-CQkTLCs1.js";const b="flow--avatar-stack",q="flow--avatar-stack--avatar",i={avatarStack:b,avatar:q,"size-m":"flow--avatar-stack--size-m","size-xs":"flow--avatar-stack--size-xs","size-s":"flow--avatar-stack--size-s","size-l":"flow--avatar-stack--size-l"},o=t=>{const{className:P,children:d,totalCount:T=0,size:u="m",onCountPress:v}=t,y=w.Children.count(d),z=T-y,G=B(i.avatarStack,i[`size-${u}`],P),I={Avatar:{className:i.avatar,size:u},Button:{className:i.avatar}};return e.createElement(N,{props:I,mergeInParentContext:!0},e.createElement("div",{className:G},d,z>0&&e.createElement(W,{if:v},e.createElement(p,{onPress:v},e.createElement(a,{size:u},"+",z)))))};o.__docgenInfo={description:"",methods:[],displayName:"AvatarStack",props:{className:{required:!1,tsType:{name:"string"},description:"The elements class name."},totalCount:{required:!1,tsType:{name:"number"},description:`The total count of items, as avatars should only be displayed for the first
view`},onCountPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The onPress action of the additional items count element"},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:'The size of the avatars inside the stack. @default "m"'}},composes:["PropsWithChildren"]};const ge={title:"Content/AvatarStack",component:o,args:{totalCount:20},render:t=>e.createElement(o,{...t},e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})),e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})),e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})))},c={},m={render:t=>e.createElement(o,{...t,onCountPress:n("count clicked")},e.createElement(p,{onPress:n("avatar clicked")},e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})))," ",e.createElement(p,{onPress:n("avatar clicked")},e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})))," ",e.createElement(p,{onPress:n("avatar clicked")},e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc}))))},l={args:{totalCount:void 0},render:t=>e.createElement(o,{...t},e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})),e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})),e.createElement(a,{size:t.size},e.createElement(r,{alt:"Gopher",src:s.imageSrc})))};var g,f,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var E,S,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(S=m.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var A,C,x;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const fe=["Default","ClickableAvatars","WithoutTotalCount"];export{m as ClickableAvatars,c as Default,l as WithoutTotalCount,fe as __namedExportsOrder,ge as default};
