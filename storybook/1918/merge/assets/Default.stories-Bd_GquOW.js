import{j as r}from"./iframe-CbGYfYhl.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-DbjMP3z5.js";import{L as m}from"./Link-Cl1AMoZr.js";import{H as s}from"./HeaderNavigation-CrDddpTC.js";import{B as o}from"./Button-Gcjkh2he.js";import{T as p}from"./Text-OS1-aGym.js";import{I as C}from"./Image-zEqh1WpH.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BqaP-FlA.js";import{a as y,C as A,M as c}from"./ContextMenuContent-41w8T_sr.js";import"./ContextMenuSection-COmeM-5Q.js";import{a as D,M as E}from"./Modal-C3aPfb5d.js";import{H as G}from"./Heading-CwkEWkPk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./context-DrN7EfSG.js";import"./utils-Bta_km8V.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-B6TDm-Ku.js";import"./useFocus-CgyMmhEU.js";import"./useFocusRing-D3ulEQrZ.js";import"./useFocusable-CdHr2TzL.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BIdUmOnp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-dGVmYdyu.js";import"./ProgressBar-C2FOdX6j.js";import"./Label-CQ-8Wai_.js";import"./Hidden-CH7YYats.js";import"./useLabel-D6vayTQl.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CJ8QzV59.js";import"./EmulatedBoldText-CQSaLX8r.js";import"./Text-B56mlhY7.js";import"./AlertIcon-OBS66cIc.js";import"./Action-QD7EalEG.js";import"./context-J2lB5nq9.js";import"./useStatic-CDZ8mZeU.js";import"./getActionGroupSlot-DTlXxCo0.js";import"./Popover-AInzHW1-.js";import"./DialogTriggerView-BAlepQJB.js";import"./Dialog-DWI3Gb4X.js";import"./RSPContexts-CWauLjE1.js";import"./OverlayArrow-CAzhQBDT.js";import"./useControlledState-Ckf81dN5.js";import"./Collection-CnCkxRBF.js";import"./CollectionBuilder-zI7nOiFC.js";import"./Separator-BL4Cqy6R.js";import"./Group-G140fFme.js";import"./SearchField-0rw3SXHS.js";import"./FieldError-CCN5oAXI.js";import"./Form-dHMqMIPi.js";import"./useTextField-ONw8H3cW.js";import"./useFormReset-knQsHZrP.js";import"./TextField-DGs8gg6j.js";import"./useEvent-BrHW1E5Z.js";import"./SelectionManager-C3iuS2jK.js";import"./useCollator-B95zPweT.js";import"./FocusScope-CXp1mWOp.js";import"./VisuallyHidden-BDzAgjFk.js";import"./Switch-CYU4Cetv.js";import"./Label-ChSLebPR.js";import"./useToggleState-CKEjHtck.js";import"./Overlay-CNaq3uLT.js";import"./ButtonView-DrD4LYA7.js";import"./Heading-Cd40tbYh.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
