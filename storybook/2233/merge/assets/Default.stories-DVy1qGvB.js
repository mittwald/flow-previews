import{j as r}from"./iframe-BAg_Vkif.js";import{t as d,a1 as l,_ as g,K as u,a2 as x}from"./IconWarning-eOJWxr99.js";import{L as m}from"./Link-BFinc3Rk.js";import{H as s}from"./HeaderNavigation-D-to4mO_.js";import{B as o}from"./Button-CNza9GnT.js";import{T as p}from"./Text-Cv_CDcg6.js";import{I as h}from"./Image-Pz6HJOcE.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BhnxXlvZ.js";import{C as M,M as c}from"./MenuItem-BflM4WgW.js";import{C as I}from"./ContextMenuTrigger-DvCjp00F.js";import"./ContextMenuSection-BZOfIkxf.js";import{a as T,M as k}from"./Modal-Decgdm7b.js";import{H}from"./Heading-Dn2ss8TC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./index-ClwrdcL8.js";import"./remote-OUS6bpte.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./context-Dr2F39lD.js";import"./utils-BI8UFEcl.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./dynamic-eE1nsZvE.js";import"./LoadingSpinner-BktXBT1I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-UGLVSCHM.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./useLabel-8b0YN0Pv.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CG8hIWrH.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./AlertIcon-Ce-Fu2Pm.js";import"./Action-BOjxF4Dl.js";import"./context-BAbefeLZ.js";import"./useStatic-DpED2Oge.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./Popover-DljJ0khj.js";import"./useOverlayController-DRKioFUp.js";import"./OverlayContextProvider-Bkht6Vbm.js";import"./Dialog-BlnwYq_Z.js";import"./RSPContexts-DM5FD37h.js";import"./OverlayArrow-CH26SGjP.js";import"./useControlledState-C63VSZxO.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";import"./Switch-DFiKdvqB.js";import"./useFieldComponent-B6Kjd1ej.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BTUxa_L6.js";import"./useFormReset-cz3XyTOd.js";import"./OverlayTrigger-JJZBSc9G.js";import"./DialogTriggerView-lQPzRwEp.js";import"./Overlay-DaQ4BWYl.js";import"./ButtonView-DBAtGP8R.js";import"./Flex-Fs-jWWU0.js";import"./Heading-DM0DAFfT.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
