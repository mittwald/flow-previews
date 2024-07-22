import{R as e}from"./index-Cs7sjTYM.js";import"./IconApp-CyHi4WPz.js";import{o as T,p as w,n as D,q as P,r as W}from"./IconWarning-DZJaqlYL.js";import{L as c}from"./Link-BykJVV6o.js";import{P as A}from"./PropsContextProvider-C-7PaZ52.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-Dmze-Iwg.js";import{B as r}from"./Button-m5USM9JU.js";import{T as p}from"./Text-BM3moMBE.js";import{I as R}from"./Image-j0yVVO1B.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-wvKlBf4A.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-D7sChA0H.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-9qsEjMVo.js";import{H as V}from"./Heading-B14qmMr9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BttIposY.js";import"./index-Dy0c0dcE.js";import"./index-BMdlDBjA.js";import"./utils-Cy-A-nlV.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CTrgc7uI.js";import"./useFocusable-OFlS-6qe.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-T2v-ofXf.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./Button-DrQgql3X.js";import"./Text-Dh5WnJTs.js";import"./react-children-utilities-CdZndyK3.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-tlRjFQDU.js";import"./OverlayTrigger-BxJNM7zm.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BBlidXZz.js";import"./number-nHrFdSb-.js";import"./useControlledState-B7K2eYzO.js";import"./PressResponder-COi_Rbo6.js";import"./FocusScope-67rE8EpU.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-n83dATVM.js";import"./VisuallyHidden-D76woJCP.js";import"./context-ByqglxCN.js";import"./useSelector-e9voYkxv.js";import"./Action-C93l4HVN.js";import"./deepFindOfType-BylCc5Xi.js";import"./Collection-DR5xXegF.js";import"./Header-CXhviMrv.js";import"./Separator-CWkByXs_.js";import"./useMenuTrigger-BlNU1FKo.js";import"./SelectionManager-Dy9tah2i.js";import"./useEvent-CpHTlQWK.js";import"./useDescription-BDysBDpW.js";import"./Header-BI0EsPmy.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=q(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(G,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const rt={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},n={},o={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var k,x,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const at=["Default","WithContextMenu","Dark","Light"];export{i as Dark,n as Default,l as Light,o as WithContextMenu,at as __namedExportsOrder,rt as default};
