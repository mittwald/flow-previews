import{j as r}from"./iframe-DOyiym2O.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-DM4ryx1N.js";import{L as m}from"./Link-CGlj800S.js";import{H as s}from"./HeaderNavigation-DQI4VQr8.js";import{B as o}from"./Button-Dhe1yso8.js";import{T as p}from"./Text-DNTWXR5k.js";import{I as C}from"./Image-Da3OUoYi.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-B2ug1YDR.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CMjf41T9.js";import"./ContextMenuSection-Bkzf7edI.js";import{a as D,M as G}from"./Modal-BXVqdtU_.js";import{H as E}from"./Heading-D47GxrRc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYw3-7_y.js";import"./mergeRefs-oR_2TdTx.js";import"./index-CmB0dnpi.js";import"./useLocalizedStringFormatter-LAQIr2PZ.js";import"./context-DNMunrTn.js";import"./utils-p6TFjs22.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-U0v1W6r8.js";import"./useFocus-CRPlmaKe.js";import"./useFocusRing-wEjsdZUW.js";import"./useFocusable-CF6DJuo2.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-egM8r-vP.js";import"./Button-lDf0mDtZ.js";import"./ProgressBar-DwMxj3po.js";import"./Label-gKLM5Ku1.js";import"./Hidden-BJphBd81.js";import"./useLabel-DjTxglfT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Cgs4Q9ZH.js";import"./EmulatedBoldText-npPiHGdu.js";import"./Text-Db2PSOfB.js";import"./AlertIcon-CQ3BB5GT.js";import"./Action-B1c9MoHY.js";import"./context-y7iGkUpV.js";import"./useStatic-BqyjIn97.js";import"./getActionGroupSlot-Cqvvv9Ww.js";import"./Popover-O9vM2Bhw.js";import"./DialogTriggerView-D4vNWmaM.js";import"./Dialog-CZhNJUBb.js";import"./RSPContexts-B59Hd7Xy.js";import"./OverlayArrow-DUzOkRZT.js";import"./useControlledState-CTI65F-h.js";import"./Collection-BIknmaaI.js";import"./CollectionBuilder-MitjRKQw.js";import"./Separator-DGoHVraj.js";import"./Group-BsZagJvP.js";import"./SearchField-B3q2UkIK.js";import"./FieldError-e9k0WgIs.js";import"./Form-D7si9Qjh.js";import"./useTextField-CDeIHIKC.js";import"./useFormReset-D392FMdG.js";import"./TextField-DJtp4_Iq.js";import"./useEvent-DhVC8KrJ.js";import"./SelectionManager-BoGC0shM.js";import"./useCollator-BKrnVFMg.js";import"./FocusScope-BYeNXI2v.js";import"./VisuallyHidden-DEjaPn8D.js";import"./Switch-CVDwgCxd.js";import"./Label-DGNkT8gh.js";import"./useToggleState-CdNeLvbi.js";import"./Overlay-C6cSwK3Z.js";import"./Header-DGeOK2a-.js";import"./ButtonView-DnvcBrIh.js";import"./Heading-C2y325QX.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
