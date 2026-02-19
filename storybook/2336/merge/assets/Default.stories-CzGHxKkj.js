import{j as r}from"./iframe-C9fwoqx7.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-slnz76yl.js";import{L as m}from"./Link-D5CGaOxT.js";import{H as s}from"./HeaderNavigation-Cc4BgTBb.js";import{B as o}from"./Button-C7pOzOnK.js";import{T as p}from"./Text-D7jvp7G5.js";import{I as h}from"./Image-BomHH_vX.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BBvzb8nH.js";import{C as M,M as c}from"./MenuItem-CLEGhsrf.js";import{C as I}from"./ContextMenuTrigger-pcUqU5Yg.js";import"./ContextMenuSection-7efUiUyi.js";import{M as T}from"./ModalTrigger-BOCAbNZi.js";import{M as k}from"./Modal-C8ANx43-.js";import{H}from"./Heading-XseMYyRS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./remote-B-ZPT6P_.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./context-C2ecxi5G.js";import"./utils-Cx2L-iDs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CMKZ5vES.js";import"./usePress-tgKXO9PL.js";import"./useFocusRing-s7_3pCWo.js";import"./useFocusable-CQiYog1P.js";import"./dynamic-CY0EsCod.js";import"./LoadingSpinner-BWPVzhoG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DDn45mdd.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./useLabel-BNdvaiV7.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B4JTTu9h.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./Text-xqSfQxLT.js";import"./AlertIcon-Bz6wfr4x.js";import"./ActionBatch-CR9CogXJ.js";import"./useOverlayController-CqYUXVnh.js";import"./useStatic-9-ugXzKa.js";import"./getActionGroupSlot-CBhaOaw2.js";import"./Popover-BDNR50NM.js";import"./OverlayContextProvider-DAx33Jid.js";import"./Dialog-yhzZwH_k.js";import"./RSPContexts-mF4XBTs4.js";import"./OverlayArrow-DDmkn5_8.js";import"./useControlledState-BJuMvqvK.js";import"./Collection-C29JJn0j.js";import"./CollectionBuilder-ta_UQL8r.js";import"./SelectionIndicator-nEc_xgxs.js";import"./Separator-ykHU2h0d.js";import"./SelectionManager-D2Ty-b9W.js";import"./useEvent-bSDrPC6p.js";import"./useCollator-CTWpXcx6.js";import"./FocusScope-Ci8EWXmX.js";import"./VisuallyHidden-1IKUNS-e.js";import"./Switch-JwnbJ_nJ.js";import"./useFieldComponent-HwWxBPXP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dn3Lmpqk.js";import"./useFormReset-Bm_Lqolg.js";import"./OverlayTrigger-BodK83ZQ.js";import"./DialogTriggerView-B0ztqFBx.js";import"./Overlay-30FGwbPI.js";import"./ButtonView-D2KaEV6n.js";import"./Flex-kDlMb8kM.js";import"./Heading-eUAAoI_I.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
