import{j as r}from"./iframe-kP2HEfFS.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-3wMfkhbI.js";import{L as m}from"./Link-Ct2fGP39.js";import{H as s}from"./HeaderNavigation-B2kqOEfV.js";import{B as o}from"./Button-D2SKyW-T.js";import{T as p}from"./Text-DmTsXHLN.js";import{I as h}from"./Image-DkiGbWTA.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DmBWJZSa.js";import{C as M,M as c}from"./ContextMenu-B6NtKoSD.js";import{C as I}from"./ContextMenuTrigger-AK9fSYvu.js";import"./ContextMenuSection-Dtdvg2h1.js";import{a as T,M as k}from"./Modal-BsM5mIVe.js";import{H}from"./Heading-BD2z6cnX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./index-Gr0VxzdI.js";import"./remote-7RhInu5H.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./utils-C12UPk0k.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./dynamic-Bb3YYypk.js";import"./LoadingSpinner-DqLZcArG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./useLabel-07phmwB_.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CLBqp6VR.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./Text-Bt0sFzeR.js";import"./AlertIcon-BKaF02an.js";import"./Switch-BJQOC0uC.js";import"./useFieldComponent-D28HcwQQ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CQEaldhR.js";import"./useFormReset-BTQYEics.js";import"./useControlledState-K2EmMrc1.js";import"./VisuallyHidden-BxKC931y.js";import"./Dialog-DLhIMuXA.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./Action-DkWPc0_f.js";import"./context-Dy6MMTPO.js";import"./useStatic-D099is7R.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./Popover-rKvPy3vS.js";import"./useOverlayController-BKD7nFkO.js";import"./OverlayContextProvider-BizSMrSr.js";import"./OverlayTrigger-iZasDHkJ.js";import"./DialogTriggerView-YgBqYt-h.js";import"./Overlay-DDRE7z0q.js";import"./ButtonView-B-wfMpgB.js";import"./Flex-DHNOJ9wH.js";import"./Heading-BzscSBm2.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
