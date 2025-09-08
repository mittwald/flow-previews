import{j as r}from"./iframe-CB_IvR8I.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-DHvxn9zQ.js";import{L as m}from"./Link-z4v83iI8.js";import{H as s}from"./HeaderNavigation-D50c_u5c.js";import{B as o}from"./Button-B6pH5E7T.js";import{T as p}from"./Text-C_h1oOw9.js";import{I as C}from"./Image-CRdNADlC.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-5DKDAMFz.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DAqLH-HX.js";import"./ContextMenuSection-CCIV1sJL.js";import{a as D,M as E}from"./Modal-CCdKha4c.js";import{H as G}from"./Heading-5jxFfyfL.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./context-CQpLcUPr.js";import"./utils-g_K47B_Q.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BSSkfFZ6.js";import"./useFocus-B0PqsM1A.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocusable-B2StGM5o.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B018WmYG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BNZImaSB.js";import"./ProgressBar-DB_rXcaP.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./useLabel-DNzpHOuu.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";import"./Text-B8w1c0_W.js";import"./AlertIcon-BlCkjLsM.js";import"./Action-DXrBr-ZU.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";import"./getActionGroupSlot-Bj-rdEEm.js";import"./Popover-7BARD7J6.js";import"./DialogTriggerView-SiWvQg2j.js";import"./Dialog-nVDPewl7.js";import"./RSPContexts-PWzkBgmU.js";import"./OverlayArrow-01R9fjkr.js";import"./useControlledState-CS3WyH2d.js";import"./Collection-BYXnLO4u.js";import"./CollectionBuilder-opZAg4uy.js";import"./Separator-Bv7qspKp.js";import"./Group-BtoN_DlS.js";import"./SearchField-CR8AG0pb.js";import"./FieldError-7I8SRRkd.js";import"./Form-BSDtEK6z.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./TextField-nXjEyJdg.js";import"./useEvent--a1AA2TN.js";import"./SelectionManager-DyWAPqsT.js";import"./useCollator-3DG3Mrdl.js";import"./FocusScope-2f5e0YPn.js";import"./VisuallyHidden-D4WM3JvY.js";import"./Switch-C6Bv0M9b.js";import"./Label-DQjiInKi.js";import"./useToggleState-CSHG9nms.js";import"./Overlay-dF9WQWt5.js";import"./ButtonView-BKH7_-Wq.js";import"./Heading-9QvowWck.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
