import{j as r}from"./iframe-BJFPIndf.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BUqpCqdO.js";import{L as m}from"./Link-BHjJtRuV.js";import{H as s}from"./HeaderNavigation-BlzoJgho.js";import{B as o}from"./Button-CMLIz8EV.js";import{T as p}from"./Text-CGF68X8s.js";import{I as h}from"./Image-DxKBNWWO.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-PyLtBe2E.js";import{C as M,M as c}from"./MenuItem-JskQP9Rn.js";import{C as I}from"./ContextMenuTrigger-DpaR76-2.js";import"./ContextMenuSection-BXIYeg2w.js";import{M as T}from"./ModalTrigger-Csz0_O-V.js";import{M as k}from"./Modal-BGgt1ria.js";import{H}from"./Heading-BgaQQLIq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./index-Bg9RtLBP.js";import"./remote-BMkebNs4.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./context-Dnh7V-Fy.js";import"./utils-WT8FFEB4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DPdw3svt.js";import"./usePress-BHGoooY9.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocusable-DGQMpBVb.js";import"./dynamic-Ds5yn-UC.js";import"./LoadingSpinner-mc2sXUEG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DuameHsj.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./useLabel-lMRjDAnL.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DqcTc9Nr.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Text-D3Y_kc1g.js";import"./AlertIcon-GZVP8WsI.js";import"./ActionBatch-91iU7Ul_.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./getActionGroupSlot-ggari8la.js";import"./Popover-DcH799mS.js";import"./OverlayContextProvider-BuTLd76h.js";import"./Dialog-eRNfCnmO.js";import"./RSPContexts-BXfCPyGV.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./Switch-BLkB3cDb.js";import"./useFieldComponent-gU-XMME4.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CAGLbUXI.js";import"./useFormReset-CwfjSagb.js";import"./OverlayTrigger-CKuXx8bv.js";import"./DialogTriggerView-CjNJF2Ka.js";import"./Overlay-BWkVMZMt.js";import"./ButtonView-BZflCgnt.js";import"./Flex-7kPLhUeS.js";import"./Heading-BMtUgZaT.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
