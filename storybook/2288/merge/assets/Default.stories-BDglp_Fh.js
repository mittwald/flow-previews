import{j as r}from"./iframe-BipmDVic.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CGnZi41_.js";import{L as m}from"./Link-DJr8Hvm4.js";import{H as s}from"./HeaderNavigation-8eqprcHu.js";import{B as o}from"./Button-BuQAY4x2.js";import{T as p}from"./Text-D0LSWbFT.js";import{I as h}from"./Image-DhFZDwb9.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-cuKuP-sl.js";import{C as M,M as c}from"./MenuItem-Kv9-_7Wo.js";import{C as I}from"./ContextMenuTrigger-CsGUrRwl.js";import"./ContextMenuSection-CO4DhhVm.js";import{a as T,M as k}from"./Modal-CG-SQG-T.js";import{H}from"./Heading-BRGw-waJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./index-DhRV0L_D.js";import"./remote-Bx5-otuG.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./context-Br1o_Gsv.js";import"./utils-BmvAbY6y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-1VXHi-Mn.js";import"./usePress-BGUPUAq5.js";import"./useFocusRing-B8DUU0zm.js";import"./useFocusable-CoJ_GBdx.js";import"./dynamic-5Me7t2_P.js";import"./LoadingSpinner-4_K5lSJw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JOtZZNa7.js";import"./ProgressBar-WDsF0b96.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./useLabel-DZFs0BX7.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CR-oUB3P.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./Text-Bx_sJIF1.js";import"./AlertIcon-Cy_cDr6j.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./useStatic-DNvp4EKT.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./Popover-D6v11uuT.js";import"./useOverlayController-D0DRt1MZ.js";import"./OverlayContextProvider-DZ1Omm1z.js";import"./Dialog-BXIha8hU.js";import"./RSPContexts-EgPs8m3a.js";import"./OverlayArrow-Crdn15eZ.js";import"./useControlledState-CTBxctZq.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./Switch-DSdwIKZ_.js";import"./useFieldComponent-VycST_vs.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B5EhiEkH.js";import"./useFormReset-Bn-cpXjq.js";import"./OverlayTrigger-DqBZOFmj.js";import"./DialogTriggerView-CEf0YNhB.js";import"./Overlay-Cf3ycBqT.js";import"./ButtonView-B8lRgn0T.js";import"./Flex-p3WdXJyS.js";import"./Heading-uHa7bb0l.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
