import{j as r}from"./iframe-teIxY4wP.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-C8c-iA3p.js";import{L as m}from"./Link-BvNtJdb1.js";import{H as s}from"./HeaderNavigation-DLK1o0_q.js";import{B as o}from"./Button-CCmGuoae.js";import{T as p}from"./Text-CB74-0Ir.js";import{I as h}from"./Image-C6K8FzMl.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BzBo61eF.js";import{C as M,M as c}from"./MenuItem-N2DhByKP.js";import{C as I}from"./ContextMenuTrigger-DiTJhkyZ.js";import"./ContextMenuSection-DZpqaSo0.js";import{M as T}from"./ModalTrigger-CM8Nq-K-.js";import{M as k}from"./Modal-asH2HsR2.js";import{H}from"./Heading-BcZ49Txx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./index-SbFVnFKt.js";import"./remote-DC3yMzFm.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./context-Bkxu1haQ.js";import"./utils-C8wUhSun.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Pnl5w-Ue.js";import"./usePress-Znh85jsw.js";import"./useFocusRing-DM5Gti31.js";import"./useFocusable-C4kMCM88.js";import"./dynamic-Bd0vnJCs.js";import"./LoadingSpinner-CKqfIoaL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DPcEERaP.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./useLabel-BwGc14jy.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-ClA0f7pc.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./Text-BEd6-Qqe.js";import"./AlertIcon-nbGMee0S.js";import"./ActionBatch-BzoAcrhu.js";import"./useOverlayController-2V9dFGfh.js";import"./useStatic-JzrpAx77.js";import"./getActionGroupSlot-BwsAD19l.js";import"./Popover-Bc-eSFBz.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./Dialog-CPTLkUM-.js";import"./RSPContexts-DVypfZug.js";import"./OverlayArrow-BnOVUBMe.js";import"./useControlledState-Dnjkc9fO.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./VisuallyHidden-BEOGf6u-.js";import"./Switch-Dr6c_rSV.js";import"./useFieldComponent-DaZL5efl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZeRsjuB.js";import"./useFormReset-DcLCq2Kv.js";import"./OverlayTrigger-DxY4DuAp.js";import"./DialogTriggerView-BtIzNN9l.js";import"./Overlay-C9X8JugR.js";import"./ButtonView-JoXTWy5r.js";import"./Flex-B1uMy55R.js";import"./Heading-CqSJbJuk.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
