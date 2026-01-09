import{j as r}from"./iframe-4vGjmvQN.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-CMo0ZXSb.js";import{L as m}from"./Link-BJK7mn5B.js";import{H as s}from"./HeaderNavigation-DVxpSbE0.js";import{B as o}from"./Button-Dkb2KJyV.js";import{T as p}from"./Text-D_m0UGXp.js";import{I as h}from"./Image-fSgYi8WQ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D4BBkXjt.js";import{C as M,M as c}from"./MenuItem-Do7TLj7w.js";import{C as I}from"./ContextMenuTrigger-MvgN361A.js";import"./ContextMenuSection-uYq5CLUg.js";import{a as T,M as k}from"./Modal-KpM_4sGu.js";import{H}from"./Heading-DVNwCXdo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./index--XKY9bK1.js";import"./remote-BMVFgzCt.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./context-Cugfl_gO.js";import"./utils-Cb3SeWCs.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-SP29s-a6.js";import"./useFocus-BGpJf3EA.js";import"./useFocusRing-ctZhab72.js";import"./useFocusable-BvBcbeR1.js";import"./dynamic-CTwyIkzY.js";import"./LoadingSpinner-Qei33fJA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C8uGqlfr.js";import"./ProgressBar-D3BQYEeZ.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./useLabel-Dy2_qp8M.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BLim8y6B.js";import"./EmulatedBoldText-DOuKha2y.js";import"./Text-DO-ESRpi.js";import"./AlertIcon-Cm3SyDVG.js";import"./Action-DFPEzuYz.js";import"./context-C_iyWBEo.js";import"./useStatic-CkngZPNU.js";import"./getActionGroupSlot-ChdVdmUh.js";import"./Popover-B7_IZjqh.js";import"./useOverlayController-D8-mco-D.js";import"./OverlayContextProvider-BfvQVmDI.js";import"./Dialog-DWeru3ZY.js";import"./RSPContexts-BAo2RxOH.js";import"./OverlayArrow-Ss-CcX6O.js";import"./useControlledState-wPwtFL3G.js";import"./Collection-JwP5-obH.js";import"./CollectionBuilder-BFcqcbLB.js";import"./SelectionIndicator-Cti1f0QF.js";import"./Separator-CUemZlM2.js";import"./SelectionManager-DMVUPuxd.js";import"./useEvent-CRBCWBzI.js";import"./useCollator-D5lNxT5d.js";import"./FocusScope-Blxz7JIY.js";import"./VisuallyHidden-C3YQx9t_.js";import"./Switch-BzuZdprQ.js";import"./useFieldComponent-diqFBc0H.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DqIeerOo.js";import"./useFormReset-BZ0fN7tZ.js";import"./OverlayTrigger-CIaqJQvR.js";import"./DialogTriggerView-c-aaz2kd.js";import"./Overlay-v2glELb9.js";import"./ButtonView-DU5uwmW9.js";import"./Flex-Dc6xWnZa.js";import"./Heading-D0PKdBSu.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
