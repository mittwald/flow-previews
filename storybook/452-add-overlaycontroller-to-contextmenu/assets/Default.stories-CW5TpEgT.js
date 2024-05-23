import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-X-COCDLN.js";import{p as M,q as D,r as P,s as A,t as _}from"./IconWarning-S3pd7Jd3.js";import{L as u}from"./Link-D5VGLBlq.js";import{P as q}from"./PropsContextProvider-v92cY4my.js";import{c as G}from"./clsx-B-dksMZM.js";import{E as W}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-Ddhr05UA.js";import{T as d}from"./Text-_yW77Mox.js";import{I as R}from"./Image-Gc7p5s43.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-CPRrHQnT.js";import{a as z,C as F,M as g}from"./ContextMenuTrigger-Ca6_X_FZ.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BGkoX5us.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-dVD-xw.js";import"./useFocusable-rZ2Ly5zk.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Cwb-7-XH.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-nTbqVPLP.js";import"./Text-D6Zjnbf0.js";import"./react-children-utilities-BZCIIV1H.js";import"./PopoverTrigger-DONpcdNv.js";import"./Action-DzkRZlSq.js";import"./OverlayTrigger-fakWhokl.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BDeolAmD.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-DHvs1HAk.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-dBh8p4gE.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-B_ssJImm.js";import"./Header-LH-ChZ7d.js";import"./SelectionManager-rM5ZOo2R.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";const Q="flow--header-navigation",U="flow--header-navigation--link",V="flow--header-navigation--button",X="flow--header-navigation--light",Y="flow--header-navigation--dark",n={headerNavigation:Q,link:U,button:V,light:X,dark:Y},s=t=>{const{children:S,className:b,color:p="primary",...L}=t,H=G(n.headerNavigation,n[p],b),w={Link:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.link,unstyled:!0},e.createElement(W,null,a.children)))},Button:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:H,role:"navigation",...L},e.createElement("ul",null,e.createElement(q,{props:w},S)))};s.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const ze={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(M,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},i={render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(M,null)),e.createElement(r,null,e.createElement(D,null)),e.createElement(r,null,e.createElement(P,null)),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(g,null,e.createElement(A,null),e.createElement(d,null,"Profile")),e.createElement(g,null,e.createElement(_,null),e.createElement(d,null,"Logout")))))},l={args:{color:"dark"},parameters:{backgrounds:J}},m={args:{color:"light"},parameters:{backgrounds:K}};var E,h,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,k,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <Button>
        <IconNotification />
      </Button>
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
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var I,N,y;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var B,T,C;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const Fe=["Default","WithContextMenu","Dark","Light"];export{l as Dark,o as Default,m as Light,i as WithContextMenu,Fe as __namedExportsOrder,ze as default};
