import{j as r}from"./iframe-DYxqCFL4.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BGRYHRhg.js";import{L as m}from"./Link-BIzdt31l.js";import{H as s}from"./HeaderNavigation-B1v6UOWc.js";import{B as o}from"./Button-DGbEpLIN.js";import{T as p}from"./Text-BnII0mKt.js";import{I as h}from"./Image-B-kiAWRg.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DbaVCiQx.js";import{C as M,M as c}from"./MenuItem-C471GIy8.js";import{C as I}from"./ContextMenuTrigger-3VQSDPR2.js";import"./ContextMenuSection-BPGq4V6i.js";import{M as T}from"./ModalTrigger-CekcYLSn.js";import{M as k}from"./Modal-DUoogNsU.js";import{H}from"./Heading-HOIK8yqY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./index-DJ6wSCwd.js";import"./remote-WwxW7fyl.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./context-CfMfa2C9.js";import"./utils-C1fpOvwY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C6GqelOx.js";import"./usePress-DMR80VPZ.js";import"./useFocusRing-Byzp35A7.js";import"./useFocusable-8bvqGkWP.js";import"./dynamic-C8CcPw_G.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPYpcxnx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./useLabel-mobDYg92.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CmbZy-PD.js";import"./EmulatedBoldText-D6xSemQT.js";import"./Text-B3xsuc84.js";import"./AlertIcon-B9fJ359s.js";import"./ActionBatch-BfjBVLTQ.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./Popover-DlFp-eS3.js";import"./OverlayContextProvider-tFRc17qj.js";import"./Dialog-CiGSJFZ7.js";import"./RSPContexts-DXUT3Wo8.js";import"./OverlayArrow-R2NHUYtB.js";import"./useControlledState-Co5SihOL.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./VisuallyHidden-CZrO0U0i.js";import"./Switch-DO-T4Vyb.js";import"./useFieldComponent-DjSvrfgm.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-dw2qq8cb.js";import"./useFormReset-VwcIZGsw.js";import"./OverlayTrigger-B4TdY9D0.js";import"./DialogTriggerView-D7cVsaxC.js";import"./Overlay-CnLralOh.js";import"./ButtonView-CL1jDIH8.js";import"./Flex-BH_NinKX.js";import"./Heading-DbYjHDJK.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
