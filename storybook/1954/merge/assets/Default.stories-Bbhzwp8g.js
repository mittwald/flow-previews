import{j as r}from"./iframe-BGMqIB5E.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-mDCCMBSQ.js";import{L as m}from"./Link-C3hDmnXo.js";import{H as s}from"./HeaderNavigation-qEKcUTya.js";import{B as o}from"./Button-BFNUJ6Pn.js";import{T as p}from"./Text-CM0LFMBt.js";import{I as C}from"./Image-00WqPElF.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-B1LqQTcb.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BbEuFnKc.js";import"./ContextMenuSection-BRkwmJ70.js";import{a as D,M as E}from"./Modal-6EZ_To74.js";import{H as G}from"./Heading-Cd14u_S6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C4OPXOmf.js";import"./mergeRefs-CgaIg7wx.js";import"./index-C87vJZqt.js";import"./useLocalizedStringFormatter-B2NVTRrQ.js";import"./context-C9jpkMPH.js";import"./utils-DSJ2fpWd.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DciW20d_.js";import"./useFocus-DimIAfL3.js";import"./useFocusRing-Ch_kecTs.js";import"./useFocusable-DsCZ72OQ.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CFmqrQ7U.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C2r7IuQP.js";import"./ProgressBar-D-EmigOC.js";import"./Label-CQRoenrp.js";import"./Hidden-BlXCfqaN.js";import"./useLabel-DEWKGCco.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BSs9Ljwu.js";import"./EmulatedBoldText-fvHudQk4.js";import"./Text-BM4jLh1h.js";import"./AlertIcon-DmgxZTob.js";import"./Action-l33eddTn.js";import"./context-FbZS6Lb6.js";import"./useStatic-ERGKGHTj.js";import"./getActionGroupSlot-CZh9r0M7.js";import"./Popover-C0n8OrmN.js";import"./DialogTriggerView-DGq9KeX3.js";import"./Dialog-hZ8yeQT4.js";import"./RSPContexts-W4yDCNDw.js";import"./OverlayArrow-BCKhjmtK.js";import"./useControlledState-CyFiZ_AX.js";import"./Collection-CCbdzQqw.js";import"./CollectionBuilder-CvszDNI1.js";import"./Separator-DQBycTyN.js";import"./Group-Cwbp1Rxy.js";import"./SearchField-BGYYvbmv.js";import"./FieldError-ClTlFvX2.js";import"./Form-DIhLFb81.js";import"./useTextField-0bIYzpQ5.js";import"./useFormReset-CGt1BQBC.js";import"./TextField-B67QJCcl.js";import"./useEvent-CUMNl0wi.js";import"./SelectionManager-Ci5onPc0.js";import"./useCollator-CDcEI0Bz.js";import"./FocusScope-DJHRiFNO.js";import"./VisuallyHidden-C_NToHIT.js";import"./Switch-DzF6FmIv.js";import"./Label-ayGMhYtP.js";import"./useToggleState-DuAIITc3.js";import"./Overlay-D7C8YAnw.js";import"./ButtonView-TPA-ggPr.js";import"./Heading-C0F57RmY.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
