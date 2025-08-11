import{j as r}from"./iframe-Cvd7_oGo.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-x_Sg-cyk.js";import{L as m}from"./Link-C_V13rNI.js";import{H as s}from"./HeaderNavigation-CwDvqgfx.js";import{B as o}from"./Button-sQLGDwHF.js";import{T as p}from"./Text-hU5scIVG.js";import{I as C}from"./Image-DwBnwCRv.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-oRyojUAI.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BprI2VSw.js";import"./ContextMenuSection-D36-o_RP.js";import{a as D,M as G}from"./Modal-BgPEX-yG.js";import{H as E}from"./Heading-B-L-D_0d.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./context-CPCW_rIy.js";import"./utils-DLoLmG8U.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-dFXSg5ro.js";import"./useFocus-mBCJQH3P.js";import"./useFocusRing-BORhh_J0.js";import"./useFocusable-ow-zpXhZ.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CO56yyEM.js";import"./Button-DH0dq0mD.js";import"./ProgressBar-Cckw_t5H.js";import"./Label-CEN2LQcE.js";import"./Hidden-DIqvoFI_.js";import"./useLabel-C20I_MYv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Dthgcr78.js";import"./EmulatedBoldText-DDsUBT92.js";import"./Text-K3zhr9uI.js";import"./AlertIcon-bSN5b0uQ.js";import"./Action-BDVxDuzM.js";import"./context-BKPp0JFq.js";import"./useStatic-JoVb8Rwt.js";import"./getActionGroupSlot-Bjasv4sz.js";import"./Popover-B4_hLkvX.js";import"./DialogTriggerView-BfIhiSrv.js";import"./Dialog-B6nmokeD.js";import"./RSPContexts-BNHCum3R.js";import"./OverlayArrow-CZl6Sdtq.js";import"./useControlledState-BRJHAPjA.js";import"./Collection-BUlFfF8c.js";import"./CollectionBuilder-odsoNS1P.js";import"./Separator-UXxAVoEs.js";import"./Group-Dp7absvN.js";import"./SearchField-DmWHOfIU.js";import"./FieldError-BOfQUrOF.js";import"./Form-dIwvv5i0.js";import"./useTextField-DuBMDIMm.js";import"./useFormReset-TshWv7lU.js";import"./TextField-DNfwYwAs.js";import"./useEvent-CHUYW4wm.js";import"./SelectionManager-C8UQ25IV.js";import"./useCollator-Z2E5mfuy.js";import"./FocusScope-_f1yOmDv.js";import"./VisuallyHidden-ZBger3GJ.js";import"./Switch-BZ4l6SgY.js";import"./Label-DZmXl-gv.js";import"./useToggleState-d8PRqsnQ.js";import"./Overlay-BO2pLsV5.js";import"./Header-DgomehOg.js";import"./ButtonView-CbIavsOL.js";import"./Heading-CH9Zg8Ky.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
