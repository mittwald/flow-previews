import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-iqYUtoxJ.js";import{o as B,p as y,q as H,r as L,s as P}from"./IconWarning-jqA-R3DE.js";import"./index-Baid8ODN.js";import{P as A}from"./flowComponent-BLFgELHw.js";import{c as _}from"./clsx-B-dksMZM.js";import{E as q}from"./index-dhKWstfL.js";import"./index-Cc1SKcvR.js";import"./index-DxJw5mhE.js";import"./index-CiSr4u4C.js";import{d as w}from"./dummyText-CX_I_Wpl.js";import"./index-DapIULkA.js";import{$ as W,C as $,M as p}from"./index-Cn-1BwI3.js";import{L as u}from"./Link-mfN2Fl5L.js";import{B as n}from"./Button-C62AkZmc.js";import{A as G}from"./Avatar-C1nKMtsB.js";import{I as D}from"./Image-Cnk11k9G.js";import{T as d}from"./Text-Cl0wCOtv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-D-AgJkDe.js";import"./useFocusable-D_aGyKeu.js";import"./utils-XD1Mdlza.js";import"./usePress-z0VJBnEb.js";import"./FocusScope-De_7glvQ.js";import"./useEvent-G_vqJ8Z6.js";import"./Dialog-CR-xtpFq.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CbNQgDoo.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CmZ4cjgJ.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DyJW6laa.js";import"./VisuallyHidden-Jdk5bsYG.js";import"./Collection-CGt-Hk0C.js";import"./Popover-BrzTAAvE.js";import"./Text-C9sPPhMf.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-4VZ_XG4P.js";import"./Button-CTl9mfdD.js";const R="flow--header-navigation",O="flow--header-navigation--link",j="flow--header-navigation--button",z="flow--header-navigation--inverse",o={headerNavigation:R,link:O,button:j,inverse:z},r=t=>{const{children:C,className:b,inverse:c,...M}=t,k=_(o.headerNavigation,c&&o.inverse,b),S={Link:{render:(m,a)=>e.createElement("li",null,e.createElement(m,{...a,className:o.link,unstyled:!0},e.createElement(q,null,a.children)))},Button:{render:(m,a)=>e.createElement("li",null,e.createElement(m,{...a,className:o.button,variant:"plain",inverse:c}))}};return e.createElement("nav",{className:k,role:"navigation",...M},e.createElement("ul",null,e.createElement(A,{props:S},C)))};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const Ae={title:"Navigation/HeaderNavigation",component:r,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(n,null,e.createElement(B,null)))},i={},s={render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(n,null,e.createElement(B,null)),e.createElement(n,null,e.createElement(y,null)),e.createElement(n,null,e.createElement(H,null)),e.createElement(W,null,e.createElement(n,null,e.createElement(G,null,e.createElement(D,{alt:"Gopher",src:w.imageSrc}))),e.createElement($,null,e.createElement(p,null,e.createElement(L,null),e.createElement(d,null,"Profile")),e.createElement(p,null,e.createElement(P,null),e.createElement(d,null,"Logout")))))},l={args:{inverse:!0},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var g,v,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,N,T;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const _e=["Default","WithContextMenu","Inverse"];export{i as Default,l as Inverse,s as WithContextMenu,_e as __namedExportsOrder,Ae as default};
