import{j as r}from"./iframe-BKpTcuej.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-8R3XoFcV.js";import{L as m}from"./Link-QQGGWuEx.js";import{H as s}from"./HeaderNavigation-DyXZ5whW.js";import{B as o}from"./Button-CHR5Lto_.js";import{T as p}from"./Text-ChzZQXaT.js";import{I as h}from"./Image-7KF-_y9K.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BfcE7SbP.js";import{C as M,M as c}from"./MenuItem-B-PSMY4f.js";import{C as I}from"./ContextMenuTrigger-8hFta_2Z.js";import"./ContextMenuSection-CP33TlWV.js";import{a as T,M as k}from"./Modal-CZ3vHgRL.js";import{H}from"./Heading-Dusm-uvD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./index-DwEhfHus.js";import"./remote-nPMBb6wO.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./context-Bt___W0l.js";import"./utils-BuTqHWUg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C4QXJ0i2.js";import"./usePress-BwvZqs_N.js";import"./useFocusRing-CL2qG9Ti.js";import"./useFocusable-8gC31DNg.js";import"./dynamic-D5pLUzdK.js";import"./LoadingSpinner-CSX_cmFV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-WezQgFMH.js";import"./ProgressBar-gtPQqryh.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./useLabel-CLAZgdhb.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DdR_cYXU.js";import"./EmulatedBoldText-DTp9riJA.js";import"./Text-_5F14b0c.js";import"./AlertIcon-BxMTL622.js";import"./Action-CRs_TTFg.js";import"./context-Do1O8LUQ.js";import"./useStatic-D1T02rpq.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./Popover-pxlmKNyd.js";import"./useOverlayController-C8fdBT6C.js";import"./OverlayContextProvider-DjenE3bO.js";import"./Dialog-CnIAbR2d.js";import"./RSPContexts-CNLAcvzw.js";import"./OverlayArrow-BRMGn8Rx.js";import"./useControlledState-C61mrJlx.js";import"./Collection-DBuLuq_j.js";import"./CollectionBuilder-BAfr6v0X.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./Separator-DsMLA7TC.js";import"./SelectionManager-DoV1m8OU.js";import"./useEvent-DisABsaa.js";import"./useCollator-28QKhnaq.js";import"./FocusScope-CaneGuiO.js";import"./VisuallyHidden-DjSqpFWl.js";import"./Switch-C4B1ZgSC.js";import"./useFieldComponent-AXq55mny.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BpHLvo9X.js";import"./useFormReset-DjxTrJRS.js";import"./OverlayTrigger-C56VcKX9.js";import"./DialogTriggerView-Bv2tIhfF.js";import"./Overlay-OpRzFiKM.js";import"./ButtonView-CBwiPc4X.js";import"./Flex-mG3aN3T7.js";import"./Heading-Bj0wrS_Z.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
