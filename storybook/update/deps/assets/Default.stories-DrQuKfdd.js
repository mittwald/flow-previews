import{j as r}from"./iframe-CPpiztA9.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-DGFg2xah.js";import{L as m}from"./Link-Cwf-Yfzv.js";import{H as s}from"./HeaderNavigation-CsNTdylS.js";import{B as o}from"./Button-C-ub_lVB.js";import{T as p}from"./Text-B9GDlRIl.js";import{I as C}from"./Image-CWSXzhFN.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DHRNRBkX.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CyFYpMU0.js";import"./ContextMenuSection-DpVNIsXF.js";import{a as D,M as G}from"./Modal-CpiWpv20.js";import{H as E}from"./Heading-COPT6b_C.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgD2VZvZ.js";import"./mergeRefs-CY9oKSjb.js";import"./index-CXr5LMa8.js";import"./useLocalizedStringFormatter-CcOUbIQp.js";import"./context-Dtd4A8DJ.js";import"./utils-DXg4ziAt.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Bn1QFLmx.js";import"./useFocus-f0syXR1u.js";import"./useFocusRing-ryN7bem9.js";import"./useFocusable-BdzC7gBh.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CgYhtYh1.js";import"./Button-BpRzT99M.js";import"./ProgressBar-BJkoGjLL.js";import"./Label-DrzbYkyA.js";import"./Hidden-bVSOJLMB.js";import"./useLabel-CbuGYTDm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CCSZxPxO.js";import"./EmulatedBoldText-49ZPQjyJ.js";import"./Text-D73bWKdR.js";import"./AlertIcon-Decio1kG.js";import"./Action-Bo4rmNqt.js";import"./context-C5LerLhv.js";import"./useStatic-DpS3r3sC.js";import"./getActionGroupSlot-Dzp14r5x.js";import"./Popover-CWZaEHAV.js";import"./DialogTriggerView-jBIZNPKp.js";import"./Dialog-CUla8htU.js";import"./RSPContexts-CFiizNM1.js";import"./OverlayArrow-p4WTGnf4.js";import"./useControlledState-CvPFcFpa.js";import"./Collection-rnaxRpPP.js";import"./CollectionBuilder-B0lIXlwM.js";import"./Separator-CbcELXN4.js";import"./Group-BazAvpcu.js";import"./SearchField-BSkiBWnk.js";import"./FieldError-DNVX5F1U.js";import"./Form-BF7n3RGH.js";import"./useTextField-B-d085GV.js";import"./useFormReset-MeUe0mbs.js";import"./TextField-CdnmB6pT.js";import"./useEvent-BZyVmUT6.js";import"./SelectionManager-CwCMliWC.js";import"./useCollator-B-f7_yfw.js";import"./FocusScope-mK0EKnGk.js";import"./VisuallyHidden-DQWk5n-D.js";import"./Switch-BWLZBzy0.js";import"./Label-BGSD1rhi.js";import"./useToggleState-caQpWwOD.js";import"./Overlay-bqopPlV6.js";import"./Header-M4JmWQ1C.js";import"./ButtonView-yBWSjOyV.js";import"./Heading-C7g1szTV.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
