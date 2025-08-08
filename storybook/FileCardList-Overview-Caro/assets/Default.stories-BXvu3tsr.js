import{j as r}from"./iframe-BBgxZ9_Z.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-8HHOdEAt.js";import{L as m}from"./Link-iu9eKawv.js";import{H as s}from"./HeaderNavigation-B2oaXwwB.js";import{B as o}from"./Button-B-lzkDqv.js";import{T as p}from"./Text-DGcNKUf7.js";import{I as C}from"./Image-CjS9ppQ2.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-L9BrQk8n.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BQ9g8yNm.js";import"./ContextMenuSection-DX6nVWXX.js";import{a as D,M as G}from"./Modal-BJrkY0nI.js";import{H as E}from"./Heading-Bdm7kJ9W.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IdqCMJT1.js";import"./mergeRefs-BLmxAuNF.js";import"./index-BhvP9-i6.js";import"./useLocalizedStringFormatter-oXVl5QY8.js";import"./context-1V9oDOBq.js";import"./utils-MwuRBPAU.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DTZ5yxFT.js";import"./useFocus-BbdsXgPj.js";import"./useFocusRing-LpVKnpiI.js";import"./useFocusable-CfVMEKsh.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-AMSMSqlY.js";import"./Button-CYTZuBnH.js";import"./ProgressBar-DwujBMLa.js";import"./Label-Di9QaZZ3.js";import"./Hidden-k-QU5_bv.js";import"./useLabel-CtD9pvoh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-XdNXsdMD.js";import"./EmulatedBoldText-Bf9Yi8oc.js";import"./Text-D0NxCgiz.js";import"./AlertIcon-CH5FEca7.js";import"./Action-DpyN5NaX.js";import"./context-D62hB718.js";import"./useStatic-C_mBRxHK.js";import"./getActionGroupSlot-Ct403QjR.js";import"./Popover-DIVeWh25.js";import"./DialogTriggerView-DMvHVVad.js";import"./Dialog-DclGznPM.js";import"./RSPContexts-3v3yZrnH.js";import"./OverlayArrow-CFHpk9vq.js";import"./useControlledState-DynQBW6H.js";import"./Collection-yBxX2uBM.js";import"./CollectionBuilder-Cikntfcr.js";import"./Separator-DwoBWJxO.js";import"./Group-ChejVHkC.js";import"./SearchField-D1XEYmSH.js";import"./FieldError-W_6exYVC.js";import"./Form-CxmcAuRx.js";import"./useTextField-QvIlaKbq.js";import"./useFormReset-BmT_Xdgp.js";import"./TextField-DQ00G_WY.js";import"./useEvent-CAp5Jueq.js";import"./SelectionManager-DEhn8O5H.js";import"./useCollator--BNdDS58.js";import"./FocusScope-CjT2Rvcj.js";import"./VisuallyHidden-DzvMb3_B.js";import"./Switch-DdvK5Bdb.js";import"./Label-CMgPNz6D.js";import"./useToggleState-cndI-PiK.js";import"./Overlay-UmdEZvKq.js";import"./Header-BuqVIN2C.js";import"./ButtonView-Cvn9bSS6.js";import"./Heading-B8IOml0A.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
