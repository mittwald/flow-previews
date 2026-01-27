import{j as r}from"./iframe-COrLnxQ5.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CG-OJrgb.js";import{L as m}from"./Link-eGYwWl9q.js";import{H as s}from"./HeaderNavigation-NM0OA72G.js";import{B as o}from"./Button-B5T-9t49.js";import{T as p}from"./Text-xUIxpGpZ.js";import{I as h}from"./Image-BLvwQIBu.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-8rKYyr4O.js";import{C as M,M as c}from"./ContextMenu-DVAA2gTD.js";import{C as I}from"./ContextMenuTrigger-BZOR1Tl_.js";import"./ContextMenuSection-Beuid9XD.js";import{a as T,M as k}from"./Modal-C6bi54Qj.js";import{H}from"./Heading--g-KOjmd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./index-C_Qn4vD5.js";import"./remote-DmDOnO_p.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./context-BGD9bWhq.js";import"./utils-VsjjISTT.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-D07Nw9k2.js";import"./usePress-BYo5WNMt.js";import"./useFocusRing-DLXXvYqO.js";import"./useFocusable-BKqCzfQc.js";import"./dynamic-6q-iLiJj.js";import"./LoadingSpinner-BLCck0My.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XrgEKXm-.js";import"./ProgressBar-SUOC-8W4.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./useLabel-Dc-mlO3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-_tQTAo3E.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./Text-DGq4TjGO.js";import"./AlertIcon-DPoTsBR0.js";import"./Switch-D2DXDAyt.js";import"./useFieldComponent-CTuZy_pY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BTXjDrIs.js";import"./useFormReset-CUYGlILL.js";import"./useControlledState-B-eslxlj.js";import"./VisuallyHidden-DMXfMtnF.js";import"./Dialog-CXGseDzt.js";import"./RSPContexts-Ds5AG3kQ.js";import"./OverlayArrow-B9AznsvA.js";import"./Collection-DJX2nYwX.js";import"./CollectionBuilder-BrcW8xHd.js";import"./SelectionIndicator-DN8aDza5.js";import"./Separator-DW4a3XE2.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./Action-DL1crjzC.js";import"./context-Dy8NilHt.js";import"./useStatic-CZwWlCB5.js";import"./getActionGroupSlot-CizQjHpL.js";import"./Popover-CaemaVhn.js";import"./useOverlayController-JMrb6iCJ.js";import"./OverlayContextProvider-BtJ2k2E0.js";import"./OverlayTrigger-Dx3VRxcY.js";import"./DialogTriggerView-DuFcxNsd.js";import"./Overlay-B4VcLYFM.js";import"./ButtonView-BaOHg3N5.js";import"./Flex-pIfgDITq.js";import"./Heading-B77ZBR05.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
