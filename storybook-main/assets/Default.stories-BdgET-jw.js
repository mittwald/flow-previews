import{j as r}from"./iframe-DiTvlIx0.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-G89JjWcD.js";import{L as m}from"./Link-COswoGYD.js";import{H as s}from"./HeaderNavigation-CBnJwp_A.js";import{B as o}from"./Button-BiD6Lawu.js";import{T as p}from"./Text-DI1PKUAj.js";import{I as C}from"./Image-DEN5EXoP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DUaEBIQc.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CoEWk6ND.js";import"./ContextMenuSection-BhaAfmgY.js";import{a as D,M as G}from"./Modal-C65H16hy.js";import{H as E}from"./Heading-CtVxJMPB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CFcpYPaZ.js";import"./mergeRefs-B_ak7i-H.js";import"./index-BnnHP1pm.js";import"./useLocalizedStringFormatter-S2PSgqtc.js";import"./context-DGhDP4Fo.js";import"./utils-BABRtEIC.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-gIhSeEMK.js";import"./useFocus-Csuog0QY.js";import"./useFocusRing-B2-Vw04x.js";import"./useFocusable-BMX7QfiV.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DaBaZ8Mn.js";import"./Button-B0hpxsDM.js";import"./ProgressBar-B0Vgjwix.js";import"./Label-DVhhRECd.js";import"./Hidden-Bpwwde4M.js";import"./useLabel-du6TudaG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BaahsGvK.js";import"./EmulatedBoldText-drbL--yb.js";import"./Text-Rz2GzXDH.js";import"./AlertIcon-DnEylvkt.js";import"./Action-Vim0FXk8.js";import"./context-DkfqWRD_.js";import"./useStatic-DdGraPJb.js";import"./getActionGroupSlot-DsxZE0Zq.js";import"./Popover-DIx8skPH.js";import"./DialogTriggerView-CU_t9XAT.js";import"./Dialog-ByglpE6R.js";import"./RSPContexts-RnDkEBIV.js";import"./OverlayArrow-CXEJUrV_.js";import"./useControlledState-Cw5WssZN.js";import"./Collection-DCDGv6Hn.js";import"./CollectionBuilder-Dz71Bmkn.js";import"./Separator-CUbm99qE.js";import"./Group-CCQCMpIY.js";import"./SearchField-ch9pUxlM.js";import"./FieldError-DCG_xqAH.js";import"./Form-BkiUDrTE.js";import"./useTextField-Bj0Agq48.js";import"./useFormReset-DnAkrJEx.js";import"./TextField-vFmkS8-q.js";import"./useEvent-CKujStdr.js";import"./SelectionManager-DKKfhyH7.js";import"./useCollator-CLHz9ghx.js";import"./FocusScope-DA66A_td.js";import"./VisuallyHidden-DqT0mP1T.js";import"./Switch-BMPpXKtQ.js";import"./Label-M3UKHXXD.js";import"./useToggleState-DoJBgJMK.js";import"./Overlay-BwD6Ndtx.js";import"./Header-C2CP-sEq.js";import"./ButtonView-D5jLYRzm.js";import"./Heading-DY0O2Qkl.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
