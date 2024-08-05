import{R as e}from"./index-Cs7sjTYM.js";import"./IconApp-4m04zbQ2.js";import{o as T,p as w,n as D,q as P,r as W}from"./IconWarning-CTWky_Q0.js";import{L as c}from"./Link-BOZtPw5B.js";import{P as A}from"./PropsContextProvider-58HgA8rU.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-Dmze-Iwg.js";import{B as r}from"./Button-D-KqNHp8.js";import{T as p}from"./Text-bxh09eJ5.js";import{I as R}from"./Image-ClcpkF5R.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-CG2LvsE8.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-DuijmYxb.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-BsPimfx2.js";import{H as V}from"./Heading-BCPLx9jC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BePwBSVK.js";import"./index-C8LjR2Bd.js";import"./index-BMdlDBjA.js";import"./utils-Ca6JWPXc.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DiyYDbeg.js";import"./useFocusable-OJvPCLGe.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BHLzaSO_.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./Button-DB69cHYY.js";import"./Text-Bu-3W4UG.js";import"./react-children-utilities-CdZndyK3.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-BiL7SFFQ.js";import"./OverlayTrigger-CwMTi2gX.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-qwcow8p4.js";import"./number-nHrFdSb-.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-BF1ug10U.js";import"./context-bVfXLi_S.js";import"./useSelector-U15DiHqH.js";import"./Action-eCY82j2_.js";import"./deepFindOfType-BylCc5Xi.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";import"./Separator-BcuXU_Ka.js";import"./useMenuTrigger-BvBxGpyF.js";import"./SelectionManager-CDhpFlBD.js";import"./useEvent-Be9f7BQw.js";import"./Header-AT2urPjM.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=q(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(G,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const et={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},n={},o={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var k,x,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,I,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const tt=["Default","WithContextMenu","Dark","Light"];export{i as Dark,n as Default,l as Light,o as WithContextMenu,tt as __namedExportsOrder,et as default};
