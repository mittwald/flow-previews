import{j as r}from"./iframe-pec-daIN.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BNWGnhvf.js";import{L as m}from"./Link-C7_pSF2X.js";import{H as s}from"./HeaderNavigation-Cdv6YF9l.js";import{B as o}from"./Button-TbsWowXg.js";import{T as p}from"./Text-KadZ5_Og.js";import{I as h}from"./Image-el8LUpNw.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CWmxtsLw.js";import{C as M,M as c}from"./MenuItem-C_S7qqq1.js";import{C as I}from"./ContextMenuTrigger-DR00yKBn.js";import"./ContextMenuSection-DNSduqHu.js";import{a as T,M as k}from"./Modal-DmTVdQn7.js";import{H}from"./Heading-XncZngQX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./index-CHD_W7k-.js";import"./remote-CL_x9DF5.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./context-6wXKo3vr.js";import"./utils-DgvXfbTX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-8lECnDuB.js";import"./usePress-BXePSkUY.js";import"./useFocusRing-D1bapTtD.js";import"./useFocusable-DHeceSRU.js";import"./dynamic-KYdmGlVp.js";import"./LoadingSpinner-DJdNJN2d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BVdTMk7w.js";import"./ProgressBar-BMgVEN8s.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./useLabel-EN4dlqGk.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CB013lxp.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./Text-ChVSp7Zj.js";import"./AlertIcon-Df2ALci7.js";import"./Action-8dbKhHvU.js";import"./context-CSF0VmIA.js";import"./useStatic-DtKIUYIw.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./Popover-DLd5G0Ef.js";import"./useOverlayController-BZ8CrQho.js";import"./OverlayContextProvider-DRuVjJJZ.js";import"./Dialog-CHeMFU-y.js";import"./RSPContexts-CXn4NsJp.js";import"./OverlayArrow-DWFODRfO.js";import"./useControlledState-C8wEjdVb.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./SelectionManager-DC-DY4jN.js";import"./useEvent-TrAkXyi-.js";import"./useCollator-Bc_1nfh_.js";import"./FocusScope-D8KAWd4v.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./Switch-DXJaXfG9.js";import"./useFieldComponent-BVaTpDhT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C94FIhG_.js";import"./useFormReset-DlmAX50c.js";import"./OverlayTrigger-LLvsqu3e.js";import"./DialogTriggerView-D_sA9_S4.js";import"./Overlay-BRS82HVa.js";import"./ButtonView-DOrN6z8l.js";import"./Flex-BKXtM-5u.js";import"./Heading-Dfi1y-Mg.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
