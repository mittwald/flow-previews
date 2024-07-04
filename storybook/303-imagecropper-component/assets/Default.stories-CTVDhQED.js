import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-C-B10zNi.js";import{o as T,p as w,n as D,q as P,r as W}from"./IconWarning-D08KcEGW.js";import{L as c}from"./Link-DnpH0ML6.js";import{P as A}from"./PropsContextProvider-DR_AoDrQ.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-B1t6hs5E.js";import{B as r}from"./Button-CGYujOOx.js";import{T as p}from"./Text-OHQxmlAI.js";import{I as R}from"./Image-DUsAPYFe.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-D_4RvnxN.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-BuF8irH6.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-BRfOkqxL.js";import{H as V}from"./Heading-CYnWOiGh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-pf1ZT_RA.js";import"./index-D1Z7wIYD.js";import"./index-B8XB3FuZ.js";import"./utils-_0I8Kdxf.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CipJ8IEr.js";import"./useFocusable-Di1f8vLw.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./Button-j9P20aTv.js";import"./Text-YaHrFsZr.js";import"./react-children-utilities-CseWD4BL.js";import"./ContextMenu.module-CAjBRoKS.js";import"./PopoverTrigger-DfYVWCk8.js";import"./OverlayTrigger-CcMw9uE5.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CTAo9QmE.js";import"./number-nHrFdSb-.js";import"./useControlledState-C0C-dzuH.js";import"./PressResponder-CS6YBkA6.js";import"./FocusScope-h9apr_hQ.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-h5MY4Xo1.js";import"./VisuallyHidden-CctDujdB.js";import"./context-ZkthLU-2.js";import"./useSelector-Pyc-engy.js";import"./Action-DJglBR0x.js";import"./deepFindOfType-CmKNZ8si.js";import"./Collection-BUjDbYEY.js";import"./Header-CClMDSoE.js";import"./Separator-DAfHJ8px.js";import"./useMenuTrigger-I7P_BxpU.js";import"./SelectionManager-C8SlKI3Z.js";import"./useEvent-BSX0jSmh.js";import"./useDescription-CvuWAMaA.js";import"./Header-0z1MCI7V.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=q(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(G,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const rt={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},n={},o={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
