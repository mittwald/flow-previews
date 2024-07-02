import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-08dtyhav.js";import{o as T,p as w,n as D,q as P,r as W}from"./IconWarning--xZ87BQk.js";import{L as c}from"./Link-CFfN6dAc.js";import{P as A}from"./PropsContextProvider-DJl9unei.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-CKjWx2QM.js";import{T as p}from"./Text-CzfDsx2u.js";import{I as R}from"./Image-yzwDzn24.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-BHaRSdEE.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-C2y7UYa8.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-RNl9xIv1.js";import{H as V}from"./Heading-BTmWJFHE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-d9koHm8X.js";import"./index-CqLFpzzG.js";import"./index-BOkhicXD.js";import"./utils-CRveUs4Q.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-418flx.js";import"./useFocusable-DIY1EfD0.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DBUWTLW8.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Button-B6RNnFE-.js";import"./Text-BxG67LRB.js";import"./react-children-utilities-BZCIIV1H.js";import"./PopoverTrigger-6KT5KTFb.js";import"./OverlayTrigger-PMv2-p4P.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DobB3-tX.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./PressResponder-CvugjgZN.js";import"./FocusScope-DRFNwxZB.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-BwH5wu93.js";import"./context-DGHf5otc.js";import"./useSelector-BUIORffs.js";import"./Action-DH-nwfeD.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-AT6m4EFM.js";import"./Header-hOCBwC_K.js";import"./Separator-D-FRkinj.js";import"./useMenuTrigger-BGlgYenP.js";import"./SelectionManager-ADoBXYhu.js";import"./useEvent-YC2gB4eD.js";import"./useDescription-DkXZ8A7g.js";import"./Header-r7EcPp6B.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=q(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(G,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const tt={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},n={},o={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const rt=["Default","WithContextMenu","Dark","Light"];export{i as Dark,n as Default,l as Light,o as WithContextMenu,rt as __namedExportsOrder,tt as default};
