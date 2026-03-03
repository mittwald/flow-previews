import{j as r}from"./iframe-DjjV-bH6.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BVYK-jeQ.js";import{L as m}from"./Link-JtruOppm.js";import{H as s}from"./HeaderNavigation-CXsAFp9h.js";import{B as o}from"./Button-B7eEYP7w.js";import{T as p}from"./Text-B3EwbE0r.js";import{I as h}from"./Image-C5noXtXb.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Dn3GkagS.js";import{C as M,M as c}from"./MenuItem-BIKtJpks.js";import{C as I}from"./ContextMenuTrigger-XBcxcB2V.js";import"./ContextMenuSection-DWXh8VII.js";import{M as T}from"./ModalTrigger-BMgo-tf-.js";import{M as k}from"./Modal-CGyNAbyv.js";import{H}from"./Heading-BUvpnBH0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./index-CaIAbEHH.js";import"./remote-BKpn4CGf.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./context-CVfxZLio.js";import"./utils-Wzr-xt4Q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C98Vumo7.js";import"./usePress-CoT418ij.js";import"./useFocusRing-2GUlH-Oo.js";import"./useFocusable-BB_F7Uj3.js";import"./dynamic-BXsvgyJR.js";import"./LoadingSpinner-DTU1PYFj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXnJuiQ-.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./useLabel-DjKMdhxn.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DMwaewkm.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Text-BylF3jjX.js";import"./AlertIcon-DcWT0T9A.js";import"./ActionBatch-YJb9tMXC.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./Popover-BLR3Up5v.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./Dialog-Ok_9Edtl.js";import"./RSPContexts-C5x5s972.js";import"./OverlayArrow-CBp_JaqL.js";import"./useControlledState-DuEj2qRm.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./VisuallyHidden-CG1EK-5C.js";import"./Switch-AIigrr2P.js";import"./useFieldComponent-DlP24hgD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz5gkyTQ.js";import"./useFormReset-DovS_sbG.js";import"./OverlayTrigger-CcgdKfuo.js";import"./DialogTriggerView-B6dSRsMJ.js";import"./Overlay-CeUaOkpN.js";import"./ButtonView-BQL8Rbhr.js";import"./Flex-C9E3B9yt.js";import"./Heading-ykLy-LRI.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
