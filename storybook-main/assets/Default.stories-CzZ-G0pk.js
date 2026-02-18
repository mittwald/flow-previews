import{j as r}from"./iframe-Bz3NPU1o.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Cqqx4tMU.js";import{L as m}from"./Link-CXuJvK2b.js";import{H as s}from"./HeaderNavigation-euOLVnoM.js";import{B as o}from"./Button-DmREI3b0.js";import{T as p}from"./Text-ByJancxD.js";import{I as h}from"./Image-Nw0C6lpy.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-_l_eDd3h.js";import{C as M,M as c}from"./MenuItem-BZUA_37L.js";import{C as I}from"./ContextMenuTrigger-BPBNMJHB.js";import"./ContextMenuSection-Dt7nyU_Z.js";import{M as T}from"./ModalTrigger-BTecGmDV.js";import{M as k}from"./Modal-BVW6OhrB.js";import{H}from"./Heading-0jGXR_g9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./index-FgoIhbmz.js";import"./remote-D_M7roLC.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./context-pgk2HPHJ.js";import"./utils-DuUJF5nC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DMRfkGw8.js";import"./usePress-BmxXpscc.js";import"./useFocusRing-BLuP37PT.js";import"./useFocusable-DZRtaeEQ.js";import"./dynamic-CvekFh9y.js";import"./LoadingSpinner-C6XGp2xl.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BMxU8wWi.js";import"./ProgressBar-Dn9Yutju.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./useLabel-C5lED9IT.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BaNqvzaa.js";import"./EmulatedBoldText-DUXivwa1.js";import"./Text-ClD1r8b1.js";import"./AlertIcon-Csw_f8vF.js";import"./ActionBatch-DB6HM48H.js";import"./useOverlayController-BTsOQKJk.js";import"./useStatic-hPs_nES1.js";import"./getActionGroupSlot--8oaPbEm.js";import"./Popover-BJF5ngPZ.js";import"./OverlayContextProvider-ve6dYabZ.js";import"./Dialog-DrbZDX-D.js";import"./RSPContexts-BgkP6bIF.js";import"./OverlayArrow-Co0kQ8lC.js";import"./useControlledState-e4YYsLZE.js";import"./Collection-CtHLpY8r.js";import"./CollectionBuilder-CSsN_D43.js";import"./SelectionIndicator-DWP2zhMc.js";import"./Separator-4S0Txhk8.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./useCollator-DX6ShHbl.js";import"./FocusScope-Bk96q2B-.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./Switch-bkpwCTy-.js";import"./useFieldComponent-kW7iCi5m.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B4GZ2XOO.js";import"./useFormReset-D4UcXUYp.js";import"./OverlayTrigger-DNmemUFh.js";import"./DialogTriggerView-DbMKjStP.js";import"./Overlay-oLKw2upU.js";import"./ButtonView-B1T1gpd9.js";import"./Flex-BZRK7zof.js";import"./Heading-BkR9lkEu.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
