import{j as r}from"./iframe-C-RKPwSE.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-B9kpDIcu.js";import{L as m}from"./Link-BqHbwmyH.js";import{H as s}from"./HeaderNavigation-DG-m9GbY.js";import{B as o}from"./Button-C4QFurWq.js";import{T as p}from"./Text-DceSOphz.js";import{I as h}from"./Image-PMk04Lr0.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BVAQQ1MR.js";import{C as M,M as c}from"./MenuItem-B243Bmrf.js";import{C as I}from"./ContextMenuTrigger-GgQv_FW0.js";import"./ContextMenuSection-D3zQaczq.js";import{a as T,M as k}from"./Modal-D4PQjqqh.js";import{H}from"./Heading-BLLuHX2c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./index-NcfLMdM4.js";import"./remote-Dp4k7gKv.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./context-CG0zmStT.js";import"./utils-BNo7v4Co.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-EK5CVku_.js";import"./usePress-D8JiKPWZ.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocusable-BqhdVXbn.js";import"./dynamic-D4AljtfH.js";import"./LoadingSpinner-B5fSKp-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BUrsQ2n2.js";import"./ProgressBar-CT-OPPKM.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./useLabel-DvGejoW4.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BU-qC_3h.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./AlertIcon-EwQ99KQC.js";import"./Action-fo4y3mrQ.js";import"./context-C3Gge9in.js";import"./useStatic-CxBkvBNE.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./Popover-IIDmJsK0.js";import"./useOverlayController-DFCL4B8t.js";import"./OverlayContextProvider-wIYWseIw.js";import"./Dialog-5IYWsYFe.js";import"./RSPContexts-7oABi43d.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./VisuallyHidden-lhIVNasT.js";import"./Switch-BdeEEVcE.js";import"./useFieldComponent-ILpXs27H.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B9j8JfGT.js";import"./useFormReset-Bo6mTD_0.js";import"./OverlayTrigger-DlhOnJ8b.js";import"./DialogTriggerView-PE2cTyQH.js";import"./Overlay-JziVBlUz.js";import"./ButtonView-lpEgsJ9B.js";import"./Flex-Ldqn0OZX.js";import"./Heading-CcYcuTte.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
