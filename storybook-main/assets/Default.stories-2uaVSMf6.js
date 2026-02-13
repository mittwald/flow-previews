import{j as r}from"./iframe-C2cGCWBO.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-C4LD0r9W.js";import{L as m}from"./Link-B5M7mNHz.js";import{H as s}from"./HeaderNavigation-DI6QzNh7.js";import{B as o}from"./Button-B41LUuF3.js";import{T as p}from"./Text-D3xXIOyH.js";import{I as h}from"./Image-BNktgY0S.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Ry328RJe.js";import{C as M,M as c}from"./MenuItem-BVkkGfjr.js";import{C as I}from"./ContextMenuTrigger-C91aIj9h.js";import"./ContextMenuSection-DuK0dlwa.js";import{M as T}from"./ModalTrigger-CbFSYAzC.js";import{M as k}from"./Modal-Dch_39m9.js";import{H}from"./Heading-BMwLGtkc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./remote-w8RrxnGT.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./context-2EfdQWx2.js";import"./utils-CPzpSZL2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-O4uYrVbU.js";import"./usePress-BrmD8Kf2.js";import"./useFocusRing-wtbg8X8X.js";import"./useFocusable-DwbuT13T.js";import"./dynamic-DhyEqTLI.js";import"./LoadingSpinner-DIaaAh-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BneP87GG.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./useLabel-DicB4RC2.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./Text-D1LgYL-c.js";import"./AlertIcon-B9QySSBk.js";import"./ActionBatch-BZcBHaPT.js";import"./useOverlayController-CtyPLm8k.js";import"./useStatic-DUMwmPN3.js";import"./getActionGroupSlot-C9frEoU7.js";import"./Popover-DJnPn-3r.js";import"./OverlayContextProvider-BBwaePGz.js";import"./Dialog-BW6BpcVd.js";import"./RSPContexts-YUPb13EG.js";import"./OverlayArrow-DkMjnDr5.js";import"./useControlledState-MMDjipcl.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./VisuallyHidden-C7EnMW_k.js";import"./Switch-D9l8HAch.js";import"./useFieldComponent-D_KC3UxI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DN8cgAFI.js";import"./useFormReset-BdRaO3QH.js";import"./OverlayTrigger-C08PeZoT.js";import"./DialogTriggerView-CAilZ6MB.js";import"./Overlay-BChO2yc4.js";import"./ButtonView-Bho7TPlx.js";import"./Flex-D4R0lKsm.js";import"./Heading-Dg4rLfib.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
