import{j as r}from"./iframe-DU1OTSEW.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BOLd-bsg.js";import{L as m}from"./Link-qcDoNqE3.js";import{H as s}from"./HeaderNavigation-ISrUXmjk.js";import{B as o}from"./Button-C02FBbwW.js";import{T as p}from"./Text-BlwSaqXM.js";import{I as h}from"./Image-BygcFRdF.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-snHIo9VJ.js";import{C as M,M as c}from"./MenuItem-DVBRAjy4.js";import{C as I}from"./ContextMenuTrigger-b1fm8jI3.js";import"./ContextMenuSection-B26kJYav.js";import{M as T}from"./ModalTrigger-BtyzQmKi.js";import{M as k}from"./Modal-D00g1B7I.js";import{H}from"./Heading-Cl160jiD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./index-Ben_k6_D.js";import"./remote-C4J6eDzq.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./context-MHXBCA58.js";import"./utils-Dj7KEBV3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-u6Gylu9g.js";import"./usePress-DCIqPyrL.js";import"./useFocusRing-L_sy4AuI.js";import"./useFocusable-XjJjjkQd.js";import"./dynamic-BTXPuCk3.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-njBxl16I.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./useLabel-B3DB9qnR.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";import"./Text-iBzBCpEi.js";import"./AlertIcon-_4be_GIR.js";import"./ActionBatch-BeODW9YZ.js";import"./useOverlayController-CN_E_UXR.js";import"./useStatic-B4QbuKZS.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./Popover-DKS3uTEp.js";import"./OverlayContextProvider-CEpEJiOz.js";import"./Dialog-rIHNVDTB.js";import"./RSPContexts-CELva0rI.js";import"./OverlayArrow-Bh5zDL_J.js";import"./useControlledState-C4NYpY3o.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./SelectionIndicator-BBXAzCHo.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";import"./Switch-CRk7Jh9t.js";import"./useFieldComponent-DAmXFBUF.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CUbeoRXo.js";import"./useFormReset-B6aj4tVR.js";import"./OverlayTrigger-Owxo0qVZ.js";import"./DialogTriggerView-O7fdGBdx.js";import"./Overlay-DxVOVPlK.js";import"./ButtonView-B-0Eh3g3.js";import"./Flex-hLK_L7IW.js";import"./Heading-D1wlHBOV.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
