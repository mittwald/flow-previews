import{j as r}from"./iframe-CDsKaBRg.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BO7Rp0Xm.js";import{L as m}from"./Link-CAHjs5Hw.js";import{H as s}from"./HeaderNavigation-BFhaB0MZ.js";import{B as o}from"./Button-DrVGXfuQ.js";import{T as p}from"./Text-BC05_GH2.js";import{I as h}from"./Image-BZjVQ4oT.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C45hpV4c.js";import{C as M,M as c}from"./MenuItem-BKQBPm9F.js";import{C as I}from"./ContextMenuTrigger-CsUJdiI4.js";import"./ContextMenuSection-BtR3HXLs.js";import{M as T}from"./ModalTrigger-D52pbVrr.js";import{M as k}from"./Modal-BKmcb3Jp.js";import{H}from"./Heading-DaIr1sLA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./remote-CceIEVln.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./utils-D_LVRUjq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DLB8Ejx4.js";import"./usePress-Dan0bPtD.js";import"./useFocusRing-BBPUeOqt.js";import"./useFocusable-C6i2fSTk.js";import"./dynamic-CtOpUuGK.js";import"./LoadingSpinner-COR3vr_l.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BshsCdLp.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./useLabel-CIho-35Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./AlertIcon-BRHbbzl7.js";import"./ActionBatch-Jyp25YdZ.js";import"./useOverlayController-B7-u35xe.js";import"./useStatic-B_kqalTp.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./Popover-EJFu47Qz.js";import"./OverlayContextProvider-C6_d12zo.js";import"./Dialog-C4SGct0D.js";import"./RSPContexts-B8A9jPpa.js";import"./OverlayArrow-DUsbU_k4.js";import"./useControlledState-daUq4f0n.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./VisuallyHidden-BzY4kZPn.js";import"./Switch-DhWZ-yCv.js";import"./useFieldComponent-CC8SHRwT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CldrOvnp.js";import"./useFormReset-CxPQXG_K.js";import"./OverlayTrigger-CHFi1X1A.js";import"./DialogTriggerView-Hloj02_H.js";import"./Overlay-DJH25hP-.js";import"./ButtonView-DkT0_tka.js";import"./Flex-C5S7EQFf.js";import"./Heading-CTLIsxjY.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
