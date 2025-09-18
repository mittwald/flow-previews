import{j as r}from"./iframe-MfQSddZq.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CP6VaQZL.js";import{L as m}from"./Link-DpvvvaIV.js";import{H as s}from"./HeaderNavigation-7F1H-Wdh.js";import{B as o}from"./Button-CXZWinZX.js";import{T as p}from"./Text-UwmO1_LL.js";import{I as C}from"./Image-BpviXMps.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C54MLrgO.js";import{a as y,C as A,M as c}from"./ContextMenuContent-ryZhlQgO.js";import"./ContextMenuSection-B-AL25Gs.js";import{a as D,M as E}from"./Modal-Cu97KUUh.js";import{H as G}from"./Heading-De15SUL4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-YGAsF_lo.js";import"./mergeRefs-D31Pk4Ta.js";import"./index-0BR1sey0.js";import"./useLocalizedStringFormatter-DuRjiXAD.js";import"./context-sxseT2gC.js";import"./utils-CF_tf6Cs.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Bu3yAehE.js";import"./useFocus-CxcaXJfN.js";import"./useFocusRing-DF4UiXkf.js";import"./useFocusable-DPxyYzAu.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BBIckw2_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Br-9CQSd.js";import"./ProgressBar-zSuzGCCN.js";import"./Label-DLpcVX-r.js";import"./Hidden-DKR3rgXU.js";import"./useLabel-BGyOt14X.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BU-cRKf1.js";import"./EmulatedBoldText-B3c3-PLP.js";import"./Text-CWf2hLST.js";import"./AlertIcon-CGHj9Esu.js";import"./Action-CY1G2yFR.js";import"./context-6MsjwYoY.js";import"./useStatic-BZhX7pn2.js";import"./getActionGroupSlot-Db9GcvAo.js";import"./Popover-D-Bgp8L1.js";import"./DialogTriggerView-CQyF4Z23.js";import"./Dialog-BeFP_b5_.js";import"./RSPContexts-XbeDUJEH.js";import"./OverlayArrow-CjYCja9D.js";import"./useControlledState-C4XOt-mm.js";import"./Collection-DIan0_PG.js";import"./CollectionBuilder-DTZJMA-R.js";import"./Separator-CUz3MRZ1.js";import"./Group-BQ9WJhL1.js";import"./SearchField-D_EUMNnm.js";import"./FieldError-DZKq6jul.js";import"./Form-DVtgW9Vh.js";import"./useTextField-B4Sx1pdV.js";import"./useFormReset-DZNBd5mO.js";import"./TextField-D1Wfh07Y.js";import"./useEvent-yqplpnvs.js";import"./SelectionManager-CN4BV5dR.js";import"./useCollator-DRmYCL8E.js";import"./FocusScope-CMbYg7QE.js";import"./VisuallyHidden-Civfar1x.js";import"./Switch-BmYQ-KlM.js";import"./Label-B0eem2YN.js";import"./useToggleState-DtvbxxwG.js";import"./Overlay-DyWL_zkW.js";import"./ButtonView-DENCjhia.js";import"./Heading-CP270fwA.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
