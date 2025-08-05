import{j as r}from"./iframe-BwUhuRm7.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-DVI2HiM9.js";import{L as m}from"./Link-Bf90H_J7.js";import{H as s}from"./HeaderNavigation-C90asUKL.js";import{B as o}from"./Button-DXRAI5C8.js";import{T as p}from"./Text-BBSS7FYM.js";import{I as C}from"./Image-DJngQHyR.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-qLiFCgRR.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CNOjAmvJ.js";import"./ContextMenuSection-BgDfdJK7.js";import{a as D,M as G}from"./Modal-04AWB9aH.js";import{H as E}from"./Heading-GXPWlFkJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cfu_dxW5.js";import"./mergeRefs-DFtW8n00.js";import"./index-C5CMDY3C.js";import"./useLocalizedStringFormatter-CNjvSUsH.js";import"./context-bUzCuHOu.js";import"./utils-DDoNb5qO.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DMqEl6WQ.js";import"./useFocus-BdFL2QuQ.js";import"./useFocusRing-UIPQHDoL.js";import"./useFocusable-BiRHUtLW.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-fl_VQ3tF.js";import"./Button-Ds18dV5B.js";import"./ProgressBar-ByXy0FjY.js";import"./Label-D-Cavg7S.js";import"./Hidden-DCcQ90cW.js";import"./useLabel-CJJXcYYW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CwFUDHtx.js";import"./EmulatedBoldText-Do_4Bp9I.js";import"./Text-CbUcC8Oz.js";import"./AlertIcon-rskT8OW9.js";import"./Action-B_OuXMJk.js";import"./context-DSL3Ffex.js";import"./useStatic-10Z2anw0.js";import"./getActionGroupSlot-XogBqS__.js";import"./Popover-Br1zFO1C.js";import"./DialogTriggerView-BL8MNJX8.js";import"./Dialog-uD5rPHFv.js";import"./RSPContexts-cnUhnSXF.js";import"./OverlayArrow-CKENjgaB.js";import"./useControlledState-D841p2oi.js";import"./Collection-DeL1dhBj.js";import"./CollectionBuilder-BG3-IUkU.js";import"./Separator-_bTFvR5v.js";import"./Group-ZFfwIVE3.js";import"./SearchField-B_aps_XI.js";import"./FieldError-DsFBc8y3.js";import"./Form-C5mHTKgE.js";import"./useTextField-DDqPPB1t.js";import"./useFormReset-dodywWj-.js";import"./TextField-CxDkfZto.js";import"./useEvent-B7428EMj.js";import"./SelectionManager-DsYBxDUu.js";import"./useCollator-CbeUpY-G.js";import"./FocusScope-3xnL38Zh.js";import"./VisuallyHidden-C84OwjFZ.js";import"./Switch-DuaIx52d.js";import"./Label-Dryy0w3E.js";import"./useToggleState-BSjcAlrf.js";import"./Overlay-C_g9KhS_.js";import"./Header-C9y1i16V.js";import"./ButtonView-DRytiBgs.js";import"./Heading-D-Wyg3yU.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
