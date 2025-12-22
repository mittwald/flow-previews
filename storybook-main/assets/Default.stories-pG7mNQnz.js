import{j as r}from"./iframe-DALg75d7.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-CIuZ66pt.js";import{L as m}from"./Link-DF9dIRnM.js";import{H as s}from"./HeaderNavigation-QTSHdxzq.js";import{B as o}from"./Button-CxCFU3Sm.js";import{T as p}from"./Text-BfSm9wB3.js";import{I as h}from"./Image-D58K3Q2l.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CYX61ygr.js";import{C as M,M as c}from"./MenuItem-DQIQobtU.js";import{C as I}from"./ContextMenuTrigger-_BKN-0Cf.js";import"./ContextMenuSection-nagFkt4I.js";import{a as T,M as k}from"./Modal-D4tFA_wU.js";import{H}from"./Heading-CnbEZOuS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./index-BOS789La.js";import"./remote-Bn6u74KD.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./context-D-SwIuvT.js";import"./utils-CCMGMBS3.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BlF5TfdE.js";import"./useFocus-uyJaeSg2.js";import"./useFocusRing-DgbRXdyO.js";import"./useFocusable-KXnvIYuK.js";import"./dynamic-DnyVnPzZ.js";import"./LoadingSpinner-DKmXkdSk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAn5W5h2.js";import"./ProgressBar-BxOMxEJ2.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./useLabel-C6FFt053.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BOjJAEEq.js";import"./EmulatedBoldText-BXgIlIDh.js";import"./Text-CuJqaQ90.js";import"./AlertIcon-DlfHKdTN.js";import"./Action-B-LX0Gdh.js";import"./context-VL9rXB3T.js";import"./useStatic-C_Axqqwt.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./Popover-DFPDtyNS.js";import"./useOverlayController-CJNm9GBn.js";import"./OverlayContextProvider-BeL-SPbw.js";import"./Dialog-BcVnlKtW.js";import"./RSPContexts-Bv06n-kH.js";import"./OverlayArrow-DlELcq_K.js";import"./useControlledState-10c65vgi.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./VisuallyHidden-BtdNRxOz.js";import"./Switch-B00B615G.js";import"./useFieldComponent-BaBZIB3g.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BWEgcdw1.js";import"./useFormReset-D3blZuYj.js";import"./OverlayTrigger-DY2Hgbuf.js";import"./DialogTriggerView-DiuSV62c.js";import"./Overlay-V_cVQ6zk.js";import"./ButtonView-hke_KLLb.js";import"./Flex-DQKYRLrR.js";import"./Heading-D55KeDUv.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
