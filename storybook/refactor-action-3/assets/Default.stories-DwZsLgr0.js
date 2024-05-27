import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-Cn5k3X6X.js";import{q as b,r as D,p as P,s as O,t as A}from"./IconWarning-BlJfL1s8.js";import{L as u}from"./Link-BbEwDxr4.js";import{P as _}from"./PropsContextProvider-v92cY4my.js";import{c as $}from"./clsx-B-dksMZM.js";import{E as q}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-5wt70xhe.js";import{T as d}from"./Text-Cxmp4Xqy.js";import{I as G}from"./Image-BIfLq5ZZ.js";import{d as W}from"./dummyText-CX_I_Wpl.js";import{A as R}from"./Avatar-B1F3TPfX.js";import{$ as j,C as z,M as g}from"./MenuItem-CA_wQ_H5.js";import{s as F,a as J}from"./storyBackgrounds-BHxp8d-8.js";import{O as K}from"./OverlayTrigger-1tYFPWqU.js";import{M as Q}from"./Modal-CmaWQJqg.js";import{H as U}from"./Heading-Bi46QOGb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BXgpTJfi.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-dVD-xw.js";import"./useFocusable-rZ2Ly5zk.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DfSuOTAm.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-nTbqVPLP.js";import"./Text-D6Zjnbf0.js";import"./react-children-utilities-BZCIIV1H.js";import"./Popover-BcSKKrPZ.js";import"./Dialog-DmW6zZF1.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BDeolAmD.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-DHvs1HAk.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-dBh8p4gE.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-B_ssJImm.js";import"./Header-CsuyGvyJ.js";import"./SelectionManager-rM5ZOo2R.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";import"./Action-DB0haMi_.js";import"./useSelector-CKvQZLb9.js";const V="flow--header-navigation",X="flow--header-navigation--link",Y="flow--header-navigation--button",Z="flow--header-navigation--light",ee="flow--header-navigation--dark",n={headerNavigation:V,link:X,button:Y,light:Z,dark:ee},s=t=>{const{children:C,className:H,color:p="primary",...S}=t,L=$(n.headerNavigation,n[p],H),w={Link:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.link,unstyled:!0},e.createElement(q,null,a.children)))},Button:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:L,role:"navigation",...S},e.createElement("ul",null,e.createElement(_,{props:w},C)))};s.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const Ve={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(b,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},i={render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(b,null)),e.createElement(r,null,e.createElement(D,null)),e.createElement(K,null,e.createElement(r,null,e.createElement(P,null)),e.createElement(Q,null,e.createElement(U,null,"Notifications"))),e.createElement(j,null,e.createElement(r,null,e.createElement(R,null,e.createElement(G,{alt:"Gopher",src:W.imageSrc}))),e.createElement(z,null,e.createElement(g,null,e.createElement(O,null),e.createElement(d,null,"Profile")),e.createElement(g,null,e.createElement(A,null),e.createElement(d,null,"Logout")))))},l={args:{color:"dark"},parameters:{backgrounds:F}},m={args:{color:"light"},parameters:{backgrounds:J}};var E,f,h;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,k,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <OverlayTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </OverlayTrigger>
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var N,y,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(I=(y=l.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var M,T,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const Xe=["Default","WithContextMenu","Dark","Light"];export{l as Dark,o as Default,m as Light,i as WithContextMenu,Xe as __namedExportsOrder,Ve as default};
