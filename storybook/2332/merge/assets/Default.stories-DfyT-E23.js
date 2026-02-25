import{j as r}from"./iframe-DG8PGYI2.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-SSUZ9dob.js";import{L as m}from"./Link-BYvDMLq1.js";import{H as s}from"./HeaderNavigation-DeAsrHTq.js";import{B as o}from"./Button-DsdihroW.js";import{T as p}from"./Text-DXfg_t75.js";import{I as h}from"./Image-DfHyCP5L.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BgmulRyb.js";import{C as M,M as c}from"./MenuItem-DjMrLz3z.js";import{C as I}from"./ContextMenuTrigger-qWYNgQ1A.js";import"./ContextMenuSection-BKYmu9Je.js";import{M as T}from"./ModalTrigger-BDXpcZAX.js";import{M as k}from"./Modal-D9mRgYws.js";import{H}from"./Heading-C3VOV3Fz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./index-LR7sdXL2.js";import"./remote-DDSPySo3.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./utils-07AIACoX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-gEyTxYiG.js";import"./usePress-Dy-OAjIk.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocusable-0ogj4vIM.js";import"./dynamic-BkMen_On.js";import"./LoadingSpinner-JP8g8ixs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CKW1LLKF.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./useLabel-D3O2Shqb.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CdVMgEWJ.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Text-0L-5i7aJ.js";import"./AlertIcon-DlZAtoqh.js";import"./ActionBatch-BRiItlo9.js";import"./useOverlayController-BzZu7ty6.js";import"./useStatic-BxWRYqBR.js";import"./getActionGroupSlot-D51i84O1.js";import"./Popover-BqmVqall.js";import"./OverlayContextProvider-DoYhYc18.js";import"./Dialog-Bv_Niklp.js";import"./RSPContexts-DatC1hy5.js";import"./OverlayArrow-BCWfoCHK.js";import"./useControlledState-CbmAXNAC.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./SelectionIndicator-CS3Tqeow.js";import"./Separator-DxksnpFt.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./Switch-B2t8clI5.js";import"./useFieldComponent-CBicToer.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DpBaLzJt.js";import"./useFormReset-BIdGIAau.js";import"./OverlayTrigger-a3uZGxXg.js";import"./DialogTriggerView-CoUkbjf5.js";import"./Overlay-BBbCl7H6.js";import"./ButtonView-BM2ZoM3D.js";import"./Flex-zawCEP1d.js";import"./Heading-CsdNC-Kb.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
