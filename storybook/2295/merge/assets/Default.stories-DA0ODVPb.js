import{j as r}from"./iframe-D016uj-S.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BQBcHsun.js";import{L as m}from"./Link-6VlT22uZ.js";import{H as s}from"./HeaderNavigation-YN572oGr.js";import{B as o}from"./Button-DbVylex6.js";import{T as p}from"./Text-BZY8Sc_P.js";import{I as h}from"./Image-CJ6g7YAe.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CQ_8nHar.js";import{C as M,M as c}from"./MenuItem-CLOhyzyJ.js";import{C as I}from"./ContextMenuTrigger-Tfu4Sb-o.js";import"./ContextMenuSection-eBZWNBFV.js";import{a as T,M as k}from"./Modal-mhxUy__b.js";import{H}from"./Heading-DfZlNpH0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./index-BqMc4IgT.js";import"./remote-CBH6kE0Y.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./context-CQQzrfiw.js";import"./utils-DQASSsuC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-tZAxz16O.js";import"./usePress-CVzN9kXH.js";import"./useFocusRing-BdU2-3MK.js";import"./useFocusable-DeuIjFJe.js";import"./dynamic-7WCHGigE.js";import"./LoadingSpinner-Dcve79PX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cna7ldBx.js";import"./ProgressBar-CXPYtOXa.js";import"./Label-LkWds508.js";import"./Hidden-DpSCwLxf.js";import"./useLabel-DeeX-PEx.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DLaO_aqG.js";import"./EmulatedBoldText-CEIO41Nr.js";import"./Text-DsGfukAy.js";import"./AlertIcon-DUg_mU1Z.js";import"./Action-DF_37S4W.js";import"./context-BESBZ1Rk.js";import"./useStatic-Bbhetyj1.js";import"./getActionGroupSlot-DwZ8TTEt.js";import"./Popover-CgttP64x.js";import"./useOverlayController-CJl6-XZL.js";import"./OverlayContextProvider-CUXBFq_J.js";import"./Dialog-ptAcXQW8.js";import"./RSPContexts-CjK5iojx.js";import"./OverlayArrow-BzkfNGFW.js";import"./useControlledState-cpMkF7RC.js";import"./Collection-BcXzzjbm.js";import"./CollectionBuilder-BgjMiTt7.js";import"./SelectionIndicator-BhBccG1G.js";import"./Separator-ByOk2cbm.js";import"./SelectionManager--rP1hhHv.js";import"./useEvent-BgqC1tZY.js";import"./useCollator-JAzbZwM3.js";import"./FocusScope-DtVgD18c.js";import"./VisuallyHidden-D5-LZtaI.js";import"./Switch-BTUJ0FEt.js";import"./useFieldComponent-OnEMgUvv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D4EsrsUN.js";import"./useFormReset-BG0U5_Pu.js";import"./OverlayTrigger-D4-Q-rZX.js";import"./DialogTriggerView-DktHJN3u.js";import"./Overlay-BdGYd4q5.js";import"./ButtonView-8kA9VB7F.js";import"./Flex-D5jFCHpe.js";import"./Heading-CKF5Rm78.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
