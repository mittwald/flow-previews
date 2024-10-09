import{R as e}from"./index-Cs7sjTYM.js";import"./IconApp-BvR14QOm.js";import{r as T,s as w,p as D,t as P,u as W}from"./IconWarning-DvIm1kNF.js";import{L as c}from"./Link-CANUX3pR.js";import{P as A}from"./PropsContextProvider-CE2pl7GD.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as G}from"./clsx-B-dksMZM.js";import{E as q}from"./EmulatedBoldText-Dmze-Iwg.js";import{B as r}from"./Button-CP_UNic0.js";import{T as p}from"./Text-U6fXasfV.js";import{I as R}from"./Image-B6ZYweac.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-LSXAfkIo.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-DW1ODr-o.js";import{a as J,s as K}from"./storyBackgrounds-GFSAi-dI.js";import{a as Q,M as U}from"./ModalTrigger-Bu0ltr8k.js";import{H as V}from"./Heading-TK7j1OMP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DojWstBP.js";import"./index-DKTAOSvX.js";import"./index-Cf-03bMR.js";import"./utils-BwYH5X3X.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-1fQJjpyE.js";import"./useFocusRing-if03xCoO.js";import"./useFocusable-VJrkZIcY.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-CmBEOOxV.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./Button-BebB4Pfr.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./useLabel-RWB8_cdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Text-Dd84vsje.js";import"./react-children-utilities-CdZndyK3.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-BG2gHMpH.js";import"./OverlayTrigger-Bdr7_DCO.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DTpAwzOr.js";import"./useControlledState-B7K2eYzO.js";import"./PressResponder-CCvTmYWN.js";import"./FocusScope--STy3lDT.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BWHYRTKp.js";import"./context-D-nUHgHo.js";import"./useSelector-DDdDwEvg.js";import"./Action-BPHLOjQX.js";import"./deepFindOfType-BylCc5Xi.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Header-BtBTxt0E.js";import"./Separator-B16cHhLc.js";import"./useMenuTrigger-NmqfniOV.js";import"./SelectionManager-DZzKvQeJ.js";import"./useEvent-DPeShqXn.js";import"./useCollator-lO_wuqqx.js";import"./useDescription-BalOtq5q.js";import"./Header-DgsWIsDp.js";import"./Heading-eVsuDLmW.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},l=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=G(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(q,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};l.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const ct={title:"Navigation/HeaderNavigation",component:l,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},n={render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},m={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,I,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(I=m.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const pt=["Default","WithContextMenu","Dark","Light"];export{i as Dark,o as Default,m as Light,n as WithContextMenu,pt as __namedExportsOrder,ct as default};
