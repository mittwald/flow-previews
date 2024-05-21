import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-DB4IxwAO.js";import{o as C,p as D,q as P,r as A,s as _}from"./IconWarning-CM7W0QgG.js";import{L as u}from"./Link-B3jJdJeV.js";import{P as $}from"./flowComponent-CNgVLU4x.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-DzNCZpDp.js";import{B as r}from"./Button-BwLT2Y64.js";import{T as d}from"./Text-W3BUOH14.js";import{I as W}from"./Image-BxoDw4Gw.js";import{d as R}from"./dummyText-CX_I_Wpl.js";import{A as O}from"./Avatar-C766dGWl.js";import{$ as j,C as z,M as g}from"./MenuItem-CE-VMk34.js";import{s as F,a as J}from"./storyBackgrounds-BHxp8d-8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-DZgOXw50.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DL4LW3M_.js";import"./useFocusable-DIAzcF9v.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-UwFVroEd.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-B3LWHon2.js";import"./Text-D6Zjnbf0.js";import"./react-children-utilities-BZCIIV1H.js";import"./Popover-A3ITbV_D.js";import"./Dialog-C_GihYWd.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-B5rNo2Ho.js";import"./number-nHrFdSb-.js";import"./useControlledState-B8AA3oOY.js";import"./FocusScope-CNJ-ZnPk.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-xpUhodH8.js";import"./deepFindOfType-CMLjW25q.js";import"./Collection-DR0QT0d2.js";import"./Header-BwGXp1hM.js";import"./useEvent-BUAZZNDw.js";import"./Separator-bFMjWqbW.js";const K="flow--header-navigation",Q="flow--header-navigation--link",U="flow--header-navigation--button",V="flow--header-navigation--light",X="flow--header-navigation--dark",n={headerNavigation:K,link:Q,button:U,light:V,dark:X},s=t=>{const{children:M,className:S,color:p="primary",...L}=t,H=q(n.headerNavigation,n[p],S),w={Link:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.link,unstyled:!0},e.createElement(G,null,a.children)))},Button:{render:(c,a)=>e.createElement("li",null,e.createElement(c,{...a,className:n.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:H,role:"navigation",...L},e.createElement("ul",null,e.createElement($,{props:w},M)))};s.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const Ge={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(C,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},i={render:t=>e.createElement(s,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(C,null)),e.createElement(r,null,e.createElement(D,null)),e.createElement(r,null,e.createElement(P,null)),e.createElement(j,null,e.createElement(r,null,e.createElement(O,null,e.createElement(W,{alt:"Gopher",src:R.imageSrc}))),e.createElement(z,null,e.createElement(g,null,e.createElement(A,null),e.createElement(d,null,"Profile")),e.createElement(g,null,e.createElement(_,null),e.createElement(d,null,"Logout")))))},l={args:{color:"dark"},parameters:{backgrounds:F}},m={args:{color:"light"},parameters:{backgrounds:J}};var E,h,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,k,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(T=m.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const We=["Default","WithContextMenu","Dark","Light"];export{l as Dark,o as Default,m as Light,i as WithContextMenu,We as __namedExportsOrder,Ge as default};
