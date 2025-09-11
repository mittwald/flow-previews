import{j as r}from"./iframe-CCJYfocm.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-zKFwDxee.js";import{L as m}from"./Link-BeQWh_nD.js";import{H as s}from"./HeaderNavigation-D7th2fQ8.js";import{B as o}from"./Button-hb7RSFxN.js";import{T as p}from"./Text-oKQCGqUf.js";import{I as C}from"./Image-CjVddndP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C6SjBXlF.js";import{a as y,C as A,M as c}from"./ContextMenuContent-Ci-ST1xm.js";import"./ContextMenuSection-BViJGCyS.js";import{a as D,M as E}from"./Modal-BigpajLN.js";import{H as G}from"./Heading-DPpg3tUR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2Y3k6X1.js";import"./mergeRefs-A29wE7X8.js";import"./index-zIu0Aebb.js";import"./useLocalizedStringFormatter-MhDzL5qd.js";import"./context-CpznRjhe.js";import"./utils-OhB6egAd.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-D-nD__UC.js";import"./useFocus-ByyEn-Pe.js";import"./useFocusRing-D9TEPTC8.js";import"./useFocusable-C8TAEKG6.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Cz7ScZS_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dp1voZV2.js";import"./ProgressBar-Bltfi6Tm.js";import"./Label-yb6vzwnx.js";import"./Hidden-D09nfSIf.js";import"./useLabel-DWLXZ_5I.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B7o8lEj9.js";import"./EmulatedBoldText-CzNN3IMB.js";import"./Text-COyZC_d0.js";import"./AlertIcon-BGt8UsN8.js";import"./Action-1vXJU-5u.js";import"./context-BPkPSR0u.js";import"./useStatic-Bygmx728.js";import"./getActionGroupSlot-AK7rMFD6.js";import"./Popover-DX1tLi1k.js";import"./DialogTriggerView--CAPxN8Q.js";import"./Dialog-1LpWSZns.js";import"./RSPContexts-DtIV_XWn.js";import"./OverlayArrow-BKYRJuLy.js";import"./useControlledState-CXb2Atq5.js";import"./Collection-BUL5CBgy.js";import"./CollectionBuilder-BSXaKqWH.js";import"./Separator-Cu0Xy5nC.js";import"./Group-D22NaB6f.js";import"./SearchField-DFDOPoEe.js";import"./FieldError-BNB-0_Es.js";import"./Form-OfbaOX07.js";import"./useTextField-wND_NR3Q.js";import"./useFormReset-CzFRjtap.js";import"./TextField-Cq8rv60r.js";import"./useEvent-Dxdl7lNs.js";import"./SelectionManager-BWi45uf1.js";import"./useCollator-BUSEmk8n.js";import"./FocusScope-D-ZTlcmj.js";import"./VisuallyHidden-DyP1I_X7.js";import"./Switch-BnSiopmv.js";import"./Label-BdPqFAfu.js";import"./useToggleState-s0ZRQL3d.js";import"./Overlay-C8ILVgE4.js";import"./ButtonView-Bp2T4KpU.js";import"./Heading-DjiA9CZu.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
