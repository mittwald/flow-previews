import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-CwGZLNCA.js";import{o as b,p as P,q as D,r as _,s as q}from"./IconWarning-DABzRPnq.js";import"./index-DZOnzayC.js";import{P as A}from"./flowComponent-C3iYbsVA.js";import{c as W}from"./clsx-B-dksMZM.js";import{E as $}from"./index-DePfloUh.js";import"./index-D0HYlWWA.js";import"./index-Bei-u9ze.js";import"./index-B78IGz4U.js";import{d as G}from"./dummyText-CX_I_Wpl.js";import"./index-Cghc-FVP.js";import{$ as R,C as O,M as u}from"./index-DzX70DOD.js";import{s as j,a as z}from"./storyBackgrounds-BHxp8d-8.js";import{L as d}from"./Link-D4CL1_ok.js";import{B as r}from"./Button-DZIkkxYk.js";import{A as F}from"./Avatar-Be97DTvE.js";import{I as J}from"./Image-DOf14hkJ.js";import{T as g}from"./Text-9aVSwLyk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-7Bm5Bt6L.js";import"./index-BOkhicXD.js";import"./index-DxHWpCWl.js";import"./useFocusable-BGYghl-O.js";import"./utils-CHnd_qWz.js";import"./usePress-C4eoOWOJ.js";import"./FocusScope-BAgquhRo.js";import"./useEvent-BxbBFNFa.js";import"./Dialog-CmqFKjmg.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DMphC9df.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-7II0TQXO.js";import"./VisuallyHidden-DMUsmByH.js";import"./Collection-DUP4IVi4.js";import"./Popover-DBFx0NG8.js";import"./Separator-BEXQHetg.js";import"./Text-QhWkLhD7.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Dlmb3D8K.js";import"./Button-D-FvJARW.js";const K="flow--header-navigation",Q="flow--header-navigation--link",U="flow--header-navigation--button",V="flow--header-navigation--light",X="flow--header-navigation--dark",o={headerNavigation:K,link:Q,button:U,light:V,dark:X},a=t=>{const{children:M,className:S,color:p="primary",...L}=t,H=W(o.headerNavigation,o[p],S),w={Link:{render:(c,n)=>e.createElement("li",null,e.createElement(c,{...n,className:o.link,unstyled:!0},e.createElement($,null,n.children)))},Button:{render:(c,n)=>e.createElement("li",null,e.createElement(c,{...n,className:o.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:H,role:"navigation",...L},e.createElement("ul",null,e.createElement(A,{props:w},M)))};a.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};a.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const ze={title:"Navigation/HeaderNavigation",component:a,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(a,{"aria-label":"Header navigation",...t},e.createElement(d,{href:"#"},"Getting startet"),e.createElement(d,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(b,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},i={},l={render:t=>e.createElement(a,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(b,null)),e.createElement(r,null,e.createElement(P,null)),e.createElement(r,null,e.createElement(D,null)),e.createElement(R,null,e.createElement(r,null,e.createElement(F,null,e.createElement(J,{alt:"Gopher",src:G.imageSrc}))),e.createElement(O,null,e.createElement(u,null,e.createElement(_,null),e.createElement(g,null,"Profile")),e.createElement(u,null,e.createElement(q,null),e.createElement(g,null,"Logout")))))},m={args:{color:"dark"},parameters:{backgrounds:j}},s={args:{color:"light"},parameters:{backgrounds:z}};var h,f,E;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(E=(f=i.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var v,k,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var x,N,I;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var B,T,C;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const Fe=["Default","WithContextMenu","Dark","Light"];export{m as Dark,i as Default,s as Light,l as WithContextMenu,Fe as __namedExportsOrder,ze as default};
