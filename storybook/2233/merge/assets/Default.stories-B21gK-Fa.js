import{j as r}from"./iframe-DqAMh1gn.js";import{t as d,a1 as l,_ as g,K as u,a2 as x}from"./IconWarning-BV3xGinn.js";import{L as m}from"./Link-D-GaayyF.js";import{H as s}from"./HeaderNavigation-CLRKK6Zt.js";import{B as o}from"./Button-BzL2mXU9.js";import{T as p}from"./Text-1p9r91sB.js";import{I as h}from"./Image-61qoOJfE.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-TT3EetV-.js";import{C as M,M as c}from"./MenuItem-BrHzJjhR.js";import{C as I}from"./ContextMenuTrigger-CeKTXG0n.js";import"./ContextMenuSection-CNlzjKiC.js";import{a as T,M as k}from"./Modal-juefe_FE.js";import{H}from"./Heading-Cop9Lz_q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./remote-BXLOBgAx.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./context-DRhwbml9.js";import"./utils-WhkxUCK6.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-ClkvTl3z.js";import"./useFocus-Cr8fiyXD.js";import"./useFocusRing-BN14JWVs.js";import"./useFocusable-DO1mJmot.js";import"./dynamic-CAN3WNRI.js";import"./LoadingSpinner-BWCnwVbS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRXTkefG.js";import"./ProgressBar-CxeXPRaQ.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./useLabel-BKYm2rJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CSMWWW9k.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./Text-DmUxfOW-.js";import"./AlertIcon-C7t-BIgM.js";import"./Action-B_T5lnyR.js";import"./context-ChmspXAM.js";import"./useStatic-BuuX2mtG.js";import"./getActionGroupSlot-BJX70W99.js";import"./Popover-C4iHg1bq.js";import"./useOverlayController-Dx3SUtDs.js";import"./OverlayContextProvider-BmY6HjYo.js";import"./Dialog-AIPHRx2P.js";import"./RSPContexts-A1MHH_Cz.js";import"./OverlayArrow-DNiZVgAH.js";import"./useControlledState-ChPR7hzM.js";import"./Collection-CQjuLfpr.js";import"./CollectionBuilder-Dk_6EAPH.js";import"./SelectionIndicator-Qt-acHPk.js";import"./Separator-CEkzsxq5.js";import"./SelectionManager-CsReWWw0.js";import"./useEvent-DRkjAlB5.js";import"./useCollator-DvzaADfo.js";import"./FocusScope-azgg1m0B.js";import"./VisuallyHidden-B3gyx1tV.js";import"./Switch-vDj0nI53.js";import"./useFieldComponent-CgfE5MLg.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CDuP3UHJ.js";import"./useFormReset-CllrYVFd.js";import"./OverlayTrigger-Yhwsf07R.js";import"./DialogTriggerView-DMXJ9lzt.js";import"./Overlay-BrmmSwa8.js";import"./ButtonView-CNuhPFwe.js";import"./Flex--rm9RJyN.js";import"./Heading-DO-ilkLm.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
