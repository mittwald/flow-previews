import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-RPV2UACM.js";import{o as B,p as y,q as H,r as L,s as P}from"./IconWarning-D1gyLIYa.js";import"./index-J4v5nkYG.js";import{P as A}from"./index-CoJk2QQB.js";import{c as _}from"./clsx-B-dksMZM.js";import{E as q}from"./index-dhKWstfL.js";import"./index-ajPlF_if.js";import"./index-C0raSsgL.js";import"./index-B4Fd8DSQ.js";import{d as w}from"./dummyText-CX_I_Wpl.js";import"./index-WN_-zF0D.js";import{$ as W,C as $,M as p}from"./index-CLE904PY.js";import{L as u}from"./Link-DJG4UIfV.js";import{B as r}from"./Button-D8pmMIBp.js";import{A as G}from"./Avatar-DqA9NqTL.js";import{I as D}from"./Image-CL5Q426H.js";import{T as d}from"./Text-phIOO8u9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-syVPRVDK.js";import"./index-B8XB3FuZ.js";import"./index-D5RbZ7pD.js";import"./SelectionManager-LFnrF7wv.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./FocusScope-B_JIBP49.js";import"./useFocusable-C08EbcBh.js";import"./utils-bTb4N6hy.js";import"./usePress-18_TO7Wj.js";import"./useEvent-CxA2gELr.js";import"./getScrollParent-CcmJp979.js";import"./useControlledState-C0C-dzuH.js";import"./Dialog-BDggyyJu.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-fvqKTS-v.js";import"./number-nHrFdSb-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DByniHrJ.js";import"./VisuallyHidden-Jq0fOfeV.js";import"./Collection-DLxRuvCx.js";import"./Popover-C3fkzfCP.js";import"./Text-fvXBaVCt.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-JGHWlUAu.js";import"./Button-D5gdTRso.js";const R="flow--header-navigation",O="flow--header-navigation--link",j="flow--header-navigation--button",z="flow--header-navigation--inverse",o={headerNavigation:R,link:O,button:j,inverse:z},n=t=>{const{children:C,className:b,inverse:c,...M}=t,k=_(o.headerNavigation,c&&o.inverse,b),S={Link:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.link,unstyled:!0},e.createElement(q,null,a.children)))},Button:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.button,variant:"plain",inverse:c}))}};return e.createElement("nav",{className:k,role:"navigation",...M},e.createElement("ul",null,e.createElement(A,{props:S},C)))};n.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};n.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const We={title:"Navigation/HeaderNavigation",component:n,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(n,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(B,null)))},i={},m={render:t=>e.createElement(n,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(B,null)),e.createElement(r,null,e.createElement(y,null)),e.createElement(r,null,e.createElement(H,null)),e.createElement(W,null,e.createElement(r,null,e.createElement(G,null,e.createElement(D,{alt:"Gopher",src:w.imageSrc}))),e.createElement($,null,e.createElement(p,null,e.createElement(L,null),e.createElement(d,null,"Profile")),e.createElement(p,null,e.createElement(P,null),e.createElement(d,null,"Logout")))))},s={args:{inverse:!0},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var g,v,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,h,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,N,T;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(N=s.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const $e=["Default","WithContextMenu","Inverse"];export{i as Default,s as Inverse,m as WithContextMenu,$e as __namedExportsOrder,We as default};
