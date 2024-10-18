import{R as e}from"./index-Cs7sjTYM.js";import"./IconApp-BqkAjPQv.js";import{r as T,s as w,p as D,t as P,u as W}from"./IconWarning-C0Jc7RFp.js";import{L as c}from"./Link-BH9T7I5r.js";import{P as A}from"./PropsContextProvider-CRusYdr1.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as G}from"./clsx-B-dksMZM.js";import{E as q}from"./EmulatedBoldText-Dmze-Iwg.js";import{B as r}from"./Button-my6OkFqf.js";import{T as p}from"./Text-DpeJkNeI.js";import{I as R}from"./Image-FczoZu69.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-58CbDCn2.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-DRPtPrEs.js";import{a as J,s as K}from"./storyBackgrounds-GFSAi-dI.js";import{a as Q,M as U}from"./ModalTrigger-D-kpUNmk.js";import{H as V}from"./Heading-xmpQYs5Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Bj3jyc5s.js";import"./index-j_f0pOtZ.js";import"./index-Cf-03bMR.js";import"./utils-Cd8r7pc9.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Cn8oVN-C.js";import"./useFocusRing-DdBFev_0.js";import"./useFocusable-GQF4xS8_.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Dq6m2T9S.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-B89OlhFY.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Text-Bnjm0IRl.js";import"./react-children-utilities-CdZndyK3.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-YLhUNpL4.js";import"./OverlayTrigger-BFSK6JNY.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-Bm5GlnqX.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-DMuRQrVO.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BVqa5uLw.js";import"./context-C6jbarL_.js";import"./useSelector-zyIjyxEQ.js";import"./Action-Dcosg46l.js";import"./deepFindOfType-BylCc5Xi.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-C0OxO33Y.js";import"./SelectionManager-CLd9IAHF.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./Header-Cf_7wCpv.js";import"./Heading-CG14-WVD.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},l=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=G(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(q,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};l.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const lt={title:"Navigation/HeaderNavigation",component:l,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},n={render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},m={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
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
}`,...(v=(E=n.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var k,x,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,I,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(I=m.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const st=["Default","WithContextMenu","Dark","Light"];export{i as Dark,o as Default,m as Light,n as WithContextMenu,st as __namedExportsOrder,lt as default};
