import{j as r}from"./iframe-DFKQ2QsC.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BuA9AHid.js";import{L as m}from"./Link-D6w5LeM-.js";import{H as s}from"./HeaderNavigation-CM8p5L-I.js";import{B as o}from"./Button-CumhvKwr.js";import{T as p}from"./Text-BEPoPMFj.js";import{I as h}from"./Image-C3qvLo_W.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CaGa3_rW.js";import{C as M,M as c}from"./MenuItem-DkK5bQwg.js";import{C as I}from"./ContextMenuTrigger-sBIsKvDl.js";import"./ContextMenuSection-DFA9uj7i.js";import{a as T,M as k}from"./Modal-CALycNtN.js";import{H}from"./Heading-DbtDsfGc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./index-BLTW5Tcp.js";import"./remote-BP8uJVcU.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./context-m8OE0ddO.js";import"./utils-BJXdD5he.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BuPH9-PX.js";import"./usePress-CE-sEEB4.js";import"./useFocusRing-Dltr6KPm.js";import"./useFocusable-C6PlbLtm.js";import"./dynamic-8YXtFeDo.js";import"./LoadingSpinner-DwolGT18.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBkz1b5H.js";import"./ProgressBar-DQlWH-Q4.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./useLabel-CurstbwI.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C3pjfYL0.js";import"./EmulatedBoldText-CZthuZwX.js";import"./Text-D27_pVCF.js";import"./AlertIcon-D5_dS1m5.js";import"./Action-C10g_G2S.js";import"./context-DCw83PuI.js";import"./useStatic-BfD-d5xb.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./Popover-D_QG3gy8.js";import"./useOverlayController-r9uf67Om.js";import"./OverlayContextProvider-C7UAkNVd.js";import"./Dialog-BtwdVLzC.js";import"./RSPContexts-ta7dPUPH.js";import"./OverlayArrow-D6jpYtlx.js";import"./useControlledState-DUrZ8j4h.js";import"./Collection-C9L-nPBS.js";import"./CollectionBuilder-DCYsymNm.js";import"./SelectionIndicator-BFMZIIpU.js";import"./Separator-VmOMLBSn.js";import"./SelectionManager-6OiS_y3h.js";import"./useEvent-my0xaAeI.js";import"./useCollator-CO4w-iZj.js";import"./FocusScope-B8-7lMpW.js";import"./VisuallyHidden-CKDTSDk1.js";import"./Switch-CVPjNDAE.js";import"./useFieldComponent-R5E6D8Ic.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-aXPCARy8.js";import"./useFormReset-DwR8gwPw.js";import"./OverlayTrigger-BT52IZK9.js";import"./DialogTriggerView-Dt6Fta8b.js";import"./Overlay-DxO7_lvt.js";import"./ButtonView-AQo5jRtJ.js";import"./Flex--itG2mJY.js";import"./Heading-DOKJ2uYX.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
