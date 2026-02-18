import{j as r}from"./iframe-B2CTi6cm.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-hrUSNLB1.js";import{L as m}from"./Link-BI0SHCIC.js";import{H as s}from"./HeaderNavigation-493llgmS.js";import{B as o}from"./Button-_yLWek3e.js";import{T as p}from"./Text-4QTNuVgz.js";import{I as h}from"./Image-D5Emav9_.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-zP0zgodM.js";import{C as M,M as c}from"./MenuItem-CdsQzAY_.js";import{C as I}from"./ContextMenuTrigger-Ck83CyUp.js";import"./ContextMenuSection-DUei6bL0.js";import{M as T}from"./ModalTrigger-YSgsAsfW.js";import{M as k}from"./Modal-CkPrUDri.js";import{H}from"./Heading-DlmM6Hn_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./index-DqADrqmd.js";import"./remote-C6QTRNf9.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./context-DlyTwf6g.js";import"./utils-CFhs-kxq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-iUa6wpVM.js";import"./usePress-CXOW9Qje.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocusable-DeW7JE_I.js";import"./dynamic-CQSnLDrl.js";import"./LoadingSpinner-DnfUZyUE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0k2tyOZn.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./useLabel-DatykuNG.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./AlertIcon-Bqwt-hqt.js";import"./ActionBatch-BYvDqB3T.js";import"./useOverlayController-D1PufBkN.js";import"./useStatic-gDNiy6Z_.js";import"./getActionGroupSlot-BeGUIl6W.js";import"./Popover-Dz64XD_e.js";import"./OverlayContextProvider-BUaDJxSi.js";import"./Dialog-D2pl7IFn.js";import"./RSPContexts-BnlNRtVT.js";import"./OverlayArrow-8rub2gpn.js";import"./useControlledState-D4tpAkeT.js";import"./Collection-T1sKmHBq.js";import"./CollectionBuilder-2L-4enMQ.js";import"./SelectionIndicator-BHeVA0_4.js";import"./Separator-Dt0DKQRS.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./useCollator-DfexieBx.js";import"./FocusScope-DAIUMiFj.js";import"./VisuallyHidden-D844FGjJ.js";import"./Switch-SJTXMZxH.js";import"./useFieldComponent-DO-gEAYc.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dqxs6op3.js";import"./useFormReset-BMX0RNLQ.js";import"./OverlayTrigger-C18xY8mJ.js";import"./DialogTriggerView-BhFyvgvQ.js";import"./Overlay-BCcgEorp.js";import"./ButtonView-vAiOEZiU.js";import"./Flex-B3V1yHmd.js";import"./Heading-C9cKQsqE.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
