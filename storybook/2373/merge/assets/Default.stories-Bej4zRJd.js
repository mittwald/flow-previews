import{j as r}from"./iframe-BOfxQ126.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BoBPkWIf.js";import{L as m}from"./Link-2jrt1kD4.js";import{H as s}from"./HeaderNavigation-C6rhMQ4o.js";import{B as o}from"./Button-y6FeYCBC.js";import{T as p}from"./Text-kIO13lDY.js";import{I as h}from"./Image-D-IucPdr.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-ysieR5ie.js";import{C as M,M as c}from"./MenuItem-p75jotsc.js";import{C as I}from"./ContextMenuTrigger-BGDhuHR_.js";import"./ContextMenuSection-cxjJtW6K.js";import{M as T}from"./ModalTrigger-eYsMh8Sj.js";import{M as k}from"./Modal-DHfoMw3X.js";import{H}from"./Heading-XWK9z325.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./index-X6kmY2GD.js";import"./remote-DjEyU7NV.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./context-Bpmop-v_.js";import"./utils-Ca0-H8MP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CUROCE8M.js";import"./usePress-up0eurfY.js";import"./useFocusRing-i6kyKwnh.js";import"./useFocusable-C918yQby.js";import"./dynamic-BEImSkKK.js";import"./LoadingSpinner-BjosoRSs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-6yn426ID.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./useLabel-5EK40Aa-.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./Text-OoL-eb0_.js";import"./AlertIcon-CIUnjm1o.js";import"./ActionBatch-B3OckZQJ.js";import"./useOverlayController-NqoHBo9l.js";import"./useStatic-DMadDPeg.js";import"./getActionGroupSlot-RLrBfD2i.js";import"./Popover-BeNB5A8p.js";import"./OverlayContextProvider-BWPPKQaI.js";import"./Dialog-CCDN7DJz.js";import"./RSPContexts-8t9TLuqJ.js";import"./OverlayArrow-DOAKdHdF.js";import"./useControlledState-DE1u8yHr.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./Separator-BU8JOY49.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./useCollator-CnlvukHk.js";import"./FocusScope-CCHjHw-t.js";import"./VisuallyHidden-DfBCvB4u.js";import"./Switch-CljfzNPz.js";import"./useFieldComponent-D5YpTCds.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CFHswsgb.js";import"./useFormReset-B-rsDa9Z.js";import"./OverlayTrigger-ClVCYjM8.js";import"./DialogTriggerView-Cp6VmI0E.js";import"./Overlay-D-1f0Sj_.js";import"./ButtonView-CgihUfDk.js";import"./Flex-ClQXTQke.js";import"./Heading-t8wVFZ6a.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
