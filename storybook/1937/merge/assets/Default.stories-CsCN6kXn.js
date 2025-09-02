import{j as r}from"./iframe-yblUafAy.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-FTunGjDP.js";import{L as m}from"./Link-CPuEUI8f.js";import{H as s}from"./HeaderNavigation-BXEvSD7m.js";import{B as o}from"./Button-D2p8-L8R.js";import{T as p}from"./Text-Bue8FNqz.js";import{I as C}from"./Image-Dq1UikDy.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Cm4mAEgr.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BV-i5pSj.js";import"./ContextMenuSection-qwJzOA0R.js";import{a as D,M as E}from"./Modal-D5BuN_XT.js";import{H as G}from"./Heading-DXeuEdn1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B8EIY1Jj.js";import"./mergeRefs-DPuRbqjH.js";import"./index-DA6b7LJX.js";import"./useLocalizedStringFormatter-DLiSbhJn.js";import"./context-DmpjBdtt.js";import"./utils-Cuf_iXmO.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-io38-WAj.js";import"./useFocus-BRMNIepO.js";import"./useFocusRing-BEFChVB0.js";import"./useFocusable-BbfkEIfW.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Y4JEbMCH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Zp10QsFY.js";import"./ProgressBar-p6bTWqPO.js";import"./Label-g9pCZyAY.js";import"./Hidden-C5uXlRoq.js";import"./useLabel-DopEiXYz.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B_6hcHr6.js";import"./EmulatedBoldText-FggCtMpU.js";import"./Text-DWcsfeqF.js";import"./AlertIcon-EVvVnOif.js";import"./Action-kq5ASvWE.js";import"./context-BkC5jRlB.js";import"./useStatic-73QSveBS.js";import"./getActionGroupSlot-C5sNvxIx.js";import"./Popover-BTOGgCa7.js";import"./DialogTriggerView-ChCW7gG4.js";import"./Dialog-DycU1Q-J.js";import"./RSPContexts-D2F1j_VZ.js";import"./OverlayArrow-Dvm2kmG0.js";import"./useControlledState-DwQ-hYmo.js";import"./Collection-CsnkEDh_.js";import"./CollectionBuilder-Bu8NYt0R.js";import"./Separator-DEwk_MDL.js";import"./Group-kAvMkrn8.js";import"./SearchField-cM2IEerl.js";import"./FieldError-Ct0jDKO_.js";import"./Form-DT2Igymc.js";import"./useTextField-ByVXoEs-.js";import"./useFormReset-BYGEl6Av.js";import"./TextField-BJiBvQru.js";import"./useEvent-C69ifmQP.js";import"./SelectionManager-B7efpdFx.js";import"./useCollator-CBzKX_g0.js";import"./FocusScope-Cc14swpk.js";import"./VisuallyHidden-iXpVyW0k.js";import"./Switch-BiGragFd.js";import"./Label-8SxsrgrD.js";import"./useToggleState-B2xZ-9_K.js";import"./Overlay-Cx_theUp.js";import"./ButtonView-11hgNZdb.js";import"./Heading-CCkmSZ_4.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
