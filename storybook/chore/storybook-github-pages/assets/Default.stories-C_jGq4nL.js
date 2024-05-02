import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-Bwxw5AuI.js";import{t as B,u as S,v as H,w as L,x as P}from"./IconWarning-DFvgIVCz.js";import"./index-BN5xuRyU.js";import{P as A}from"./flowComponent-DnUs06RV.js";import{c as _}from"./clsx-B-dksMZM.js";import{E as w}from"./index-dhKWstfL.js";import"./index-Bvj9sSMo.js";import"./index-HBuN0i9E.js";import"./index-CG3PdG8Z.js";import{d as q}from"./dummyText-CX_I_Wpl.js";import"./index-CDDoBlo5.js";import{C as W,M as u}from"./index-CeadSW1J.js";import{L as p}from"./Link-xRgpZhJ6.js";import{B as n}from"./Button-BViRxOm6.js";import{$}from"./import-Cu03TQlK.js";import{A as G}from"./Avatar-Du9jozwn.js";import{I as D}from"./Image-CYL7bIEb.js";import{T as d}from"./Text-DFvNZx2y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-DZ09anV6.js";import"./Popover-CCVim2Rm.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-D3tEegIC.js";import"./real-module-_6R3Ww0Q.js";const R="flow--header-navigation",O="flow--header-navigation--link",j="flow--header-navigation--button",z="flow--header-navigation--inverse",o={headerNavigation:R,link:O,button:j,inverse:z},r=t=>{const{children:C,className:b,inverse:c,...M}=t,k=_(o.headerNavigation,c&&o.inverse,b),y={Link:{render:(m,a)=>e.createElement("li",null,e.createElement(m,{...a,className:o.link,unstyled:!0},e.createElement(w,null,a.children)))},Button:{render:(m,a)=>e.createElement("li",null,e.createElement(m,{...a,className:o.button,style:"plain",inverse:c}))}};return e.createElement("nav",{className:k,role:"navigation",...M},e.createElement("ul",null,e.createElement(A,{props:y},C)))};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const he={title:"Navigation/HeaderNavigation",component:r,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(p,{href:"#"},"Getting startet"),e.createElement(p,{href:"#","aria-current":"page"},"Components"),e.createElement(n,null,e.createElement(B,null)))},s={},l={render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(n,null,e.createElement(B,null)),e.createElement(n,null,e.createElement(S,null)),e.createElement(n,null,e.createElement(H,null)),e.createElement($,null,e.createElement(n,null,e.createElement(G,null,e.createElement(D,{alt:"Gopher",src:q.imageSrc}))),e.createElement(W,null,e.createElement(u,null,e.createElement(L,null),e.createElement(d,null,"Profile")),e.createElement(u,null,e.createElement(P,null),e.createElement(d,null,"Logout")))))},i={args:{inverse:!0},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var g,v,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var E,h,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,N,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    inverse: true
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#002A7B"
      }]
    }
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const xe=["Default","WithContextMenu","Inverse"];export{s as Default,i as Inverse,l as WithContextMenu,xe as __namedExportsOrder,he as default};
