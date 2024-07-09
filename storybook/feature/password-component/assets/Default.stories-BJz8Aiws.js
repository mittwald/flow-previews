import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-DWya8WHB.js";import{o as T,p as w,n as D,q as P,r as W}from"./IconWarning-CVIujYNc.js";import{L as c}from"./Link-BLisCSKB.js";import{P as A}from"./PropsContextProvider-RdMO5ekw.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-D6GiwIW_.js";import{T as p}from"./Text-Dgrf8S-7.js";import{I as R}from"./Image-DZYFa5DX.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-C9r9zpUm.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-CvYWvsom.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-CCToFUGU.js";import{H as V}from"./Heading-BCjHoBHi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Cll4pGCY.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bc78XfGJ.js";import"./useFocusable-B1CfUGG-.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-xMX5UQ9s.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./Button-DvIckO9Z.js";import"./Text-3FUNhTNc.js";import"./react-children-utilities-BZCIIV1H.js";import"./ContextMenu.module-CAjBRoKS.js";import"./PopoverTrigger-C23yS8da.js";import"./OverlayTrigger-CInB0dMO.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-B_2Pd_cl.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-CBGue2Od.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CVANJuSe.js";import"./context-CSQJgabl.js";import"./useSelector-DpPpxyR7.js";import"./Action-CAcZ0_fm.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-BZQFS83W.js";import"./Header-CL3U4zra.js";import"./Separator-DG_EV7vp.js";import"./useMenuTrigger-sTn7Pn93.js";import"./SelectionManager-CGAryKFY.js";import"./useEvent-BUAZZNDw.js";import"./Header-CkoFYiSi.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=q(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(G,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const et={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},n={},o={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const tt=["Default","WithContextMenu","Dark","Light"];export{i as Dark,n as Default,l as Light,o as WithContextMenu,tt as __namedExportsOrder,et as default};
