import{j as r}from"./iframe-H3UGI_HB.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-D9BgjB6B.js";import{L as m}from"./Link-550MYSbs.js";import{H as s}from"./HeaderNavigation-DrXTKxdN.js";import{B as o}from"./Button-fzixWt9q.js";import{T as p}from"./Text-B0lwY8q7.js";import{I as h}from"./Image-BcfZ4pxS.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Co0_1E2i.js";import{C as M,M as c}from"./MenuItem-DgJIuViS.js";import{C as I}from"./ContextMenuTrigger-BTopEEZd.js";import"./ContextMenuSection-DZ6NPIaP.js";import{M as T}from"./ModalTrigger-XChEQln5.js";import{M as k}from"./Modal-CfSIm2YK.js";import{H}from"./Heading-F7Cj8meE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./index-BJWFQYe5.js";import"./remote-uffOWPGy.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./context-BGVDv2KD.js";import"./utils-DSogMYdc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DQ3i5Klp.js";import"./usePress-CSCW4wCL.js";import"./useFocusRing-DrWQa_14.js";import"./useFocusable-BYwgOLI_.js";import"./dynamic-DBkJoO-a.js";import"./LoadingSpinner-r6z_bU0O.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-5W_fyVDJ.js";import"./ProgressBar-Diyn8Lqp.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./useLabel-CtoVShGG.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-xqq3Xy_w.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./Text-UIHj6j-v.js";import"./AlertIcon-Cb5scZh6.js";import"./ActionBatch-TsHiTfcO.js";import"./useOverlayController-3aktaPy5.js";import"./useStatic-CxHSWaOd.js";import"./getActionGroupSlot-B9ZNFQ5y.js";import"./Popover-gha9Pxgv.js";import"./OverlayContextProvider-BiL0j1tu.js";import"./Dialog-DKMSACkI.js";import"./RSPContexts-BrswSFX-.js";import"./OverlayArrow-C-E8ydRe.js";import"./useControlledState-DkMic-Ic.js";import"./Collection-WGKH_Dnj.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./SelectionIndicator-BgUtvt2H.js";import"./Separator-Q9pbsAsV.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./FocusScope-DjcW1lzL.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./Switch-BJioOx7U.js";import"./useFieldComponent-Bj80Ne3v.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bslox5IB.js";import"./useFormReset-CtKq0dbr.js";import"./OverlayTrigger-D9X0XEF5.js";import"./DialogTriggerView-rv9ZvCK5.js";import"./Overlay-B-ohzPPh.js";import"./ButtonView-DND7dytH.js";import"./Flex-BcmdNa7O.js";import"./Heading-CBpf9z-K.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
