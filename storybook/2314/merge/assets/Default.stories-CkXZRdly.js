import{j as r}from"./iframe-DM7qDJWN.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Ck-PBl-h.js";import{L as m}from"./Link-BAoZ4o9S.js";import{H as s}from"./HeaderNavigation-BDGPETs8.js";import{B as o}from"./Button-Dc6TEAeS.js";import{T as p}from"./Text-DFbMev3D.js";import{I as h}from"./Image-CXaV9mZ1.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BKiqeDCN.js";import{C as M,M as c}from"./MenuItem-DNkKX_Q1.js";import{C as I}from"./ContextMenuTrigger-c1EyBAYu.js";import"./ContextMenuSection-gnaL4P7y.js";import{a as T,M as k}from"./Modal-P7tWxSNz.js";import{H}from"./Heading-C1qjB_Q-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./index-Zik4_3jH.js";import"./remote-CkIQ4maL.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./context-Bdkwq7qF.js";import"./utils-DCh3KcEQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-V4g9fXxO.js";import"./usePress-DcE1V40F.js";import"./useFocusRing-DKHg-pYg.js";import"./useFocusable-jnMsXBmm.js";import"./dynamic-Bo6M-mWb.js";import"./LoadingSpinner-BB2_lVH8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cle7Q0jH.js";import"./ProgressBar-XdjtveJ3.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./useLabel-d_6Xjsvm.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-GV4Evxlh.js";import"./EmulatedBoldText-DY5AV1Fo.js";import"./Text-CqLEY5m0.js";import"./AlertIcon-B0QkWIB4.js";import"./Action-SkKzNvM1.js";import"./context-CLl5kDsk.js";import"./useStatic-Dwurevey.js";import"./getActionGroupSlot-ChSghX-d.js";import"./Popover-C6WGT-mG.js";import"./useOverlayController-BWbKAOxQ.js";import"./OverlayContextProvider-CHeMGzMk.js";import"./Dialog-CtXs4QP0.js";import"./RSPContexts-DtHHiQqe.js";import"./OverlayArrow--T1zjZBI.js";import"./useControlledState-CGBhCpgz.js";import"./Collection-B3op_wkO.js";import"./CollectionBuilder-CUYn1Myb.js";import"./SelectionIndicator-DhuP4hb9.js";import"./Separator-duSL34B8.js";import"./SelectionManager-B15RSxH7.js";import"./useEvent-h15Gin5m.js";import"./useCollator-BSJypaQj.js";import"./FocusScope-DcmRl2I0.js";import"./VisuallyHidden-Djcrj7d_.js";import"./Switch-PdRT-Wkb.js";import"./useFieldComponent-DWfL7CEw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dp7x1uYp.js";import"./useFormReset-DEHhMcAF.js";import"./OverlayTrigger-DjZ_tJ2j.js";import"./DialogTriggerView-BuLqaoTn.js";import"./Overlay-VFpKBaOK.js";import"./ButtonView-7nAQL8-V.js";import"./Flex-kzI0ka2q.js";import"./Heading-DA3hIkQr.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
