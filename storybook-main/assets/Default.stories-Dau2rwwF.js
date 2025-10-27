import{j as r}from"./iframe-CgV0BA21.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-Cjg_6qhe.js";import{L as m}from"./Link-CjJ87925.js";import{H as s}from"./HeaderNavigation-CTEpwMSS.js";import{B as o}from"./Button-CNT8DxS9.js";import{T as p}from"./Text-BKw3N1Oz.js";import{I as h}from"./Image-CpilzWRs.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DHdUkEQ6.js";import{C as M,M as c}from"./MenuItem-BZeLbX6s.js";import{C as I}from"./ContextMenuTrigger-BVLpQfNI.js";import"./ContextMenuSection-DduOvbG6.js";import{a as T,M as k}from"./Modal-krE5pmOi.js";import{H}from"./Heading--VfPtVyJ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./index-LOR_5P9o.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./context-DHnf2uKc.js";import"./utils-BtxgbS4l.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Dh998neg.js";import"./useFocus-DCA5O52l.js";import"./useFocusRing-D4YLibcx.js";import"./useFocusable-CmuVkcp6.js";import"./dynamic-BuNxxpAs.js";import"./LoadingSpinner-CAf9aLu0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxfThd7-.js";import"./ProgressBar-Buubgbe8.js";import"./Label-CttY7hce.js";import"./Hidden-jMQa5TyR.js";import"./useLabel-B3KDK_sh.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BkNcCpiL.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Text-DoKxmv7q.js";import"./AlertIcon-DHrnYK5i.js";import"./Action-DZ2Xrd6d.js";import"./context-CRjcTZWJ.js";import"./useStatic-BN9Sd72d.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./Popover-CzgnrOjG.js";import"./useOverlayController-DHYUmg62.js";import"./OverlayContextProvider-DUFKTZaq.js";import"./Dialog-BuxTXh7Q.js";import"./RSPContexts-B0Fd51Ht.js";import"./OverlayArrow-B-9LgXoP.js";import"./useControlledState-REzwF7fx.js";import"./Collection-PQKx517l.js";import"./CollectionBuilder-BH1gKqtM.js";import"./SelectionIndicator-Bn-FIAma.js";import"./Separator-DWGZbVju.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./useCollator-vRN69CzX.js";import"./FocusScope-0arVmBSz.js";import"./VisuallyHidden-7bLCXWCd.js";import"./ClearPropsContextView-k4P5ol-4.js";import"./ClearPropsContext-BLhIxcUa.js";import"./Switch-7aXQeQ_6.js";import"./useFieldComponent-D1IKYPO_.js";import"./react-children-utilities-D5-pLFdL.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BcUeToCB.js";import"./useToggleState-D8v9aolG.js";import"./useFormReset-DmIBBfXo.js";import"./OverlayTrigger-BQrHQUPN.js";import"./ControlledNotification-Dx7XpGvC.js";import"./DialogTriggerView-DFZE3cQk.js";import"./Overlay-pkV9nUXZ.js";import"./ButtonView-D4FRAmJU.js";import"./Heading-CdcvmK3e.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
