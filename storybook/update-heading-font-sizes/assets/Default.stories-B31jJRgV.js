import{R as e}from"./index-Cs7sjTYM.js";import"./IconApp-C8WE169t.js";import{r as T,s as w,p as D,t as P,u as W}from"./IconWarning-N6qlzk8A.js";import{L as c}from"./Link-7vHvCDau.js";import{P as A}from"./PropsContextProvider-BmJWDS_p.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as G}from"./clsx-B-dksMZM.js";import{E as q}from"./EmulatedBoldText-Dmze-Iwg.js";import{B as r}from"./Button-D9bhsRGO.js";import{T as p}from"./Text-OA-i8KWP.js";import{I as R}from"./Image-DmDA31eF.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-DR1dZbxI.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-CuSp3rWF.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-DGzznofp.js";import{H as V}from"./Heading-yDKHFW2e.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CvwRENnB.js";import"./index-C8LjR2Bd.js";import"./index-BU4L-DQy.js";import"./utils-CgpzwoFP.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C9_maMb0.js";import"./useFocusable-DdFCD-YN.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DZbbkHo4.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-B_pBO4HW.js";import"./Hidden-BsXGu--s.js";import"./Text-BgIWd_-0.js";import"./react-children-utilities-CdZndyK3.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-DiQdNu3C.js";import"./OverlayTrigger-DD33fYz0.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-B9aGSeR2.js";import"./number-nHrFdSb-.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-jwB0dEBj.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-CXlEaGVI.js";import"./useSelector-CJePwlsu.js";import"./Action-DLPAjbQp.js";import"./deepFindOfType-BylCc5Xi.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Header-8TqMsGve.js";import"./Separator-BGQky6UT.js";import"./useMenuTrigger-BOwmIx5X.js";import"./SelectionManager-DV2VTso8.js";import"./useEvent-Be9f7BQw.js";import"./useCollator-BmGy_8lF.js";import"./Header-DnS09Zjd.js";import"./Heading-2-efPYe9.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=G(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(q,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const ot={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},n={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(v=(E=n.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var k,x,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,I,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const nt=["Default","WithContextMenu","Dark","Light"];export{i as Dark,o as Default,l as Light,n as WithContextMenu,nt as __namedExportsOrder,ot as default};
