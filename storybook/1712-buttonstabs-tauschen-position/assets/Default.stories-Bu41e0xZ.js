import{j as r}from"./iframe-DLPMA2Jy.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-BZNHqQOv.js";import{L as m}from"./Link-D-l9kzT5.js";import{H as s}from"./HeaderNavigation-CXCHFD5H.js";import{B as o}from"./Button-Bg9EI6ke.js";import{T as p}from"./Text-BHcv_RSt.js";import{I as C}from"./Image-CcTVsWix.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CtDt7tvF.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CY2PN8MV.js";import"./ContextMenuSection-CfQ2STgX.js";import{a as D,M as G}from"./Modal-DKenU2A4.js";import{H as E}from"./Heading-aUvczpdy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./context-BFBvnlV1.js";import"./utils-b1QyYEgl.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DwtsQH2c.js";import"./useFocus-rX-PXuLl.js";import"./useFocusRing-DFqScG39.js";import"./useFocusable-CToQXnw-.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BpI0Au67.js";import"./Button-D9zXVRa2.js";import"./ProgressBar-DSj6SBtF.js";import"./Label-tqYGMXcy.js";import"./Hidden-Ba5oTT5z.js";import"./useLabel-D3WVZ9yP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Bc43_gVJ.js";import"./EmulatedBoldText-BMpcVoTB.js";import"./Text-DL4PvoSo.js";import"./AlertIcon-DxN2Aj_q.js";import"./Action-BCWbF5ob.js";import"./context-DC5SRHlZ.js";import"./useStatic-m6uLMmhn.js";import"./getActionGroupSlot-C-GBSGDA.js";import"./Popover-BbAmJ5oq.js";import"./DialogTriggerView-DAw6tYdk.js";import"./Dialog-ClROTFho.js";import"./RSPContexts-ClqXx4oa.js";import"./OverlayArrow-3BLRTQic.js";import"./useControlledState-Btp8qCFq.js";import"./Collection-B7eLtKl3.js";import"./CollectionBuilder-CE08yFAM.js";import"./Separator-BudPJPnA.js";import"./Group-CGwZZGNH.js";import"./SearchField-CSx5BdQ3.js";import"./FieldError-Cgq9toxC.js";import"./Form-DfIg0xpy.js";import"./useTextField-CpoClV52.js";import"./useFormReset-L6ko3eQg.js";import"./TextField--NLdPxFk.js";import"./useEvent-PyKag1Em.js";import"./SelectionManager-D0ySastt.js";import"./useCollator-DMUqz4RZ.js";import"./FocusScope-DA4TfNEK.js";import"./VisuallyHidden-C4Kk4Esh.js";import"./Switch-CyR4zabA.js";import"./Label-njveXq1g.js";import"./useToggleState-CIU19LON.js";import"./Overlay-DE-gOvxy.js";import"./Header-BIme-Ldf.js";import"./ButtonView-B9Lv51Nt.js";import"./Heading-DVrRK9po.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
