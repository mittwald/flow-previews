import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-C_Ee2cAg.js";import{n as b,o as P,p as D,q as _,r as q}from"./IconWarning-DXLSgN4Z.js";import"./index-ClF4N6F1.js";import{P as A}from"./flowComponent-DziSYcSt.js";import{c as W}from"./clsx-B-dksMZM.js";import{E as $}from"./index-DePfloUh.js";import"./index-DKGoyJng.js";import"./index-DPz7AJqL.js";import"./index-Z_Px1zf2.js";import{d as G}from"./dummyText-CX_I_Wpl.js";import"./index-CeoyLoL_.js";import{$ as R,C as O,M as u}from"./index-CHmDE2lE.js";import{s as j,a as z}from"./storyBackgrounds-BHxp8d-8.js";import{L as d}from"./Link-DkcumHyS.js";import{B as r}from"./Button-DdiMHN0-.js";import{A as F}from"./Avatar-Dbhzb-5T.js";import{I as J}from"./Image-aRmJGrKW.js";import{T as g}from"./Text-BCaZeLgd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./index-COw2gwMt.js";import"./useFocusable-COvHRmfY.js";import"./utils-8G7INyPj.js";import"./usePress-dpeNPdVr.js";import"./FocusScope-DrwDeQCl.js";import"./useEvent-BXXJHkKS.js";import"./Dialog-DPtrt-IL.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DVSzW_UP.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-B2aKG-1k.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-BQEMyRqd.js";import"./VisuallyHidden-Cd1iXq69.js";import"./Collection-Drxui_PJ.js";import"./Popover-Cm43stDq.js";import"./Text-DnTC8Fwv.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BP2Mc1p0.js";import"./Button-DUc748qi.js";const K="flow--header-navigation",Q="flow--header-navigation--link",U="flow--header-navigation--button",V="flow--header-navigation--light",X="flow--header-navigation--dark",o={headerNavigation:K,link:Q,button:U,light:V,dark:X},a=t=>{const{children:M,className:S,color:p="primary",...L}=t,H=W(o.headerNavigation,o[p],S),w={Link:{render:(c,n)=>e.createElement("li",null,e.createElement(c,{...n,className:o.link,unstyled:!0},e.createElement($,null,n.children)))},Button:{render:(c,n)=>e.createElement("li",null,e.createElement(c,{...n,className:o.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:H,role:"navigation",...L},e.createElement("ul",null,e.createElement(A,{props:w},M)))};a.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};a.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const Oe={title:"Navigation/HeaderNavigation",component:a,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(a,{"aria-label":"Header navigation",...t},e.createElement(d,{href:"#"},"Getting startet"),e.createElement(d,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(b,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},i={},l={render:t=>e.createElement(a,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(b,null)),e.createElement(r,null,e.createElement(P,null)),e.createElement(r,null,e.createElement(D,null)),e.createElement(R,null,e.createElement(r,null,e.createElement(F,null,e.createElement(J,{alt:"Gopher",src:G.imageSrc}))),e.createElement(O,null,e.createElement(u,null,e.createElement(_,null),e.createElement(g,null,"Profile")),e.createElement(u,null,e.createElement(q,null),e.createElement(g,null,"Logout")))))},m={args:{color:"dark"},parameters:{backgrounds:j}},s={args:{color:"light"},parameters:{backgrounds:z}};var h,f,E;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(E=(f=i.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var v,k,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const je=["Default","WithContextMenu","Dark","Light"];export{m as Dark,i as Default,s as Light,l as WithContextMenu,je as __namedExportsOrder,Oe as default};
