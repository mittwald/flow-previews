import{j as r}from"./iframe-DsvUdpXw.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-DeQxeoQB.js";import{L as m}from"./Link-CmpzCeJb.js";import{H as s}from"./HeaderNavigation-13VQUr0d.js";import{B as o}from"./Button-Bh17vETd.js";import{T as p}from"./Text-DX5v3ksG.js";import{I as h}from"./Image-DQlocxX8.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-v2xSlmd1.js";import{C as M,M as c}from"./MenuItem-DZnhP1_w.js";import{C as I}from"./ContextMenuTrigger-CUvCYScP.js";import"./ContextMenuSection-CZOOjTrg.js";import{a as T,M as k}from"./Modal-BdbOfCvK.js";import{H}from"./Heading-B52qHDza.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./remote-Bzinmuoi.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./utils-elFy1-Tx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DN2AExbL.js";import"./usePress-BFT-1ljl.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./dynamic-B-6cr1cE.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./useLabel-CEPtaVyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./AlertIcon-C2Vz7YO6.js";import"./Action-CHQuPKKz.js";import"./context-ya2kPvzB.js";import"./useStatic-B4i3epQD.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./Popover-CqiNCQcV.js";import"./useOverlayController-DxWxo43I.js";import"./OverlayContextProvider-DlpSiBKI.js";import"./Dialog-DDWgyAFS.js";import"./RSPContexts-C2fytUZa.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useControlledState-HbpZAl0m.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./VisuallyHidden-Ds80HbqR.js";import"./Switch-Dcz5kh9r.js";import"./useFieldComponent-CWVnpPPS.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BE3wBxmq.js";import"./useFormReset-BZPoHMi4.js";import"./OverlayTrigger-iXNxq1oc.js";import"./DialogTriggerView-DmrydrJr.js";import"./Overlay-D9waHPv7.js";import"./ButtonView-ngwm-oT3.js";import"./Flex-CV6ES-CX.js";import"./Heading-BVURhSI-.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
