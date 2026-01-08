import{j as r}from"./iframe-BMquwUxp.js";import{t as d,a1 as l,_ as g,K as u,a2 as x}from"./IconWarning-wcTYZTVE.js";import{L as m}from"./Link-BG06YpsI.js";import{H as s}from"./HeaderNavigation-Gj0utkQr.js";import{B as o}from"./Button-DvE0An6z.js";import{T as p}from"./Text-EG4UQ_l2.js";import{I as h}from"./Image-D0iMbonZ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Cj8aif8C.js";import{C as M,M as c}from"./MenuItem-BtwpQWtu.js";import{C as I}from"./ContextMenuTrigger-Bzz3A5D4.js";import"./ContextMenuSection-DHh_hwVu.js";import{a as T,M as k}from"./Modal-BWzUiaX8.js";import{H}from"./Heading-DmFdEGik.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./index-cAMRUrux.js";import"./remote-CiXlw4PI.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./context-BcuHL9mG.js";import"./utils-C54becjs.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./dynamic-B-3tImXr.js";import"./LoadingSpinner-BPW5hp_J.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwpJPQ3S.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./useLabel-BNLCM250.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CBlt42Oy.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";import"./AlertIcon-COvVg6Bc.js";import"./Action-4VgG125V.js";import"./context-BbITb74L.js";import"./useStatic-BMpae3_g.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./Popover-N4AFYi9M.js";import"./useOverlayController-CAAAYEI-.js";import"./OverlayContextProvider-Box79lc0.js";import"./Dialog-Dx0VK2pV.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";import"./Switch-CV-3kgrO.js";import"./useFieldComponent-7OMeXUSU.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CQCmiVfi.js";import"./useFormReset-DGUxmLDL.js";import"./OverlayTrigger-C_Vz8Pl3.js";import"./DialogTriggerView-D3ga0oyJ.js";import"./Overlay-C0PSVzv0.js";import"./ButtonView-Bn6PP7IX.js";import"./Flex-CX5My2yW.js";import"./Heading-DxuUq0JW.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
