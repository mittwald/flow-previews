import{j as r}from"./iframe-pcvtdEGM.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BUxMadyi.js";import{L as m}from"./Link-F1t-GURJ.js";import{H as s}from"./HeaderNavigation-DQis6TpV.js";import{B as o}from"./Button-uyxj5lKX.js";import{T as p}from"./Text-B9qmJggM.js";import{I as h}from"./Image-s1YoCCRN.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Cjun65_-.js";import{C as M,M as c}from"./ContextMenu-DJR2fZHZ.js";import{C as I}from"./ContextMenuTrigger-mJDnczT7.js";import"./ContextMenuSection-CnsRFJEn.js";import{a as T,M as k}from"./Modal-BDJVqM5c.js";import{H}from"./Heading-BaRKstVM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./index-YznY-g7A.js";import"./remote-O2EONUZN.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./context-We2COa_S.js";import"./utils-fsWZtkeO.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./dynamic-CjFFErYF.js";import"./LoadingSpinner-CRozfiA2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7g9LfsB.js";import"./ProgressBar-BJtj52rd.js";import"./Label-BTMeT-8z.js";import"./Hidden-DReGI82W.js";import"./useLabel-D_iN71C8.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DdUrC3oM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./Text-DqkI-mFO.js";import"./AlertIcon-CRV-RQ9G.js";import"./Switch-RCsrPuWC.js";import"./useFieldComponent-DX_YsVYS.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CHUJbcAS.js";import"./useFormReset-D7xZNI6Q.js";import"./useControlledState-CJg030Qn.js";import"./VisuallyHidden-DxWu5xEc.js";import"./Dialog-DwYtEz4y.js";import"./RSPContexts-DZfuqB-R.js";import"./OverlayArrow-KSA73Rxs.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./Action-DJjvSFsd.js";import"./context-rIsit77n.js";import"./useStatic-BCDrLUdV.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./Popover-DAaX80Bn.js";import"./useOverlayController-DYra3gnv.js";import"./OverlayContextProvider-B8OuVkDx.js";import"./OverlayTrigger-AmfCki8T.js";import"./DialogTriggerView-CUqIg4o3.js";import"./Overlay-D07wrdaz.js";import"./ButtonView-CX1Lh7Nh.js";import"./Flex-CqkyVaqo.js";import"./Heading-BBMu1zEG.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
