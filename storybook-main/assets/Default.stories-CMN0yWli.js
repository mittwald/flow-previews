import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-FFx7s__U.js";import{o as B,p as y,q as H,r as L,s as P}from"./IconWarning-CZBb_lzG.js";import"./index-oG4M87Z8.js";import{P as A}from"./flowComponent-CvmVviyC.js";import{c as _}from"./clsx-B-dksMZM.js";import{E as q}from"./index-IVpWfQyc.js";import"./index-B9XJpLw1.js";import"./index-B_ou1i4R.js";import"./index-CvLUQLRY.js";import{d as w}from"./dummyText-CX_I_Wpl.js";import"./index-D2NLXBcy.js";import{$ as W,C as $,M as p}from"./index-BJtYgMLW.js";import{L as u}from"./Link-DRg7sHf1.js";import{B as n}from"./Button-aU2Eeeyj.js";import{A as G}from"./Avatar-CwjEVzvd.js";import{I as D}from"./Image-DtY_evGl.js";import{T as d}from"./Text-Dp5UV4Su.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./index-CWjdaQek.js";import"./useFocusable-Ci2wVYze.js";import"./utils-BGsKKjDw.js";import"./usePress-CP78YWrE.js";import"./FocusScope-CRWuoD-1.js";import"./useEvent-CTaGr_kn.js";import"./Dialog-BTcu6PHq.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CBf0Hfqk.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CsLYpn7N.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-COLBOOlB.js";import"./VisuallyHidden-DG5wj4QR.js";import"./Collection-D8kckE6P.js";import"./Popover-Bhbei27J.js";import"./Text-Daiml_5e.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Cqz6fh5v.js";import"./Button-C6109VW8.js";const R="flow--header-navigation",O="flow--header-navigation--link",j="flow--header-navigation--button",z="flow--header-navigation--inverse",o={headerNavigation:R,link:O,button:j,inverse:z},r=t=>{const{children:C,className:b,inverse:c,...M}=t,k=_(o.headerNavigation,c&&o.inverse,b),S={Link:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.link,unstyled:!0},e.createElement(q,null,a.children)))},Button:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.button,variant:"plain",inverse:c}))}};return e.createElement("nav",{className:k,role:"navigation",...M},e.createElement("ul",null,e.createElement(A,{props:S},C)))};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const _e={title:"Navigation/HeaderNavigation",component:r,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(n,null,e.createElement(B,null)))},i={},s={render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(n,null,e.createElement(B,null)),e.createElement(n,null,e.createElement(y,null)),e.createElement(n,null,e.createElement(H,null)),e.createElement(W,null,e.createElement(n,null,e.createElement(G,null,e.createElement(D,{alt:"Gopher",src:w.imageSrc}))),e.createElement($,null,e.createElement(p,null,e.createElement(L,null),e.createElement(d,null,"Profile")),e.createElement(p,null,e.createElement(P,null),e.createElement(d,null,"Logout")))))},m={args:{inverse:!0},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var g,v,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
