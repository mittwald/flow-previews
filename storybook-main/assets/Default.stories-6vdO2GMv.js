import{j as r}from"./iframe-DGnxviCN.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-B9r0STX6.js";import{L as m}from"./Link-Bzfevt_A.js";import{H as s}from"./HeaderNavigation-Bbmxg2Hh.js";import{B as o}from"./Button-BVsKVkL8.js";import{T as p}from"./Text-VNnveGPv.js";import{I as h}from"./Image-im7ZSUAl.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DxdABEZN.js";import{C as M,M as c}from"./MenuItem-BAwnFpy8.js";import{C as I}from"./ContextMenuTrigger-BFUGUsJj.js";import"./ContextMenuSection-BcwKnSYu.js";import{M as T}from"./ModalTrigger-YGi5ZU1v.js";import{M as k}from"./Modal-Dxf8kS_f.js";import{H}from"./Heading-DTe6jOe1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./index-CLLV6gyd.js";import"./remote-B6BjMgpw.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./context-UPqYfqWR.js";import"./utils-BkfS5ksp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus--s-Wd8Ep.js";import"./usePress-CyY11qHx.js";import"./useFocusRing-Bv9AUNti.js";import"./useFocusable-Qpttz7ZN.js";import"./dynamic-DjV52Fwj.js";import"./LoadingSpinner-DowiBEwh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPmMTYs3.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./useLabel-BPNr7xBu.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cb_u6_6F.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./Text-DvHtl8Bn.js";import"./AlertIcon-DgP01cQO.js";import"./ActionBatch-CX-JwDue.js";import"./useOverlayController-5kwf29Lw.js";import"./useStatic-BeisnKXD.js";import"./getActionGroupSlot-rP5M9435.js";import"./Popover-6gSZV124.js";import"./OverlayContextProvider-DWOAvC95.js";import"./Dialog-4LBd4V1R.js";import"./RSPContexts-DVx2WDHj.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./useControlledState-Tnf2yuXg.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./SelectionIndicator-BVYQMpc5.js";import"./Separator-BN8d0XAg.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./VisuallyHidden-BQzdTzN8.js";import"./Switch-vWMCxLGP.js";import"./useFieldComponent-YlKWY1fY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BlQNM6IB.js";import"./useFormReset-DURLcehp.js";import"./OverlayTrigger-BRKr18-D.js";import"./DialogTriggerView-Beb76ZLI.js";import"./Overlay-Dz43Qvxj.js";import"./ButtonView-B9Wck9x_.js";import"./Flex-COS4YHsY.js";import"./Heading-BzIJuxDf.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
