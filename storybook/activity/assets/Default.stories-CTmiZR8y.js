import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-Cw_YJm7P.js";import{o as B,p as y,q as H,r as L,s as P}from"./IconWarning-Brm6znG4.js";import"./index-DfDWyHk2.js";import{P as A}from"./flowComponent-DSjr-DA9.js";import{c as _}from"./clsx-B-dksMZM.js";import{E as q}from"./index-dhKWstfL.js";import"./index-R9SXROV0.js";import"./index-Cmm4kSfL.js";import"./index-CYyaW0mp.js";import{d as w}from"./dummyText-CX_I_Wpl.js";import"./index-iexc4HuG.js";import{$ as W,C as $,M as p}from"./index-CYlYQwUe.js";import{L as u}from"./Link-Civ3-cHY.js";import{B as n}from"./Button-DuqxXfo1.js";import{A as G}from"./Avatar-ChWM4FzJ.js";import{I as D}from"./Image-DcGgvC30.js";import{T as d}from"./Text-_YkQ25lp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-C8AANQ8j.js";import"./useFocusable-DzpyvdoN.js";import"./utils-BPWq_g-Q.js";import"./usePress-BlWeTRZV.js";import"./FocusScope-BcVerVEk.js";import"./useEvent-DjykftQI.js";import"./Dialog-DpHOp60S.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BQ0eDFRq.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BrR5B9uo.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DU7gDNHk.js";import"./VisuallyHidden-BhpnabCC.js";import"./Collection-wbrVRoqV.js";import"./Popover-3nIfbjqo.js";import"./Text-DaIqyakl.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-B41iwwvE.js";import"./Button-CgYWhGLL.js";const R="flow--header-navigation",O="flow--header-navigation--link",j="flow--header-navigation--button",z="flow--header-navigation--inverse",o={headerNavigation:R,link:O,button:j,inverse:z},r=t=>{const{children:C,className:b,inverse:c,...M}=t,k=_(o.headerNavigation,c&&o.inverse,b),S={Link:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.link,unstyled:!0},e.createElement(q,null,a.children)))},Button:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.button,variant:"plain",inverse:c}))}};return e.createElement("nav",{className:k,role:"navigation",...M},e.createElement("ul",null,e.createElement(A,{props:S},C)))};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const _e={title:"Navigation/HeaderNavigation",component:r,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(n,null,e.createElement(B,null)))},i={},s={render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(n,null,e.createElement(B,null)),e.createElement(n,null,e.createElement(y,null)),e.createElement(n,null,e.createElement(H,null)),e.createElement(W,null,e.createElement(n,null,e.createElement(G,null,e.createElement(D,{alt:"Gopher",src:w.imageSrc}))),e.createElement($,null,e.createElement(p,null,e.createElement(L,null),e.createElement(d,null,"Profile")),e.createElement(p,null,e.createElement(P,null),e.createElement(d,null,"Logout")))))},m={args:{inverse:!0},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var g,v,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
