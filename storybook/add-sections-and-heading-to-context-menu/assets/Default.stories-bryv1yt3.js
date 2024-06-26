import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-DZ6iFK1V.js";import{r as T,s as w,q as D,t as P,u as W}from"./IconWarning-D5KLWx1O.js";import{L as c}from"./Link-B-sgP4v3.js";import{P as A}from"./PropsContextProvider-DJl9unei.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-COr4qXCu.js";import{T as p}from"./Text-EyCvEgnK.js";import{I as R}from"./Image-BgJdkcRK.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-CfXj7xDI.js";import{a as z,C as F,M as u}from"./ContextMenuSection-yQw222rb.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-BairkNFt.js";import{H as V}from"./Heading-Dx4e16v2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-D0hgC601.js";import"./index-CqLFpzzG.js";import"./index-BOkhicXD.js";import"./utils-DsDc2z3f.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-v15KrNwr.js";import"./useFocusRing-DQ9q31uS.js";import"./useFocusable-R-ZPDh0R.js";import"./LoadingSpinner-CsLReDiT.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Button-D3-i4KBG.js";import"./Text-DAlZawmB.js";import"./react-children-utilities-BZCIIV1H.js";import"./PopoverTrigger-C35F8xkT.js";import"./OverlayTrigger-6VtsQuLn.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-C3Uw9j7L.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-tP5bytlL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-rZYQhwXt.js";import"./context-1gARON2y.js";import"./useSelector-CYhu1s7z.js";import"./Action-D1MPQzaf.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-CPOND5Y7.js";import"./Header-CFQsHu-x.js";import"./SelectionManager-BXcc41yp.js";import"./useEvent-YC2gB4eD.js";import"./Separator-DHXedzvY.js";import"./ModalOverlay-KXZKbjBc.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=q(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(G,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const Ze={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},n={},o={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const $e=["Default","WithContextMenu","Dark","Light"];export{i as Dark,n as Default,l as Light,o as WithContextMenu,$e as __namedExportsOrder,Ze as default};
