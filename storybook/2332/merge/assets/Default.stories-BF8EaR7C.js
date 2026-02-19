import{j as r}from"./iframe-CXQlTNqj.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-qWu7I_Pu.js";import{L as m}from"./Link-CJD93-tw.js";import{H as s}from"./HeaderNavigation-CfeWqpT6.js";import{B as o}from"./Button-BlafpMbq.js";import{T as p}from"./Text-B3somVi7.js";import{I as h}from"./Image-Dj0XDsvv.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DMf63unF.js";import{C as M,M as c}from"./MenuItem-BFzkdxhd.js";import{C as I}from"./ContextMenuTrigger-BNYTsfXo.js";import"./ContextMenuSection-nZf_hQYT.js";import{M as T}from"./ModalTrigger-Bx7mBbkS.js";import{M as k}from"./Modal-yrBxLTE3.js";import{H}from"./Heading-NHDwQUXa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./index-AYGk-Z4X.js";import"./remote-aElBUAr6.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./context-CCBj18N5.js";import"./utils-DV_byzth.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DfPsdBQQ.js";import"./usePress-C3E8Ss2p.js";import"./useFocusRing-D1AlgOvW.js";import"./useFocusable-D7YkDf-E.js";import"./dynamic-UE7lg7x0.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BcwVzCcr.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./useLabel-DrjDs4EL.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C0g7jXxm.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./Text-QCBVP_aW.js";import"./AlertIcon-B77GTCGL.js";import"./ActionBatch-CqBtrpsE.js";import"./useOverlayController-E6hXP07l.js";import"./useStatic-D-kx8TMY.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./Popover-Dd_o8eTz.js";import"./OverlayContextProvider-97FigBld.js";import"./Dialog-D3U2a9zn.js";import"./RSPContexts-CaXq0cAk.js";import"./OverlayArrow-sIEanX_d.js";import"./useControlledState-CC0ueLns.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./VisuallyHidden-bRUw4X6B.js";import"./Switch-BmjUPv22.js";import"./useFieldComponent-Cn71_kOc.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-HYmQ2FA-.js";import"./useFormReset-BDdgSN6q.js";import"./OverlayTrigger-CeJmnxGE.js";import"./DialogTriggerView-BqG-pPuD.js";import"./Overlay-DpNQvUDC.js";import"./ButtonView-CW0bd9Hv.js";import"./Flex-BrEPexUM.js";import"./Heading-D8oa06Vc.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
