import{j as r}from"./iframe-CBVsO-nV.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-BYVfnYfe.js";import{L as m}from"./Link-CXp1Cv70.js";import{H as s}from"./HeaderNavigation-BdsGbVZW.js";import{B as o}from"./Button-CsBApO8I.js";import{T as p}from"./Text-4FHUoZpl.js";import{I as B}from"./Image-C1WrErjR.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CvaQf64-.js";import{C as y,M as c}from"./MenuItem-DZWnfNba.js";import{C as A}from"./ContextMenuTrigger-CSJP2QNM.js";import"./ContextMenuSection-CKXjql2z.js";import{a as D,M as E}from"./Modal-BwVrCHqH.js";import{H as G}from"./Heading-CaqOKZxe.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./utils-BP7SriO_.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-tISAzguc.js";import"./useFocus-DaXdFBHM.js";import"./useFocusRing-CMejcKZt.js";import"./useFocusable-BZqSTg_W.js";import"./dynamic-B9g8bFyj.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./ProgressBar-I-zazMLu.js";import"./Label-Bbbf1klh.js";import"./Hidden-CLTlUYi-.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C8nzMZsV.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./AlertIcon-EoMcoZZQ.js";import"./Action-D49cMU0u.js";import"./context-BHCJLPq_.js";import"./useStatic-B-RdiA9k.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./Popover-BoMfAEAN.js";import"./useOverlayController-bzn2dAFT.js";import"./OverlayContextProvider-Cs-mhJj1.js";import"./Dialog-CSsaqFoB.js";import"./RSPContexts-DsHkjJhu.js";import"./OverlayArrow-D5IM8mFd.js";import"./useControlledState-CX82Bv9G.js";import"./Collection-D1Yf9Sy6.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./SelectionIndicator-DFyYkHVA.js";import"./Separator-Cet5gXTt.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";import"./ClearPropsContextView-QpnEsTY7.js";import"./ClearPropsContext-5iY_SzG7.js";import"./Switch-D3R7_kcc.js";import"./useFieldComponent-BL--pJL1.js";import"./react-children-utilities-Da5w6g_X.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-D1yavyON.js";import"./useToggleState-DPC5joeI.js";import"./useFormReset-0NTNnrBe.js";import"./OverlayTrigger-BJ_N81ja.js";import"./ControlledNotification-BO8wBLSg.js";import"./DialogTriggerView-C6Eyk5Ah.js";import"./Overlay-C-RIgIak.js";import"./ButtonView-DE7isBEP.js";import"./Heading-Dr3JxnqR.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=e.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const io=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,io as __namedExportsOrder,to as default};
