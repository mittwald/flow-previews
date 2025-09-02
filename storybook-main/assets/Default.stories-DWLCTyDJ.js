import{j as r}from"./iframe-cK4MHKim.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-DC4_CpRf.js";import{L as m}from"./Link-C3LdGJhZ.js";import{H as s}from"./HeaderNavigation-D6HzOekO.js";import{B as o}from"./Button-tRyoiE64.js";import{T as p}from"./Text-FUpRzF42.js";import{I as C}from"./Image-DbXOUfDC.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Bprf-dhf.js";import{a as y,C as A,M as c}from"./ContextMenuContent-B_hYVcS3.js";import"./ContextMenuSection-DyxtMrK9.js";import{a as D,M as E}from"./Modal-Bax9gIes.js";import{H as G}from"./Heading-CQuqsn-Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OWbcmO7Y.js";import"./mergeRefs-CbouoeLx.js";import"./index-C0FnYpIX.js";import"./useLocalizedStringFormatter-yrbwHSL5.js";import"./context-BROjSY2y.js";import"./utils-DNizpOE3.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DxZYFGgJ.js";import"./useFocus-PfRPzZF9.js";import"./useFocusRing-CfOQ7Cy2.js";import"./useFocusable-D26CMdgI.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Be0PLLzY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-j0J6t_ue.js";import"./ProgressBar-D0PLg1H8.js";import"./Label-0KSLZDSS.js";import"./Hidden-DPS3aF7x.js";import"./useLabel-CcxHXXo7.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DLRwst_8.js";import"./EmulatedBoldText-DX7VDiw5.js";import"./Text-CdSAgC2T.js";import"./AlertIcon-B2W3qYXp.js";import"./Action-Bmtfn7OI.js";import"./context-BAX0bMt2.js";import"./useStatic-CeVBJjTX.js";import"./getActionGroupSlot-Dq1WdNDk.js";import"./Popover-D8GRdqS8.js";import"./DialogTriggerView-Bd9C4EBH.js";import"./Dialog-BMNDou9L.js";import"./RSPContexts-DhgL2OGs.js";import"./OverlayArrow-Dw1wGyeW.js";import"./useControlledState-BIGan-OB.js";import"./Collection-DDFYkT_e.js";import"./CollectionBuilder-DWibNHzH.js";import"./Separator-C_60SsjZ.js";import"./Group-zgF9gzKV.js";import"./SearchField-BZKVt08V.js";import"./FieldError-DXq6AbFm.js";import"./Form-Bkh8JfAF.js";import"./useTextField-Bd94TOwc.js";import"./useFormReset-8LX1mmkH.js";import"./TextField-B4j1tk_1.js";import"./useEvent-BXCZp1cQ.js";import"./SelectionManager-D8Yp4yhw.js";import"./useCollator-CxGNCHfH.js";import"./FocusScope-D00_KgQG.js";import"./VisuallyHidden-Bp326u91.js";import"./Switch-Ep9ywrpn.js";import"./Label-DBVrm7rf.js";import"./useToggleState-C2SMOq4C.js";import"./Overlay-CZ-PmsYM.js";import"./ButtonView-Bp72Dtx6.js";import"./Heading-Dng0M53p.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
