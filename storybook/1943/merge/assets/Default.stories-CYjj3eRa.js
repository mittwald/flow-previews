import{j as r}from"./iframe-Bi2SfRmV.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-Bplgov_i.js";import{L as m}from"./Link-C2A0Cdv9.js";import{H as s}from"./HeaderNavigation-Bl449Es3.js";import{B as o}from"./Button-D5Xd0LEq.js";import{T as p}from"./Text-BBB4yGC-.js";import{I as C}from"./Image-BQsieaKt.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DXF_j7Z6.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DJeWZ3-W.js";import"./ContextMenuSection-BwTv2FGo.js";import{a as D,M as E}from"./Modal-DMRiBebu.js";import{H as G}from"./Heading-CkWKlntd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./context-BhsUJEB9.js";import"./utils-Dxcmwd9a.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BC_RRwfM.js";import"./useFocus-C-Ng-ghT.js";import"./useFocusRing-Cut0-bC1.js";import"./useFocusable-CoivSZnS.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-ClEMvWD9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6XrWsvH.js";import"./ProgressBar-Dobb74j3.js";import"./Label-HBAOkOC5.js";import"./Hidden-B9tBmOSG.js";import"./useLabel-A5VLCzVG.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B5YnOpHr.js";import"./EmulatedBoldText-B38Yfz1K.js";import"./Text-CkSKd-Z_.js";import"./AlertIcon-0-ZnVc2E.js";import"./Action-C4D1p-D4.js";import"./context-BL-ZIP9s.js";import"./useStatic-DCDW6go-.js";import"./getActionGroupSlot-CbuIGg6y.js";import"./Popover-Db6Hc3ib.js";import"./DialogTriggerView-CRsA35wH.js";import"./Dialog-MyAkaQuV.js";import"./RSPContexts-SSRv2tEc.js";import"./OverlayArrow-B-xht0if.js";import"./useControlledState-CIKoypYK.js";import"./Collection-Bq_myMt6.js";import"./CollectionBuilder-DhC4o9GF.js";import"./Separator-D9zMzSnu.js";import"./Group-CNmX4nS8.js";import"./SearchField-BM55Blft.js";import"./FieldError-BIS3uJRl.js";import"./Form-B_Pu4x7F.js";import"./useTextField-CloIwySk.js";import"./useFormReset-BRME98Hv.js";import"./TextField-Cs62mBed.js";import"./useEvent-62uCNpCU.js";import"./SelectionManager-DBvQYGX_.js";import"./useCollator-nLcbAmPr.js";import"./FocusScope-lVODcCJ_.js";import"./VisuallyHidden-DCu-7XPb.js";import"./Switch-DAjLxwbb.js";import"./Label-Bf2ieprX.js";import"./useToggleState-DGMXdDzZ.js";import"./Overlay-BZJVN0bT.js";import"./ButtonView-cgCkxm-5.js";import"./Heading-C5bxiFeF.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
