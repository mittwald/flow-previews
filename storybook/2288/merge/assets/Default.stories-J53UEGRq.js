import{j as r}from"./iframe-BUwXHbLV.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-DpZLdH-i.js";import{L as m}from"./Link-CLMsl6et.js";import{H as s}from"./HeaderNavigation-BbBcc-pU.js";import{B as o}from"./Button-C47X2BbH.js";import{T as p}from"./Text-DQHJUI0D.js";import{I as h}from"./Image-Do1uNYpL.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C5gzKssE.js";import{C as M,M as c}from"./MenuItem-CkBcdv5K.js";import{C as I}from"./ContextMenuTrigger-DuzOI1d0.js";import"./ContextMenuSection-C1ahiJOH.js";import{a as T,M as k}from"./Modal-CZDHB2EZ.js";import{H}from"./Heading-DVvJZI_m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./index-B1fishDV.js";import"./remote-DgECwzV4.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./context-DM2fd8XH.js";import"./utils-JDwP1GoF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-B6YbSr7t.js";import"./usePress-BcgTA6VC.js";import"./useFocusRing-DaHiZmYv.js";import"./useFocusable-Dbq66Fw_.js";import"./dynamic-jPtu3qAR.js";import"./LoadingSpinner-KdI7mP_U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNkVsOQ0.js";import"./ProgressBar-BJDPOd_q.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./useLabel-DcLR3Pis.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DgSxuaKY.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";import"./AlertIcon-Dx8NA4Z8.js";import"./Action-Wt0sSzk-.js";import"./context-BtwGTzrQ.js";import"./useStatic-BtWsPYN-.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./Popover-DKz-OvIj.js";import"./useOverlayController-Dogh-DtE.js";import"./OverlayContextProvider-CQG9zk-L.js";import"./Dialog-2n0yrNbm.js";import"./RSPContexts-CfLLQl4G.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useControlledState-DYrRTv7P.js";import"./Collection-X5iiX-bG.js";import"./CollectionBuilder-BS4P0rnp.js";import"./SelectionIndicator-CP3BVA3N.js";import"./Separator-BSF4rUHh.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./useCollator-DJB12Mbt.js";import"./FocusScope-l2gJymgt.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./Switch-CIGu4IaU.js";import"./useFieldComponent-NdCAuKiZ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B1lAR_uo.js";import"./useFormReset-juEzhCU8.js";import"./OverlayTrigger-FaFIiRYX.js";import"./DialogTriggerView-lcPROBY7.js";import"./Overlay-ddtRb8W1.js";import"./ButtonView-DumfpSry.js";import"./Flex-RBN18qt4.js";import"./Heading-Bx_NYZMu.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
