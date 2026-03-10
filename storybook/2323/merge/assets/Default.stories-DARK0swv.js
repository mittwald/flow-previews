import{j as r}from"./iframe-EfPcFfHz.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-73LpV07E.js";import{L as m}from"./Link-B8KOIGGv.js";import{H as s}from"./HeaderNavigation-BkKDq2PG.js";import{B as o}from"./Button-wFzIQtGi.js";import{T as p}from"./Text-CRFCcT-P.js";import{I as h}from"./Image-BEOfsa7S.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Dfn-Q8FW.js";import{C as M,M as c}from"./MenuItem-C87D6MSd.js";import{C as I}from"./ContextMenuTrigger-GU6_CoyT.js";import"./ContextMenuSection-CgcrgsP7.js";import{M as T}from"./ModalTrigger-BJQtToMw.js";import{M as k}from"./Modal-Lm05iuR_.js";import{H}from"./Heading-D-lxgqSK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./index-BhGEUnhH.js";import"./remote-D3-8ROh8.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./context-kn7lEdrW.js";import"./utils-Cnkpfm_P.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-7edk4FfO.js";import"./usePress-CzmE2CoS.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocusable-CT_qKlvn.js";import"./dynamic-BKd_XzPu.js";import"./LoadingSpinner-5WRu_N9f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlxZZJFh.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./useLabel-DunHH7R3.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Text-B4oHPq8R.js";import"./AlertIcon-CtDfui7q.js";import"./ActionBatch-DG-IZD13.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./Popover-BwjMTXaO.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./Dialog-DJ1EGGEI.js";import"./RSPContexts-CIVPcPB5.js";import"./OverlayArrow-MDNnCdLA.js";import"./useControlledState-WqoJm4pI.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./SelectionIndicator-CeAI6QPx.js";import"./Separator-DgmB0SGY.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./VisuallyHidden-CH2GsO1v.js";import"./Switch-BRWRrgiA.js";import"./useFieldComponent-BpgXbjM-.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DCnxvtLO.js";import"./useFormReset-CDR6jl2x.js";import"./OverlayTrigger-DoGZlS98.js";import"./DialogTriggerView-6fPETH3i.js";import"./Overlay-BiUskXOC.js";import"./ButtonView-BN2-gVKk.js";import"./Flex-DI6XMfKS.js";import"./Heading-fpS9fclC.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
