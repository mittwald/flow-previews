import{R as e}from"./index-Cs7sjTYM.js";import"./IconApp-BOae6dD3.js";import{r as T,s as w,p as D,t as P,u as W}from"./IconWarning-P6NmkjLC.js";import{L as c}from"./Link-DUOM6bRs.js";import{P as A}from"./PropsContextProvider-BmJWDS_p.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as G}from"./clsx-B-dksMZM.js";import{E as q}from"./EmulatedBoldText-Dmze-Iwg.js";import{B as r}from"./Button-BLJCmALH.js";import{T as p}from"./Text-DYnmzK5R.js";import{I as R}from"./Image-CtsrawL9.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-BZDC49am.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-DQfMqo3Q.js";import{a as J,s as K}from"./storyBackgrounds-GFSAi-dI.js";import{a as Q,M as U}from"./ModalTrigger-BnRSVFrW.js";import{H as V}from"./Heading-yzkHp1-f.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-D7ioKQ_2.js";import"./index-C8LjR2Bd.js";import"./index-Cf-03bMR.js";import"./utils-BBsc42SX.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Do5SRlXR.js";import"./useFocusRing-CRCkdtud.js";import"./useFocusable-D6sODRzj.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-ZeZA4Lmj.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-BknGA9dM.js";import"./Hidden-DMUPAT4b.js";import"./Text-C0gOxGaJ.js";import"./react-children-utilities-CdZndyK3.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-XlMnyj-9.js";import"./OverlayTrigger-BvOr0J9V.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-B8rEgeMV.js";import"./number-nHrFdSb-.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-CGKzeA_Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-D4oQIDY4.js";import"./context-Dd6hPQBJ.js";import"./useSelector-0qDIPR45.js";import"./Action-s1n0zgTl.js";import"./deepFindOfType-BylCc5Xi.js";import"./Collection-BSVICx61.js";import"./CollectionBuilder-C1pJ_vaJ.js";import"./Header-BikxQE8J.js";import"./Separator-C6jiSXXg.js";import"./useMenuTrigger-BPSWHnth.js";import"./SelectionManager-D54GM_Uc.js";import"./useEvent-Be9f7BQw.js";import"./useCollator-BmGy_8lF.js";import"./Header-DoGnGVE5.js";import"./Heading-D2dIVyzg.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=G(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(q,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const nt={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},n={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const it=["Default","WithContextMenu","Dark","Light"];export{i as Dark,o as Default,l as Light,n as WithContextMenu,it as __namedExportsOrder,nt as default};
