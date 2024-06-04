import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-CtQ8LmC9.js";import{q as C,r as D,p as P,s as A,t as _}from"./IconWarning-Dmp0B6I3.js";import{L as u}from"./Link-BliUQUeA.js";import{P as q}from"./PropsContextProvider-CtgwYsrm.js";import{c as G}from"./clsx-B-dksMZM.js";import{E as W}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-D3ygk8x2.js";import{T as d}from"./Text-DkXNa9lH.js";import{I as R}from"./Image-B7N1O3j7.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-VkQh9zXo.js";import{a as z,C as F,M as g}from"./ContextMenuTrigger--TCqG0un.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-BMTDS1RJ.js";import{H as V}from"./Heading-D2rl-zba.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-HAqgJ-qp.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-dVD-xw.js";import"./useFocusable-rZ2Ly5zk.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BFbWNd2Y.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-Dy16a6a4.js";import"./Text-D6Zjnbf0.js";import"./react-children-utilities-BZCIIV1H.js";import"./PopoverTrigger-DwU6lZh_.js";import"./Action-BxsXLg9O.js";import"./OverlayTrigger-DWUAGUYJ.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BDeolAmD.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-DHvs1HAk.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-dBh8p4gE.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-B_ssJImm.js";import"./Header-1hBV_Hcy.js";import"./SelectionManager-rM5ZOo2R.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";import"./ModalOverlay-BpWZyc_r.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",n={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},s=t=>{const{children:H,className:S,color:p="primary",...b}=t,L=G(n.headerNavigation,n[p],S),w={Link:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.link,unstyled:!0},e.createElement(W,null,a.children)))},Button:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:L,role:"navigation",...b},e.createElement("ul",null,e.createElement(q,{props:w},H)))};s.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const Ve={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(C,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},i={render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(C,null)),e.createElement(r,null,e.createElement(D,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(P,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(g,null,e.createElement(A,null),e.createElement(d,null,"Profile")),e.createElement(g,null,e.createElement(_,null),e.createElement(d,null,"Logout")))))},l={args:{color:"dark"},parameters:{backgrounds:J}},m={args:{color:"light"},parameters:{backgrounds:K}};var E,f,h;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,k,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var M,N,I;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var T,y,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(B=(y=m.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const Xe=["Default","WithContextMenu","Dark","Light"];export{l as Dark,o as Default,m as Light,i as WithContextMenu,Xe as __namedExportsOrder,Ve as default};
