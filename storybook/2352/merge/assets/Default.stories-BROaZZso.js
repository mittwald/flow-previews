import{j as r}from"./iframe-DhXHhh1w.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Cq0bATFd.js";import{L as m}from"./Link-Bm5obdSl.js";import{H as s}from"./HeaderNavigation-1VooaFMN.js";import{B as o}from"./Button-DK8hND6e.js";import{T as p}from"./Text-VjJbV_1P.js";import{I as h}from"./Image-yNdxd9G4.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D9qDBeXw.js";import{C as M,M as c}from"./MenuItem-Bo-6XXEy.js";import{C as I}from"./ContextMenuTrigger-BMULQtXK.js";import"./ContextMenuSection-EAnCbrTf.js";import{M as T}from"./ModalTrigger-BDCozM7F.js";import{M as k}from"./Modal-DAWN7CdU.js";import{H}from"./Heading-W2uFhXaO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./index-B6ijkuYI.js";import"./remote-3lBAaKOS.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./context-C0JBe_V4.js";import"./utils--GApMcJ9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CCcmXvuL.js";import"./usePress-DuFsm5YE.js";import"./useFocusRing-C0Ptw1X0.js";import"./useFocusable-DaonITQz.js";import"./dynamic-DY1DU2Hc.js";import"./LoadingSpinner-BQo0GQZs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B72XzUR4.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./useLabel-B7imI5Js.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./Text-BhHd18lu.js";import"./AlertIcon-CowGyQyl.js";import"./ActionBatch-CBOUg1fp.js";import"./useOverlayController-BReF9zcC.js";import"./useStatic-Cuuv0LOE.js";import"./getActionGroupSlot-BjPF_vWV.js";import"./Popover-JroSLm89.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./Dialog-CefhgDMJ.js";import"./RSPContexts-BISy0hbD.js";import"./OverlayArrow-D0YkTT7M.js";import"./useControlledState-BAaAMcGs.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./SelectionIndicator-p-DrZhoI.js";import"./Separator-YN4gslNC.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./useCollator-CdSsm3Cn.js";import"./FocusScope-DTOX4bjf.js";import"./VisuallyHidden-B52Q2-iE.js";import"./Switch-BmIKIGRG.js";import"./useFieldComponent-CXGCADuw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-QDMmy6Dg.js";import"./useFormReset-BhTKQiKR.js";import"./OverlayTrigger-Dx4VUFaj.js";import"./DialogTriggerView-NO6i6DWC.js";import"./Overlay-CIG5Bv_4.js";import"./ButtonView-CA8U0oul.js";import"./Flex-DlE5ZV-j.js";import"./Heading-CrXwA3a4.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
