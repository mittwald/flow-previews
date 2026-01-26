import{j as r}from"./iframe-DqoQz6HB.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CoQAKsWX.js";import{L as m}from"./Link-C_qWUNLD.js";import{H as s}from"./HeaderNavigation-BtpS0sX1.js";import{B as o}from"./Button-TzxOXnkY.js";import{T as p}from"./Text-CYiIq5CT.js";import{I as h}from"./Image-gm0zrM5X.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DKbKlnkL.js";import{C as M,M as c}from"./ContextMenu-COPqvDsm.js";import{C as I}from"./ContextMenuTrigger-Cde5B6R6.js";import"./ContextMenuSection-Bjk6b3v9.js";import{a as T,M as k}from"./Modal-BZ-CAslz.js";import{H}from"./Heading-BXT238vs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./index-BvQFjuk4.js";import"./remote-BY0bWN8b.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./context-BlYILeGE.js";import"./utils-OqNg9teq.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DK4IO0uy.js";import"./useFocus-zlQbWpmC.js";import"./useFocusRing-B1e51Uuh.js";import"./useFocusable-CZXIUH7h.js";import"./dynamic-uyvUxMs1.js";import"./LoadingSpinner-DERXhFNJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CY3jZXsw.js";import"./ProgressBar-C57Cfwin.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./useLabel-CCbYr5fG.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CwaVi4T-.js";import"./EmulatedBoldText-DhB0ijlY.js";import"./Text-78LD2Kdh.js";import"./AlertIcon-DE1EJRfD.js";import"./Switch-Cdvr7Xo1.js";import"./useFieldComponent-X8YFoMoP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ovMXZ6WD.js";import"./useFormReset-BpNr6OOM.js";import"./useControlledState-CN54iNBt.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./Dialog-D_XSL9SB.js";import"./RSPContexts-C8plwG6a.js";import"./OverlayArrow-8MHoSxw7.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./SelectionManager-UV_-jhfP.js";import"./useEvent-Dki6vxlR.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./Action-DgtVbOuJ.js";import"./context-DlAFKpyv.js";import"./useStatic-DhkP1cmF.js";import"./getActionGroupSlot-6JauDhjj.js";import"./Popover-Cy3iouQi.js";import"./useOverlayController-rufURv7M.js";import"./OverlayContextProvider-D9Ss5hpb.js";import"./OverlayTrigger-DI9kGsc2.js";import"./DialogTriggerView-DVeKIANf.js";import"./Overlay-DTzYO__N.js";import"./ButtonView-B2hG11WB.js";import"./Flex-C8NHXaB6.js";import"./Heading-BOKCcgdn.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
