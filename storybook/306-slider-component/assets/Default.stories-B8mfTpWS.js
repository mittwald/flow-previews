import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-DEshkfZj.js";import{q as C,r as D,p as P,s as A,t as _}from"./IconWarning-Ba_VjyzM.js";import{L as u}from"./Link-CuzNnr5a.js";import{P as $}from"./PropsContextProvider-v92cY4my.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-RSy4MY88.js";import{T as d}from"./Text-JJiRTb5U.js";import{I as W}from"./Image-mReXwzly.js";import{d as R}from"./dummyText-CX_I_Wpl.js";import{A as O}from"./Avatar-DW6Ks4pN.js";import{$ as j,C as z,M as g}from"./MenuItem-DF9rvFde.js";import{s as F,a as J}from"./storyBackgrounds-BHxp8d-8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-B3aOilil.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CaJD4Kpr.js";import"./useFocusable-DpEA8Hsr.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Dx1NoUG_.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-D4VcI4Uu.js";import"./Text-D6Zjnbf0.js";import"./react-children-utilities-BZCIIV1H.js";import"./Popover-CE4blozm.js";import"./Dialog-Dm6TnyDd.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BCqBDIej.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-DWE0U9Im.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-B_ssJImm.js";import"./Header-DUrsWlXT.js";import"./SelectionManager-C0vcxxFt.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";const K="flow--header-navigation",Q="flow--header-navigation--link",U="flow--header-navigation--button",V="flow--header-navigation--light",X="flow--header-navigation--dark",n={headerNavigation:K,link:Q,button:U,light:V,dark:X},s=t=>{const{children:M,className:S,color:p="primary",...L}=t,H=q(n.headerNavigation,n[p],S),w={Link:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.link,unstyled:!0},e.createElement(G,null,a.children)))},Button:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:H,role:"navigation",...L},e.createElement("ul",null,e.createElement($,{props:w},M)))};s.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const Oe={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(C,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},i={render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(C,null)),e.createElement(r,null,e.createElement(D,null)),e.createElement(r,null,e.createElement(P,null)),e.createElement(j,null,e.createElement(r,null,e.createElement(O,null,e.createElement(W,{alt:"Gopher",src:R.imageSrc}))),e.createElement(z,null,e.createElement(g,null,e.createElement(A,null),e.createElement(d,null,"Profile")),e.createElement(g,null,e.createElement(_,null),e.createElement(d,null,"Logout")))))},l={args:{color:"dark"},parameters:{backgrounds:F}},m={args:{color:"light"},parameters:{backgrounds:J}};var E,h,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,k,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var B,T,b;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(b=(T=m.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const je=["Default","WithContextMenu","Dark","Light"];export{l as Dark,o as Default,m as Light,i as WithContextMenu,je as __namedExportsOrder,Oe as default};
