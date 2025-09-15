import{j as r}from"./iframe-DSkJqBaJ.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CVH07XBs.js";import{L as m}from"./Link-BHQ0bz3X.js";import{H as s}from"./HeaderNavigation-B-HxwEpE.js";import{B as o}from"./Button-CDKKJ9Lp.js";import{T as p}from"./Text-DEYyJHCZ.js";import{I as C}from"./Image-BtHY9X7M.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-D-1mjWGh.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CPE9dPgT.js";import"./ContextMenuSection-_Bs9Wxdx.js";import{a as D,M as E}from"./Modal-KGvigy-L.js";import{H as G}from"./Heading-C3BqIrHn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjRPgLoo.js";import"./mergeRefs-Z8wKoPrZ.js";import"./index-CL0qA5Bh.js";import"./useLocalizedStringFormatter-D8TjtXwl.js";import"./context-BGjjWy4a.js";import"./utils-1-N0d2c9.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-D7WkZjMs.js";import"./useFocus-G_FCb5od.js";import"./useFocusRing-CxQcEY3i.js";import"./useFocusable-DnFOFct-.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Cpke26nP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D_WSnJ-T.js";import"./ProgressBar-CSEftjVr.js";import"./Label-C14Bap2a.js";import"./Hidden-4KMmbp7C.js";import"./useLabel-IHONIae1.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D8d4HdJF.js";import"./EmulatedBoldText-CY4h7UZj.js";import"./Text-BLRpFskM.js";import"./AlertIcon-CGfyXbw6.js";import"./Action-BQB4Vs5h.js";import"./context-C-BSE4mB.js";import"./useStatic-B7cHRXbC.js";import"./getActionGroupSlot-I0QCsr-6.js";import"./Popover-BMgBLYYV.js";import"./DialogTriggerView-BZLzPo95.js";import"./Dialog-DxHA7eu_.js";import"./RSPContexts-DQKO52xl.js";import"./OverlayArrow-Bs3dimZg.js";import"./useControlledState-BYdmrjiu.js";import"./Collection-DAtUHX6x.js";import"./CollectionBuilder-BxVvMuh2.js";import"./Separator-CM2q7_wH.js";import"./Group-3xm6Vzmn.js";import"./SearchField-COlgHc0W.js";import"./FieldError-VY00PX4H.js";import"./Form--wHsDFUK.js";import"./useTextField-D7V5JJBm.js";import"./useFormReset-Dcdsxz2S.js";import"./TextField-MvldIgrc.js";import"./useEvent-cDDpRPoS.js";import"./SelectionManager-B8u4m53M.js";import"./useCollator-DnEaXEjZ.js";import"./FocusScope-CsPDgYW_.js";import"./VisuallyHidden-BCoHKLFo.js";import"./Switch-CBt00r0q.js";import"./Label-C19pMB8k.js";import"./useToggleState-D1-WcXga.js";import"./Overlay-mgWpGZOg.js";import"./ButtonView-C6FU7lZ-.js";import"./Heading-1Ap11lE6.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
