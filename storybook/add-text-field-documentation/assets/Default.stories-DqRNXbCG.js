import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-JyWhxCMW.js";import{o as B,p as y,q as H,r as L,s as P}from"./IconWarning-C_kJLkLV.js";import"./index-BVZ0Obvc.js";import{P as A}from"./flowComponent-B9DLSnGg.js";import{c as _}from"./clsx-B-dksMZM.js";import{E as q}from"./index-dhKWstfL.js";import"./index-CkqFYb2z.js";import"./index-C54xbiei.js";import"./index-BgcT5vHF.js";import{d as w}from"./dummyText-CX_I_Wpl.js";import"./index-CiwXpjag.js";import{$ as W,C as $,M as p}from"./index-DbrZWI7Y.js";import{L as u}from"./Link-DvFzDqWB.js";import{B as n}from"./Button-Cq_ZV_AH.js";import{A as G}from"./Avatar-Bdb0_KEN.js";import{I as D}from"./Image-D_kAvsyv.js";import{T as d}from"./Text-CJTQbeNn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-DybNggUs.js";import"./useFocusable-MoxYh-uU.js";import"./utils-CFgm1FN7.js";import"./usePress-MPJq79ab.js";import"./FocusScope-rBNftQuu.js";import"./useEvent-bUe--On6.js";import"./Dialog-DzxZJdi6.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-B4XMciY_.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-DihPW0Td.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-B4xl8Q9B.js";import"./VisuallyHidden-nkBW5OaY.js";import"./Collection-DC4Wq3pw.js";import"./Popover-C-oWjOfV.js";import"./Text-lHr3U40N.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-CMA-K2VV.js";import"./Button-BK2AeOPB.js";const R="flow--header-navigation",O="flow--header-navigation--link",j="flow--header-navigation--button",z="flow--header-navigation--inverse",o={headerNavigation:R,link:O,button:j,inverse:z},r=t=>{const{children:C,className:b,inverse:c,...M}=t,k=_(o.headerNavigation,c&&o.inverse,b),S={Link:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.link,unstyled:!0},e.createElement(q,null,a.children)))},Button:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.button,variant:"plain",inverse:c}))}};return e.createElement("nav",{className:k,role:"navigation",...M},e.createElement("ul",null,e.createElement(A,{props:S},C)))};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const _e={title:"Navigation/HeaderNavigation",component:r,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(n,null,e.createElement(B,null)))},i={},s={render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(n,null,e.createElement(B,null)),e.createElement(n,null,e.createElement(y,null)),e.createElement(n,null,e.createElement(H,null)),e.createElement(W,null,e.createElement(n,null,e.createElement(G,null,e.createElement(D,{alt:"Gopher",src:w.imageSrc}))),e.createElement($,null,e.createElement(p,null,e.createElement(L,null),e.createElement(d,null,"Profile")),e.createElement(p,null,e.createElement(P,null),e.createElement(d,null,"Logout")))))},m={args:{inverse:!0},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var g,v,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,N,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const qe=["Default","WithContextMenu","Inverse"];export{i as Default,m as Inverse,s as WithContextMenu,qe as __namedExportsOrder,_e as default};
